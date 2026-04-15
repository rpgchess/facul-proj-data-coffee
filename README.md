# Data Coffee ☕

## 📌 Sobre o Projeto

Aplicação web para gerenciamento de cafeteria desenvolvida como projeto de faculdade. Sistema completo para controle de produtos, vendas e operações de uma cafeteria/coffee shop.

## 🎓 Contexto Acadêmico

- **Instituição**: Projeto de Faculdade
- **Tipo**: Projeto prático de desenvolvimento web
- **Tema**: Sistema de Gerenciamento de Cafeteria

## 🚀 Tecnologias Utilizadas

- **Backend**: Java
- **Build Tool**: Maven
- **Web Framework**: Java Servlets + JSP
- **Database**: SQL (scripts inclusos)
- **Frontend**: HTML, CSS, JavaScript

## 📁 Estrutura do Projeto

```
facul-proj-data-coffee/
├── src/                    # Código-fonte Java
├── pom.xml                 # Configuração Maven
├── CREATETABLE.sql         # Script de criação de tabelas
├── INSERTVALUES.sql        # Script de inserção de dados
└── .tern-project           # Configuração IDE
```

## 🗄️ Database

O projeto inclui scripts SQL para inicialização do banco de dados:

- **CREATETABLE.sql**: Criação das tabelas do sistema
- **INSERTVALUES.sql**: Inserção de dados iniciais

## 🛠️ Como Executar

### Pré-requisitos

- Java JDK 8+
- Maven 3.x
- Servidor de aplicação Java (Tomcat, WildFly, etc.)
- Banco de dados SQL

### Instalação

```bash
# 1. Clonar o repositório
git clone <repository-url>

# 2. Configurar o banco de dados
# Executar CREATETABLE.sql
# Executar INSERTVALUES.sql

# 3. Build do projeto
mvn clean install

# 4. Deploy do WAR gerado no servidor de aplicação
```

## 📦 Build

```bash
mvn clean package
```

O arquivo `.war` será gerado em `target/data-coffee-0.0.1.war`

## 👨‍💻 Autor

Claudio Almeida

## 📝 Licença

Projeto acadêmico

---

> **Nota**: Este é um projeto desenvolvido para fins educacionais durante o curso de graduação.
