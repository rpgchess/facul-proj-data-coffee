package br.app.model.domain;

public class CategoriaDoCurso {
	
	private int id;
	

	private String categoria;
	
	public CategoriaDoCurso() {
		
	}

	public CategoriaDoCurso(String categoria) {
		this.categoria = categoria;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
}
