package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Aluno;
import br.app.util.ConnectionFactory;

public class AlunoDAO {
	public void create(Aluno aluno) {
		try {
			
			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "INSERT INTO aluno VALUES (?, ?, ?, ?)";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, aluno.getRgm());
			cmd.setString(2, aluno.getNome());
			cmd.setString(3, aluno.getTurma());
			cmd.setString(4, aluno.getPeriodo());
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public void update(Aluno aluno) {
		try {

			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "UPDATE aluno SET nome = ?, turma = ?, periodo = ? WHERE rgm = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, aluno.getNome());
			cmd.setString(2, aluno.getTurma());
			cmd.setString(3, aluno.getPeriodo());
			cmd.setString(3, aluno.getRgm());
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}
	
	public void delete(String rgm) {
		try {
			
			//1º Abrir uma conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "DELETE FROM aluno WHERE rgm = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, rgm);
			
			//3º Executar o comando SQL
			cmd.executeUpdate();
			
			//4º Fechar a conexão
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}	
	
	public Aluno findByRgm(String rgm) {
		try {
			//1º Abrir conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "SELECT * FROM aluno WHERE rgm = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, rgm);
			
			//3ºA Execução do comando SQL
			//3ºB obtenção dos dados 
			ResultSet rs = cmd.executeQuery();
			
			//3ºC Tratamento dos dados retornado
			
			Aluno aluno = null;
			
			if (rs.next()) { //Tem registro?
				aluno = new Aluno();
				aluno.setRgm(rs.getString("rgm"));
				aluno.setNome(rs.getString("nome"));
				aluno.setTurma(rs.getString("turma"));
				aluno.setPeriodo(rs.getString("periodo"));
			}
			
			//4º Fechar a conexão
			rs.close();
			cmd.close();
			con.close();
			
			//Retorno do objeto aluno
			return aluno;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	public List<Aluno> findAll() {
		try {
			
			//1º Abrir conexão
			Connection con = ConnectionFactory.getConnection();
			
			//2º Preparar o comando SQL a ser executado
			String sql = "SELECT * FROM aluno";
			PreparedStatement cmd = con.prepareStatement(sql);
						
			//3ºA Execução do comando SQL
			//3ºB obtenção dos dados 
			ResultSet rs = cmd.executeQuery();
			
			//3ºC Tratamento dos dados retornado
			List<Aluno> alunos = new ArrayList<>(); //vazia
			
			
			while (rs.next()) { //Enquanto houver registro....
				//Cria um objeto aluno
				Aluno aluno = new Aluno();
				aluno.setRgm(rs.getString("rgm"));
				aluno.setNome(rs.getString("nome"));
				aluno.setTurma(rs.getString("turma"));
				aluno.setPeriodo(rs.getString("periodo"));
				
				//Adiciona um aluno à lista
				alunos.add(aluno);
			}
			
			//4º Fechar conexão
			rs.close();
			cmd.close();
			con.close();
			
			//Retorno da lista de alunos
			return alunos;

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
