package br.app.model.domain;

public class Disciplina {
	
	private int id;
	private String nome;
	private String curso;
	
	public Disciplina() {
		
	}
	
	public Disciplina(String nome, String curso) {
		this.nome = nome;
		this.curso = curso;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}
	
	

}
