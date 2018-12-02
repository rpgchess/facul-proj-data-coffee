package br.app.model.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.CategoriaDAO;
import br.app.model.domain.CategoriaDoCurso;

@WebServlet("/consultar-categoria")
public class ConsultarCategoria extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<CategoriaDoCurso> categorias = new ArrayList<CategoriaDoCurso>();
		categorias = new CategoriaDAO().findAll();
		String json = new Gson().toJson(categorias);
	    response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(json);
	}


}
