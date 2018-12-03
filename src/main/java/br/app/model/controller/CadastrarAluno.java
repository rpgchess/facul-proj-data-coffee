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

@WebServlet("/cadastrar-aluno")
public class CadastrarAluno extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Aluno aluno = new Aluno();
		BufferedReader reader = request.getReader();
		aluno = json.fromJson(reader, Aluno.class);
		new AlunoDAO().create(aluno);
		response.setStatus(HttpServletResponse.SC_OK);
		/*
		String json2 = new Gson().toJson(aluno);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
		*/
    }
}