package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.ProfessorDAO;
import br.app.model.domain.Professor;

@WebServlet("/cadastrar-professor")
public class CadastrarProfessor extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Professor professor = new Professor();
		BufferedReader reader = request.getReader();
		professor = json.fromJson(reader, Professor.class);
		new ProfessorDAO().create(professor);
		response.setStatus(HttpServletResponse.SC_OK);
		/*
		String json2 = new Gson().toJson(professor);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
		*/
	}
}