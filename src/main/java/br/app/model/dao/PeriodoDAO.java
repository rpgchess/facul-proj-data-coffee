package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.Periodo;
import br.app.util.ConnectionFactory;

public class PeriodoDAO {
	public void create(Periodo periodo) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "INSERT INTO periodo (nome) VALUES (?)";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, periodo.getNome());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(Periodo periodo) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE periodo SET nome = ? WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, periodo.getNome());
			cmd.setInt(2, periodo.getId());
			cmd.executeUpdate();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "DELETE FROM periodo WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Periodo findById(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM periodo WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			ResultSet rs = cmd.executeQuery();
			
			Periodo periodo = null;
			
			if(rs.next()) {
				periodo = new Periodo();
				periodo.setId(rs.getInt("id"));
				periodo.setNome(rs.getString("nome"));
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return periodo;			
			
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	public List<Periodo> findAll(){
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM periodo";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<Periodo> periodos = new ArrayList<>();
			
			while(rs.next()) {
				Periodo periodo = new Periodo();
				periodo.setId(rs.getInt("id"));
				periodo.setNome(rs.getString("nome"));
				
				periodos.add(periodo);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return periodos;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
