package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Atividade;
import br.app.util.ConnectionFactory;

public class AtividadeDAO {
	public void create(Atividade atividade) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "INSERT INTO atividade (nome, data, entrega, curso, disciplina, trabalho, turma, quantidade, arquivo, descricao, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, atividade.getNome());
			cmd.setString(2, atividade.getData());
			cmd.setString(3, atividade.getEntrega());
			cmd.setString(4, atividade.getCurso());
			cmd.setString(5, atividade.getDisciplina());
			cmd.setString(6, atividade.getTurma());
			cmd.setString(7, atividade.getTrabalho());
			cmd.setInt(8, atividade.getQuantidade());
			cmd.setString(9, atividade.getArquivo());
			cmd.setString(10, atividade.getDescricao());
			cmd.setString(11, atividade.getStatus());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(Atividade atividade) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE atividade SET data = ?, entrega = ?, curso = ?, disciplina = ?, turma = ?, trabalho = ?, quantidade = ?," +
					"arquivo = ?, descricao = ? , status = ?, nome = ? WHERE id = ?";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, atividade.getData());
			cmd.setString(2, atividade.getEntrega());
			cmd.setString(3, atividade.getCurso());
			cmd.setString(4, atividade.getDisciplina());
			cmd.setString(5, atividade.getTurma());
			cmd.setString(6, atividade.getTrabalho());
			cmd.setInt(7, atividade.getQuantidade());
			cmd.setString(8, atividade.getArquivo());
			cmd.setString(9, atividade.getDescricao());
			cmd.setString(10, atividade.getStatus());
			cmd.setString(11, atividade.getNome());
			cmd.setInt(12, atividade.getId());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "DELETE FROM atividade WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Atividade findById(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM atividade WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);

			ResultSet rs = cmd.executeQuery();
			
			Atividade atividade = null;
			
			if(rs.next()) {
				atividade = new Atividade();
				atividade.setId(rs.getInt("id"));
				atividade.setNome(rs.getString("nome"));
				atividade.setData(rs.getString("data"));
				atividade.setEntrega(rs.getString("entrega"));
				atividade.setCurso(rs.getString("curso"));
				atividade.setDisciplina(rs.getString("disciplina"));
				atividade.setTurma(rs.getString("turma"));
				atividade.setTrabalho(rs.getString("trabalho"));
				atividade.setQuantidade(rs.getInt("quantidade"));
				atividade.setArquivo(rs.getString("arquivo"));
				atividade.setDescricao(rs.getString("descricao"));
				atividade.setStatus(rs.getString("status"));
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return atividade;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<Atividade> findAll(){
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM atividade";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<Atividade> atividades = new ArrayList<>();
			
			while(rs.next()) {
				Atividade atividade = new Atividade();
				atividade.setId(rs.getInt("id"));
				atividade.setNome(rs.getString("nome"));
				atividade.setData(rs.getString("data"));
				atividade.setEntrega(rs.getString("entrega"));
				atividade.setCurso(rs.getString("curso"));
				atividade.setDisciplina(rs.getString("disciplina"));
				atividade.setTurma(rs.getString("turma"));
				atividade.setTrabalho(rs.getString("trabalho"));
				atividade.setQuantidade(rs.getInt("quantidade"));
				atividade.setArquivo(rs.getString("arquivo"));
				atividade.setDescricao(rs.getString("descricao"));
				atividade.setStatus(rs.getString("status"));
				
				atividades.add(atividade);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return atividades;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
