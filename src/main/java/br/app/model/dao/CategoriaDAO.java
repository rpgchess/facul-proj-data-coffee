package br.app.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.app.model.domain.CategoriaDoCurso;
import br.app.util.ConnectionFactory;

public class CategoriaDAO {
	
	public void create(CategoriaDoCurso categoria) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "INSERT INTO categoriacurso (categoria) VALUES (?)";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, categoria.getCategoria());
			
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void update(CategoriaDoCurso categoria) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "UPDATE categoriacurso SET categoria = ? WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setString(1, categoria.getCategoria());
			cmd.setInt(2, categoria.getId());
			cmd.executeUpdate();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void delete(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "DELETE FROM categoriacurso WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			cmd.executeUpdate();
			
			cmd.close();
			con.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public CategoriaDoCurso findById(int id) {
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM categoriacurso WHERE id = ?";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			cmd.setInt(1, id);
			
			ResultSet rs = cmd.executeQuery();
			
			CategoriaDoCurso catCurso = null;
			
			if(rs.next()) {
				catCurso = new CategoriaDoCurso();
				catCurso.setId(rs.getInt("id"));
				catCurso.setCategoria(rs.getString("categoria"));
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return catCurso;			
			
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	public List<CategoriaDoCurso> findAll(){
		try {
			Connection con = ConnectionFactory.getConnection();
			
			String sql = "SELECT * FROM categoriacurso";
			
			PreparedStatement cmd = con.prepareStatement(sql);
			
			ResultSet rs = cmd.executeQuery();
			
			List<CategoriaDoCurso> categorias = new ArrayList<>();
			
			while(rs.next()) {
				CategoriaDoCurso categoria = new CategoriaDoCurso();
				categoria.setId(rs.getInt("id"));
				categoria.setCategoria(rs.getString("categoria"));
				
				categorias.add(categoria);
			}
			
			rs.close();
			cmd.close();
			con.close();
			
			return categorias;
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
