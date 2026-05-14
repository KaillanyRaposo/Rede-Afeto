CREATE DATABASE IF NOT EXISTS adocao;
USE adocao;


CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,

    -- comum = usuário padrão
    -- moderador = administração
    -- crianca = criança acolhida que acessa biblioteca
    tipo ENUM('comum', 'moderador', 'crianca') DEFAULT 'comum',

    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE ONG (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) UNIQUE,
    email VARCHAR(100),
    telefone VARCHAR(20)
);


CREATE TABLE Crianca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    descricao TEXT,

    status ENUM(
        'disponivel',
        'em_processo',
        'apadrinhada',
        'indisponivel'
    ) DEFAULT 'disponivel',

    id_ong INT,

    FOREIGN KEY (id_ong) REFERENCES ONG(id)
);


CREATE TABLE Postagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150),
    conteudo TEXT,
    data_postagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    id_crianca INT,
    id_ong INT,

    FOREIGN KEY (id_crianca) REFERENCES Crianca(id),
    FOREIGN KEY (id_ong) REFERENCES ONG(id)
);


CREATE TABLE Interesse (
    id INT AUTO_INCREMENT PRIMARY KEY,

    id_usuario INT,
    id_crianca INT,

    data_interesse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status ENUM(
        'pendente',
        'em_analise',
        'aprovado',
        'recusado',
        'cancelado'
    ) DEFAULT 'pendente',

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_crianca) REFERENCES Crianca(id)
);


CREATE TABLE Imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,

    url VARCHAR(255),

    id_crianca INT,

    FOREIGN KEY (id_crianca) REFERENCES Crianca(id)
);


CREATE TABLE Conteudo (
    id INT AUTO_INCREMENT PRIMARY KEY,

    titulo VARCHAR(150),
    descricao TEXT,
    tipo VARCHAR(50),

    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    id_autor INT,

    FOREIGN KEY (id_autor) REFERENCES Usuario(id)
);

-- =========================
-- Livros adicionados pela ONG
-- =========================
CREATE TABLE Livro (
    id INT AUTO_INCREMENT PRIMARY KEY,

    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100),
    descricao TEXT,
    capa_url VARCHAR(255),
    arquivo_pdf VARCHAR(255),

    -- Faixa etária
    faixa_etaria ENUM(
        'ate_8',
        '6_8',
        '9_12',
        '13_15',
        '16_18'
    ) NOT NULL,

    -- Gêneros
    genero ENUM(
        'aventura',
        'quadrinhos',
        'contos_de_fada',
        'poesia',
        'educativo',
        'misterio',
        'ficcao_cientifica',
        'biografia',
        'historia'
    ) NOT NULL,

    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    id_ong INT NOT NULL,

    FOREIGN KEY (id_ong) REFERENCES ONG(id)
);

-- =========================
-- Controle da biblioteca da criança
-- =========================
CREATE TABLE BibliotecaUsuario (
    id INT AUTO_INCREMENT PRIMARY KEY,

    id_usuario INT NOT NULL,
    id_livro INT NOT NULL,

    -- Status do livro para o usuário
    status ENUM(
        'quero_ler',
        'favorito',
        'lendo_novamente',
        'lido'
    ) NOT NULL,

    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_livro) REFERENCES Livro(id)
);