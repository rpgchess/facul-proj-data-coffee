package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Curso;
import br.app.util.ConnectionFactory;

public class CursoDAO {
	public void create(Curso curso) {
		try {
			
			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "INSERT INTO curso (abrev, nome, nivel, categoria) VALUES (?, ?, ?, ?)";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, curso.getAbrev());
			cmd.setString(2, curso.getNome());
			cmd.setString(3, curso.getNivel());
			cmd.setString(4, curso.getCategoria());
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public void update(Curso curso) {
		try {

			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "UPDATE curso SET abrev = ?, nome = ?, nivel = ?, categoria = ? WHERE id = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, curso.getAbrev());
			cmd.setString(2, curso.getNome());
			cmd.setString(3, curso.getNivel());
			cmd.setString(4, curso.getCategoria());
			cmd.setInt(5, curso.getId());
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}
	
	public void delete(int id) {
		try {
			
			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "DELETE FROM curso WHERE id = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}	
	
	public Curso findById(int id) {
		try {
			//1º Abrir conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "SELECT * FROM curso WHERE id = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			//3ºA Execução do comando SQL
			//3ºB obtenção dos dados 
			ResultSet rs = cmd.executeQuery();
			
			//3ºC Tratamento dos dados retornado
			
			Curso curso = null;
			
			if (rs.next()) { //Tem registro?
				curso = new Curso();
				curso.setId(rs.getInt("id"));
				curso.setNome(rs.getString("nome"));
				curso.setAbrev(rs.getString("abrev"));
				curso.setNivel(rs.getString("nivel"));
				curso.setCategoria(rs.getString("categoria"));				
			}
			
			//4º Fechar a conexão
			rs.close();
			cmd.close();
			con.close();
			
			//Retorno do objeto aluno
			return curso;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public List<Curso> findAll() {
		try {
			
			//1º Abrir conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "SELECT * FROM curso";
			PreparedStatement cmd = con.prepareStatement(sql);
						
			//3ºA Execução do comando SQL
			//3ºB obtenção dos dados 
			ResultSet rs = cmd.executeQuery();
			
			//3ºC Tratamento dos dados retornado
			List<Curso> cursos = new ArrayList<>(); //vazia
			
			
			while (rs.next()) { //Enquanto houver registro....
				//Cria um objeto aluno
				Curso curso = new Curso();
				curso.setId(rs.getInt("id"));
				curso.setAbrev(rs.getString("abrev"));
				curso.setNome(rs.getString("nome"));
				curso.setNivel(rs.getString("nivel"));
				curso.setCategoria(rs.getString("categoria"));
			
				//Adiciona um aluno à lista
				cursos.add(curso);
			}
			
			//4º Fechar conexão
			rs.close();
			cmd.close();
			con.close();
			
			//Retorno da lista de alunos
			return cursos;

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
