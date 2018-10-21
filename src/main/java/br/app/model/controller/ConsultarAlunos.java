package br.app.model.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/consultar-alunos")
public class ConsultarAlunos extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Obtendo uma lista de Alunos a partir do banco de dados
		//List<Aluno> alunos = new AlunoDAO().findAll();
				
		//Passando o objeto alunos como atributo para ser listado no JSP
		//request.setAttribute("alunos", alunos);

		request.getRequestDispatcher("pages/consultar-alunos.jsp").forward(request, response);
	}

}
