package br.app.model.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.app.model.dao.AlunoDAO;

@WebServlet("/excluir-aluno")
public class ExcluirAluno extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String rgm = request.getParameter("rgm");
		new AlunoDAO().delete(rgm);
		
		response.sendRedirect("consultar-alunos");
	}

}
