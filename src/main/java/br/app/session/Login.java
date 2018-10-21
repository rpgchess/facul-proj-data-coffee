package br.app.session;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String res = request.getParameter("type");
		if (!res.isEmpty() && res != null) {
			if (res.equals("a") || res.equals("p"))
				request.setAttribute("type-access", res);
			request.getRequestDispatcher("login.jsp").forward(request, response);
		}
	}
}
