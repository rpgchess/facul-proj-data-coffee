package br.app.model.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.app.model.dao.AlunoDAO;
import br.app.model.domain.Aluno;

@WebServlet("/cadastrar-aluno")
public class CadastrarAluno extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//recuperar os dados do formulario
		String rgm = request.getParameter("rgm");
		String nome = request.getParameter("nome");
		String semestre = request.getParameter("turma");
		String letra = request.getParameter("letra");
		String turma = semestre + letra;
		String periodo = request.getParameter("periodo");
		
		if(rgm.equals("") || nome.equals("") || semestre.equals("") || letra.equals("") || periodo.equals("")) {
			RequestDispatcher rd = getServletContext().getRequestDispatcher("pages/cadastrar-aluno.jsp");
			String erro = "<font color=red>Preencha todos os campos corretamente.</font>";
			request.setAttribute("erro", erro);
			request.setAttribute("nomeSalvo", nome);
			request.setAttribute("rgmSalvo", rgm);
			rd.include(request, response);
			
		} else {
		
			//criando um objeto do tipo aluno com os dados assim
			Aluno aluno = new Aluno();
			aluno.setRgm(rgm);
			aluno.setNome(nome.toUpperCase());
			aluno.setTurma(turma.toUpperCase());
			aluno.setPeriodo(periodo.toUpperCase());
			
			//dao para inserçao do registro 
			AlunoDAO dao = new AlunoDAO();
					
			//inserindo o registro no banco de dados
			dao.create(aluno);
					
			//recorrendo para a lista
			response.sendRedirect("pages/consultar-alunos.jsp");
		}
	}

}
