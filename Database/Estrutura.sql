-- =========================
-- CRIAR BANCO
-- =========================
CREATE DATABASE IF NOT EXISTS adocao;
USE adocao;

-- =========================
-- TABELA: Usuario
-- =========================
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    tipo ENUM('comum', 'moderador') DEFAULT 'comum',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- TABELA: ONG
-- =========================
CREATE TABLE ONG (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) UNIQUE,
    email VARCHAR(100),
    telefone VARCHAR(20)
);

-- =========================
-- TABELA: Crianca
-- =========================
CREATE TABLE Crianca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    descricao TEXT,
    status ENUM('disponivel', 'em_processo', 'apadrinhada', 'indisponivel') DEFAULT 'disponivel',
    id_ong INT,
    FOREIGN KEY (id_ong) REFERENCES ONG(id)
);

-- =========================
-- TABELA: Postagem
-- =========================
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

-- =========================
-- TABELA: Interesse
-- =========================
CREATE TABLE Interesse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_crianca INT,
    data_interesse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pendente', 'em_analise', 'aprovado', 'recusado', 'cancelado') DEFAULT 'pendente',
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_crianca) REFERENCES Crianca(id)
);

-- =========================
-- TABELA: Foto
-- =========================
CREATE TABLE Foto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255),
    id_crianca INT,
    FOREIGN KEY (id_crianca) REFERENCES Crianca(id)
);

-- =========================
-- TABELA: Conteudo
-- =========================
CREATE TABLE Conteudo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150),
    descricao TEXT,
    tipo VARCHAR(50),
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES Usuario(id)
);