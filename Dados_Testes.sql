USE adocao;

-- =========================
-- USUARIOS
-- =========================
INSERT INTO Usuario (nome, email, senha, tipo) VALUES
('João Silva', 'joao@email.com', '123', 'comum'),
('Maria Souza', 'maria@email.com', '123', 'comum'),
('Carlos Admin', 'admin@email.com', 'admin123', 'moderador');

-- =========================
-- ONGs
-- =========================
INSERT INTO ONG (nome, cnpj, email, telefone) VALUES
('Lar Esperança', '12345678000100', 'contato@laresperanca.org', '81999999999'),
('Casa do Futuro', '98765432000100', 'contato@casadofuturo.org', '81888888888');

-- =========================
-- CRIANCAS
-- =========================
INSERT INTO Crianca (nome, idade, descricao, status, id_ong) VALUES
('Ana', 10, 'Gosta de desenhar e brincar.', 'disponivel', 1),
('Lucas', 12, 'Ama futebol e jogos.', 'disponivel', 1),
('Beatriz', 9, 'Muito comunicativa e alegre.', 'em_processo', 2);

-- =========================
-- POSTAGENS
-- =========================
INSERT INTO Postagem (titulo, conteudo, id_crianca, id_ong) VALUES
('Conheça Ana', 'Ana é uma criança muito talentosa.', 1, 1),
('Lucas precisa de apoio', 'Lucas adora esportes e quer um padrinho.', 2, 1),
('História de Beatriz', 'Beatriz está em processo de apadrinhamento.', 3, 2);

-- =========================
-- INTERESSE (APADRINHAMENTO)
-- =========================
INSERT INTO Interesse (id_usuario, id_crianca, status) VALUES
(1, 1, 'pendente'),
(2, 2, 'em_analise'),
(1, 3, 'aprovado');

-- =========================
-- FOTOS
-- =========================
INSERT INTO Foto (url, id_crianca) VALUES
('https://site.com/foto_ana.jpg', 1),
('https://site.com/foto_lucas.jpg', 2),
('https://site.com/foto_beatriz.jpg', 3);

-- =========================
-- CONTEUDO (PARTE EDUCATIVA)
-- =========================
INSERT INTO Conteudo (titulo, descricao, tipo, id_autor) VALUES
('Como se tornar padrinho afetivo', 'Veja o passo a passo para participar.', 'guia', 3),
('Documentos necessários', 'Lista de documentos exigidos.', 'guia', 3);