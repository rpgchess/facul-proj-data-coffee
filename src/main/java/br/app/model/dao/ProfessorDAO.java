package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Professor;
import br.app.util.ConnectionFactory;

public class ProfessorDAO {
	public void create(Professor professor) {
		try {
			Connection con = ConnectionFactory.getConnection();

			String sql = "INSERT INTO professor VALUES(?, ?, ?, ?, ?)";
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, professor.getRegistro());
			cmd.setString(2, professor.getNome());
			cmd.setString(3, professor.getEmail());
			cmd.setString(4, professor.getNvAcesso());
			cmd.setString(5, professor.getSenha());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(Professor professor) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE professor SET nome = ?, email = ?, nvacesso = ?, senha = ? WHERE registro = ?";
						
			PreparedStatement cmd = con.prepareStatement(sql);
			
			cmd.setString(1, professor.getNome());
			cmd.setString(2, professor.getEmail());
			cmd.setString(3, professor.getNvAcesso());
			cmd.setString(4, professor.getSenha());
			cmd.setString(5, professor.getRegistro());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(String registro) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql ="DELETE FROM professor WHERE registro = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, registro);
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Professor findByRegistro(String registro) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM professor WHERE registro = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, registro);
			
			ResultSet rs = cmd.executeQuery();
			
			Professor professor = null;
			
			if(rs.next()) {
				professor = new Professor();
				professor.setRegistro(rs.getString("registro"));
				professor.setNome(rs.getString("nome"));
				professor.setEmail(rs.getString("email"));
				professor.setNvAcesso(rs.getString("nvacesso"));
				professor.setSenha(rs.getString("senha"));
				
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return professor;
			
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<Professor> findAll() {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM professor";
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<Professor> professores = new ArrayList<>();
			
			while(rs.next()) {
				Professor professor = new Professor();
				professor.setRegistro(rs.getString("registro"));
				professor.setNome(rs.getString("nome"));
				professor.setEmail(rs.getString("email"));
				professor.setNvAcesso(rs.getString("nvacesso"));
				professor.setSenha(rs.getString("senha"));
				
				professores.add(professor);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return professores;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
