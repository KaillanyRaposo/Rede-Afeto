import { useEffect, useMemo, useRef, useState } from "react";

const safeParseJsonArray = (value) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const makeId = () => {
  const uuid = globalThis.crypto?.randomUUID?.();
  if (uuid) return uuid;
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const formatDate = (isoString) => {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

const formatTime = (isoString) => {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const buildSeedMessages = () => {
  const now = Date.now();
  const mk = (daysAgo, hour, minute, text, id) => {
    const d = new Date(now - daysAgo * 24 * 60 * 60 * 1000);
    d.setHours(hour, minute, 0, 0);
    return { id, text, createdAt: d.toISOString() };
  };

  return [
    mk(7, 19, 10, "Hoje eu fiquei feliz porque consegui ler uma história inteira.", "seed-1"),
    mk(4, 20, 5, "Eu senti saudade da minha família, mas também me diverti na escola.", "seed-2"),
    mk(1, 18, 40, "Eu tô um pouco ansioso, mas quero tentar de novo amanhã.", "seed-3"),
  ];
};

export default function DiarioChat({ storageKey, childName }) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(() => {
    const existing = safeParseJsonArray(localStorage.getItem(storageKey));
    if (existing.length > 0) return existing;

    const seededKey = `${storageKey}:seeded`;
    const alreadySeeded = localStorage.getItem(seededKey);
    if (alreadySeeded) return [];

    const seed = buildSeedMessages();
    localStorage.setItem(storageKey, JSON.stringify(seed));
    localStorage.setItem(seededKey, "1");
    return seed;
  });
  const listRef = useRef(null);

  const title = useMemo(() => {
    if (!childName) return "Diário";
    return `Diário do(a) ${childName}`;
  }, [childName]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, storageKey]);

  useEffect(() => {
    if (isHistoryOpen) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isHistoryOpen, messages.length]);

  const historyDays = useMemo(() => {
    const sorted = [...messages].sort((a, b) => {
      const aTime = new Date(a.createdAt ?? 0).getTime();
      const bTime = new Date(b.createdAt ?? 0).getTime();
      return aTime - bTime;
    });

    return sorted.reduce((acc, msg) => {
      const label = formatDate(msg.createdAt);
      const last = acc[acc.length - 1];
      if (!last || last.label !== label) {
        acc.push({ label, items: [msg] });
        return acc;
      }
      last.items.push(msg);
      return acc;
    }, []);
  }, [messages]);

  const todayMessages = useMemo(() => {
    const todayLabel = formatDate(new Date().toISOString());
    return messages.filter((msg) => formatDate(msg.createdAt) === todayLabel);
  }, [messages]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;

    const newMessage = {
      id: makeId(),
      text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setDraft("");
  };

  return (
    <div className="diario-chat" aria-label={title}>
      <section className="diario-chat__panel" aria-label={title}>
        <header className="diario-chat__header">
          <div className="diario-chat__title">{title}</div>
          <div className="diario-chat__header-actions">
            <button
              type="button"
              className="diario-chat__header-btn diario-chat__header-btn--text"
              onClick={() => setIsHistoryOpen((prev) => !prev)}
            >
              {isHistoryOpen ? "Voltar" : "Histórico"}
            </button>
          </div>
        </header>

        {isHistoryOpen ? (
          <div className="diario-chat__messages diario-chat__history" role="region" aria-label="Histórico do diário">
            {historyDays.length === 0 ? (
              <div className="diario-chat__empty">Ainda não há registros no diário.</div>
            ) : (
              historyDays.map((day) => (
                <section key={day.label} className="diario-chat__history-day" aria-label={`Registros de ${day.label}`}>
                  <div className="diario-chat__history-date">{day.label}</div>
                  <div className="diario-chat__history-items">
                    {day.items.map((msg) => (
                      <div key={msg.id} className="diario-chat__history-item">
                        <div className="diario-chat__history-time">{formatTime(msg.createdAt)}</div>
                        <div className="diario-chat__history-text">{msg.text}</div>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        ) : (
          <>
            <div className="diario-chat__messages" ref={listRef} role="log" aria-live="polite">
              {todayMessages.length === 0 ? (
                <div className="diario-chat__empty">
                  Como você está se sentindo hoje? Escreva aqui para registrar no seu diário.
                </div>
              ) : (
                todayMessages.map((msg) => (
                  <div key={msg.id} className="diario-chat__message">
                    <div className="diario-chat__message-text">{msg.text}</div>
                    <div className="diario-chat__message-time">{formatDateTime(msg.createdAt)}</div>
                  </div>
                ))
              )}
            </div>

            <form
              className="diario-chat__composer"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <textarea
                className="diario-chat__input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  if (e.shiftKey) return;
                  e.preventDefault();
                  send();
                }}
                rows={3}
                placeholder="Conte como foi seu dia..."
                aria-label="Escrever no diário"
              />
              <button type="submit" className="diario-chat__send" disabled={!draft.trim()}>
                Enviar
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
