package br.app.model.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.app.model.dao.PeriodoDAO;
import br.app.model.domain.Periodo;

@WebServlet("/cadastrar-periodo")
public class CadastrarPeriodo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Periodo periodo = new Periodo();
		BufferedReader reader = request.getReader();
		periodo = json.fromJson(reader, Periodo.class);
		new PeriodoDAO().create(periodo);
		response.setStatus(HttpServletResponse.SC_OK);
		/*
		String json2 = new Gson().toJson(periodo);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(json2);
		*/
	}
}
