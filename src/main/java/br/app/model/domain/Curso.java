package br.app.model.domain;

public class Curso {
	
	private int id;
	private String abrev;
	private String nome;
	private String nivel;
	private String categoria;
	
	public Curso() {
		
	}
	
	public Curso(String abrev, String nome, String nivel, String categoria) {
		this.abrev = abrev;
		this.nome = nome;
		this.nivel = nivel;
		this.categoria = categoria;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAbrev() {
		return abrev;
	}

	public void setAbrev(String abrev) {
		this.abrev = abrev;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	

}
