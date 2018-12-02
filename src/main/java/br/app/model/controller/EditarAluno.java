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

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();	
		Aluno aluno = new Aluno();
		BufferedReader reader = request.getReader();
		aluno = json.fromJson(reader, Aluno.class);
		new AlunoDAO().update(aluno);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
