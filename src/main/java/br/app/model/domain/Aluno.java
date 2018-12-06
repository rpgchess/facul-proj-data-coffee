package br.app.model.domain;

public class Aluno {
	
	private int rgm;
	private String nome;
	private String turma;
	private String periodo;
	private String email;
	private String curso;
	
	public Aluno() {
	}
	
	public Aluno(int rgm, String nome, String curso, String turma, String periodo, String email) {
		this.rgm = rgm;
		this.nome = nome;
		this.curso = curso;
		this.turma = turma;
		this.periodo = periodo;
		this.email = email;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public int getRgm() {
		return rgm;
	}

	public void setRgm(int rgm) {
		this.rgm = rgm;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTurma() {
		return turma;
	}

	public void setTurma(String turma) {
		this.turma = turma;
	}

	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	
	

}
