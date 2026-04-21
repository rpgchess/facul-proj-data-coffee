# Data Coffee ☕

## 📌 Sobre o Projeto

Aplicação web para gerenciamento de cafeteria desenvolvida como projeto de faculdade. Sistema completo para controle de produtos, vendas e operações de uma cafeteria/coffee shop.

## 🎓 Contexto Acadêmico

- **Instituição**: Projeto de Faculdade
- **Tipo**: Projeto prático de desenvolvimento web Java EE
- **Tema**: Sistema de Gerenciamento de Cafeteria

## 🚀 Tecnologias Utilizadas

- **Backend**: Java 8+
- **Build Tool**: Maven
- **Web Framework**: Java Servlets + JSP
- **Database**: SQLite (scripts SQL inclusos)
- **Frontend**: HTML, CSS, JavaScript
- **Servidor**: Apache Tomcat / Servidor de aplicação Java EE

## 📁 Estrutura do Projeto

```
facul-proj-data-coffee/
├── src/
│   └── main/
│       ├── java/               # Código-fonte Java
│       │   └── br.app.dcc/
│       │       ├── model/      # Modelos de dados
│       │       ├── dao/        # Data Access Objects
│       │       ├── servlet/    # Servlets (Controllers)
│       │       └── util/       # Utilitários
│       └── webapp/             # Arquivos web (JSP, HTML, CSS, JS)
│           ├── WEB-INF/
│           │   └── web.xml    # Configuração da aplicação
│           ├── css/
│           ├── js/
│           └── *.jsp           # Páginas JSP
├── pom.xml                     # Configuração Maven
├── CREATETABLE.sql             # Script de criação de tabelas
├── INSERTVALUES.sql            # Script de dados iniciais
├── .editorconfig               # Configuração de editor
└── README.md
```

## 🗄️ Database

O projeto inclui scripts SQL para inicialização do banco de dados SQLite:

- **CREATETABLE.sql**: Criação das tabelas do sistema
- **INSERTVALUES.sql**: Inserção de dados iniciais (produtos, categorias, etc.)

### Inicializar o Banco

```bash
# Se o banco não existir, os scripts serão executados automaticamente
# Ou execute manualmente:
sqlite3 data_coffee.db < CREATETABLE.sql
sqlite3 data_coffee.db < INSERTVALUES.sql
```

## 🔧 Funcionalidades

### Sistema de Gestão

- ✅ **Produtos**
  - Cadastro, edição, exclusão
  - Categorização
  - Controle de estoque
  - Preços e descrições

- ✅ **Vendas**
  - Registro de vendas
  - Cálculo de totais
  - Histórico de transações

- ✅ **Relatórios**
  - Produtos mais vendidos
  - Relatórios de vendas por período
  - Controle de estoque

## 🛠️ Como Executar

### Pré-requisitos

- **Java JDK 8+** instalado
- **Maven 3.6+** instalado
- **Apache Tomcat 8.5+** ou outro servidor de aplicação Java EE
- **SQLite** (para manipular banco manualmente, opcional)

### Instalação e Execução

```bash
# 1. Clonar o repositório
git clone <url-do-repositorio>
cd facul-proj-data-coffee

# 2. Compilar o projeto
mvn clean compile

# 3. Gerar o arquivo WAR
mvn clean package

# 4. Deploy no Tomcat
# Copie o arquivo target/data-coffee-1.0.0.war para a pasta webapps do Tomcat
cp target/data-coffee-1.0.0.war $TOMCAT_HOME/webapps/

# 5. Iniciar o Tomcat
$TOMCAT_HOME/bin/startup.sh  # Linux/Mac
$TOMCAT_HOME/bin/startup.bat # Windows

# 6. Acessar a aplicação
# Abra o navegador em: http://localhost:8080/data-coffee-1.0.0/
```

### Executar com Maven (desenvolvimento)

```bash
# Usando plugin Maven Tomcat (adicione ao pom.xml)
mvn tomcat7:run

# Acessar em: http://localhost:8080/data-coffee
```

## ⚙️ Melhorias Implementadas

### ✅ Build e Configuração
- Maven atualizado com versão 1.0.0
- Dependências atualizadas (SQLite 3.45, Gson 2.10.1)
- Plugins de build configurados
- EditorConfig para garantir encoding UTF-8
- JUnit 5 adicionado para testes

### ✅ Boas Práticas
- Encoding UTF-8 configurado em todos os arquivos
- Estrutura Maven padrão
- Separação clara de responsabilidades (MVC)

## 📝 Configuração do Tomcat

Adicione ao `pom.xml` para desenvolvimento local:

```xml
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
        <port>8080</port>
        <path>/data-coffee</path>
    </configuration>
</plugin>
```

## 🔗 Projetos Relacionados

- [facul-proj-data-coffee-front](../facul-proj-data-coffee-front) - Frontend standalone do sistema

## 🧪 Testes

```bash
# Executar testes unitários
mvn test

# Gerar relatório de cobertura
mvn test jacoco:report
```

## 📚 Aprendizados

Este projeto cobre conceitos importantes:
- Servlets e ciclo de vida de requisições HTTP
- Processamento de formulários HTML
- Persistência com JDBC e SQLite
- Padrão MVC em aplicações web
- JSP e JSTL para renderização de views
- Maven para automação de build

## 👨‍💻 Autor

Claudio Almeida

## 📄 Licença

Projeto acadêmico/educacional
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
