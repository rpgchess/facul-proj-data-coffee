package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.AtividadeDAO;
import br.app.model.domain.Atividade;

@WebServlet("/editar-atividade")
public class EditarAtividade extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = Integer.parseInt(request.getParameter("id"));	
		Atividade atividade = new AtividadeDAO().findById(id);
		String json2 = new Gson().toJson(atividade);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Atividade atividade = new Atividade();
		BufferedReader reader = request.getReader();
		atividade = json.fromJson(reader, Atividade.class);
		new AtividadeDAO().update(atividade);
		response.setStatus(HttpServletResponse.SC_OK);
		
	}

}
