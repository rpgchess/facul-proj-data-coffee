package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.DisciplinaDAO;
import br.app.model.domain.Disciplina;

@WebServlet("/editar-disciplina")
public class EditarDisciplina extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Disciplina disciplina = new Disciplina();
		BufferedReader reader = request.getReader();
		disciplina = json.fromJson(reader, Disciplina.class);
		new DisciplinaDAO().update(disciplina);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
