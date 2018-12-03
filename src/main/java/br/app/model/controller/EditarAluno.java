package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.AlunoDAO;
import br.app.model.domain.Aluno;

@WebServlet("/editar-aluno")
public class EditarAluno extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));	
		Aluno aluno = new AlunoDAO().findByRgm(id);
		String json2 = new Gson().toJson(aluno);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();	
		Aluno aluno = new Aluno();
		BufferedReader reader = request.getReader();
		aluno = json.fromJson(reader, Aluno.class);
		new AlunoDAO().update(aluno);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
