package br.app.model.domain;

public class Turma {
	private int id;
	private String nome;
	
	public Turma() {
		
	}
	
	public Turma(String nome) {
		this.nome = nome;
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
	
	

}
