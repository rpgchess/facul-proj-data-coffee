package br.app.model.domain;

public class Atividade {
	
	private int id;
	private String data;
	private String entrega;
	private String curso;
	private String disciplina;
	private String turma;
	private String trabalho;
	private int quantidade;
	private String nome;
	private String arquivo;
	private String descricao;
	private String status;
	
	public Atividade() {
		
	}
	
	public Atividade(String data, String entrega, String curso, String disciplina, String trabalho, int quantidade, String nome, String arquivo, String descricao) {
		this.data = data;
		this.entrega = entrega;
		this.curso = curso;
		this.disciplina = disciplina;
		this.trabalho = trabalho;
		this.quantidade = quantidade;
		this.nome = nome;
		this.arquivo = arquivo;
		this.descricao = descricao;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getEntrega() {
		return entrega;
	}

	public void setEntrega(String entrega) {
		this.entrega = entrega;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public String getDisciplina() {
		return disciplina;
	}

	public void setDisciplina(String disciplina) {
		this.disciplina = disciplina;
	}
	
	public String getTurma() {
		return turma;
	}

	public void setTurma(String turma) {
		this.turma = turma;
	}

	public String getTrabalho() {
		return trabalho;
	}

	public void setTrabalho(String trabalho) {
		this.trabalho = trabalho;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getArquivo() {
		return arquivo;
	}

	public void setArquivo(String arquivo) {
		this.arquivo = arquivo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
