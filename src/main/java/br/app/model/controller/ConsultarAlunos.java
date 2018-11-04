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

import br.app.model.domain.Aluno;

@WebServlet("/consultar-alunos")
public class ConsultarAlunos extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Obtendo uma lista de Alunos a partir do banco de dados
		//List<Aluno> alunos = new AlunoDAO().findAll();
		List<Aluno> alunos = new ArrayList<>();
		
		alunos.add(new Aluno(18508774,"Beatriz Martins Barbosa Filho","3ºB","Noturno"));
		alunos.add(new Aluno(18426581,"Claudio Almeida Martins","3ºB","Noturno"));
		alunos.add(new Aluno(18262066,"Davi Lourenço Motav","3ºB","Noturno"));
		alunos.add(new Aluno(18398537,"Lucas Santos Amaral","3ºB","Noturno"));
		alunos.add(new Aluno(18269613,"Rafael Azzi Patricio","3ºB","Noturno"));
		alunos.add(new Aluno(18555471,"Renan Afonso Valentim","3ºB","Noturno"));
				
		//Passando o objeto alunos como atributo para ser listado no JSP
		//request.setAttribute("alunos", alunos);
		String json = new Gson().toJson(alunos);
	    response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(json);
		//request.getRequestDispatcher("pages/consultar-alunos.jsp").forward(request, response);
	}

}
