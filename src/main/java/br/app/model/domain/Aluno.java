package br.app.model.domain;

public class Aluno {
	
	private String rgm;
	private String nome;
	private String turma;
	private String periodo;
	
	public Aluno() {
	}
	
	public Aluno(String rgm, String nome, String turma, String periodo) {
		this.rgm = rgm;
		this.nome = nome;
		this.turma = turma;
		this.periodo = periodo;
	}

	public String getRgm() {
		return rgm;
	}

	public void setRgm(String rgm) {
		this.rgm = rgm;
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
