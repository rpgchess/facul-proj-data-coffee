package br.app.session;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login-valid")
public class LoginValid extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final String userID = "Claudio";
	private final String password = "gostoso";
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// get request parameters for userID and password
		String user = request.getParameter("user");
		String pwd = request.getParameter("pwd");
		
		if(userID.equals(user) && password.equals(pwd)){
			HttpSession session = request.getSession();
			session.setAttribute("user", "Admin");
			//setting session to expiry in 30 mins
			session.setMaxInactiveInterval(30*60);
			Cookie userName = new Cookie("user", user);
			response.addCookie(userName);
			//Get the encoded URL string
			String encodedURL = response.encodeRedirectURL("home.jsp");
			response.sendRedirect(encodedURL);
			String page = "content.jsp";
			request.setAttribute("page", page);
		}else{
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/login.jsp");
			String erro = "<font color=red>O nome de usuário ou a senha estão incorretos.</font>";
			request.setAttribute("erro", erro);
			rd.include(request, response);
		}
	}
}
