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

@WebServlet("/cadastrar-atividade")
public class CadastrarAtividade extends HttpServlet{
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Atividade atividade = new Atividade();
		BufferedReader reader = request.getReader();
		atividade = json.fromJson(reader, Atividade.class);
		new AtividadeDAO().create(atividade);
	}
}
