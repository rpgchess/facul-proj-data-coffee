package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Turma;
import br.app.util.ConnectionFactory;

public class TurmaDAO {
	public void create(Turma turma) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "INSERT INTO turma (nome) VALUES (?)";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, turma.getNome());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(Turma turma) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE turma SET nome = ? WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, turma.getNome());
			cmd.setInt(2, turma.getId());
			cmd.executeUpdate();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "DELETE FROM turma WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Turma findById(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM turma WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			ResultSet rs = cmd.executeQuery();
			
			Turma turma = null;
			
			if(rs.next()) {
				turma = new Turma();
				turma.setId(rs.getInt("id"));
				turma.setNome(rs.getString("nome"));
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return turma;			
			
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	public List<Turma> findAll(){
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM turma";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<Turma> turmas = new ArrayList<>();
			
			while(rs.next()) {
				Turma turma = new Turma();
				turma.setId(rs.getInt("id"));
				turma.setNome(rs.getString("nome"));
				
				turmas.add(turma);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return turmas;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
