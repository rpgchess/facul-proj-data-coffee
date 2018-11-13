<%
//allow access only if session exists
String user = null;
if(session.getAttribute("user") == null){
	response.sendRedirect("login?type=p");
}else user = (String) session.getAttribute("user");
String userName = null;
String sessionID = null;
Cookie[] cookies = request.getCookies();
if(cookies !=null){
	for(Cookie cookie : cookies){
		if(cookie.getName().equals("user")) userName = cookie.getValue();
		if(cookie.getName().equals("JSESSIONID")) sessionID = cookie.getValue();
	}
}else{
	sessionID = session.getId();
}
//sessionID | user | userName
//<jsp: include page = "footer.jsp" />
//%@include file="title.html"%
%>
<header class="cd-main-header">
	<a href="#" class="cd-logo"></a>
	
	<a href="#" class="cd-nav-trigger"><span></span></a>

	<nav class="cd-nav">
		<ul class="cd-top-nav">
			<li class="a-click"><a href="pages/about.jsp">Sobre</a></li>
			<li class="a-click"><a href="pages/contact.jsp">Contato</a></li>
			<li class="has-children account">
				<a href="#"><img src="img/cd-avatar.jpg" alt="avatar"><%=userName %></a>
				<ul>
					<li class="a-click"><a href="pages/perfil.jsp">Meu perfil</a></li>
					<li><a href="<%=response.encodeURL("logout") %>">Sair</a></li>
				</ul>
			</li>
		</ul>
	</nav>
</header> <!-- .cd-main-header -->