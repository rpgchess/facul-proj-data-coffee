package br.app.model.domain;

public class Aluno {
	
	private int rgm;
	private String nome;
	private String turma;
	private String periodo;
	
	public Aluno() {
	}
	
	public Aluno(int rgm, String nome, String turma, String periodo) {
		this.rgm = rgm;
		this.nome = nome;
		this.turma = turma;
		this.periodo = periodo;
	}

	public int getRgm() {
		return rgm;
	}

	public void setRgm(int rgm) {
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
