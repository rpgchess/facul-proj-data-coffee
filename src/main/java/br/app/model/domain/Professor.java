package br.app.model.domain;

public class Professor {
	private int registro;
	private String nome;
	private String email;
	private String nvAcesso;
	private String senha;
	
	
	public Professor() {
		
	}
	
	public Professor(int registro, String nome, String email, String nvAcesso, String senha) {
		this.registro = registro;
		this.nome = nome;
		this.email = email;
		this.nvAcesso = nvAcesso;
		this.senha = senha;
	}

	public int getRegistro() {
		return registro;
	}

	public void setRegistro(int registro) {
		this.registro = registro;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNvAcesso() {
		return nvAcesso;
	}

	public void setNvAcesso(String nvAcesso) {
		this.nvAcesso = nvAcesso;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}
