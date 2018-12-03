package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.CursoDAO;
import br.app.model.domain.Curso;

@WebServlet("/editar-curso")
public class EditarCurso extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		Curso curso = new CursoDAO().findById(id);
		String json2 = new Gson().toJson(curso);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Curso curso = new Curso();
		BufferedReader reader = request.getReader();
		curso = json.fromJson(reader, Curso.class);
		new CursoDAO().update(curso);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
