package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Disciplina;
import br.app.util.ConnectionFactory;

public class DisciplinaDAO {
	public void create(Disciplina disciplina) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "INSERT INTO disciplina (nome, tipo, curso) VALUES (?, ?, ?)";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, disciplina.getNome());
			cmd.setString(2, disciplina.getTipo());
			cmd.setString(3, disciplina.getCurso());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(Disciplina disciplina) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE disciplina SET nome = ?, tipo = ?, curso = ? WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, disciplina.getNome());
			cmd.setString(2, disciplina.getTipo());
			cmd.setString(3, disciplina.getCurso());
			cmd.setInt(4, disciplina.getId());
			cmd.executeUpdate();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "DELETE FROM disciplina WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Disciplina findById(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM disciplina WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			ResultSet rs = cmd.executeQuery();
			
			Disciplina disciplina = null;
			
			if(rs.next()) {
				disciplina = new Disciplina();
				disciplina.setId(rs.getInt("id"));
				disciplina.setNome(rs.getString("nome"));
				disciplina.setTipo(rs.getString("tipo"));
				disciplina.setCurso(rs.getString("curso"));
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return disciplina;			
			
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	public List<Disciplina> findAll(){
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM disciplina";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<Disciplina> disciplinas = new ArrayList<>();
			
			while(rs.next()) {
				Disciplina disciplina = new Disciplina();
				disciplina.setId(rs.getInt("id"));
				disciplina.setNome(rs.getString("nome"));
				disciplina.setTipo(rs.getString("tipo"));
				disciplina.setCurso(rs.getString("curso"));
				
				disciplinas.add(disciplina);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return disciplinas;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
