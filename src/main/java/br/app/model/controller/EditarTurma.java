package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.TurmaDAO;
import br.app.model.domain.Turma;

@WebServlet("/editar-turma")
public class EditarTurma extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));
		Turma turma = new TurmaDAO().findById(id);
		String json2 = new Gson().toJson(turma);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Turma turma = new Turma();
		BufferedReader reader = request.getReader();
		turma = json.fromJson(reader, Turma.class);
		new TurmaDAO().update(turma);
		response.setStatus(HttpServletResponse.SC_OK);
	}

}
