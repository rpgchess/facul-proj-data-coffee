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

@WebServlet("/editar-periodo")
public class EditarPeriodo extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Gson json = new Gson();
		Periodo periodo = new Periodo();
		BufferedReader reader = request.getReader();
		periodo = json.fromJson(reader, Periodo.class);
		new PeriodoDAO().update(periodo);
		response.setStatus(HttpServletResponse.SC_OK);
	}
}
