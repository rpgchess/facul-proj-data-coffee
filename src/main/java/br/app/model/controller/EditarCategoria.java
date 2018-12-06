package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.CategoriaDAO;
import br.app.model.domain.CategoriaDoCurso;

@WebServlet("/editar-categoria")
public class EditarCategoria extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		CategoriaDoCurso categoria = new CategoriaDoCurso();
		BufferedReader reader = request.getReader();
		categoria = json.fromJson(reader, CategoriaDoCurso.class);
		new CategoriaDAO().update(categoria);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
