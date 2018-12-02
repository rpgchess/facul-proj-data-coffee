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

@WebServlet("/excluir-curso")
public class ExcluirCurso extends HttpServlet{
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Curso curso = new Curso();
		BufferedReader reader = request.getReader();
		curso = json.fromJson(reader, Curso.class);
		new CursoDAO().delete(curso.getId());
		response.setStatus(HttpServletResponse.SC_OK);
	}

}
