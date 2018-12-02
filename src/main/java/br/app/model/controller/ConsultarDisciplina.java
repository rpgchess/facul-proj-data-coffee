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

import br.app.model.dao.DisciplinaDAO;
import br.app.model.domain.Disciplina;

@WebServlet("/consultar-disciplina")
public class ConsultarDisciplina extends HttpServlet{
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Disciplina> disciplinas = new ArrayList<Disciplina>();
		disciplinas = new DisciplinaDAO().findAll();
		String json = new Gson().toJson(disciplinas);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json);
	}
}
