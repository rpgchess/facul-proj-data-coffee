<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html ng-app="dataCoffee">
<head>
	<!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="webjars/bootstrap/4.1.3/dist/css/bootstrap.min.css">
	
	<!-- AngularJS -->
	<script src="webjars/angularjs/1.7.4/angular.min.js"></script>
	<script src="webjars/angularjs/1.7.4/angular-route.min.js"></script>
	
	<script src="js/navbars.js"></script>
	<script src="js/main.js"></script>

	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/reset.css"> <!-- CSS Reset -->
	<link rel="stylesheet" href="css/style.css"> <!-- CSS Global -->
	
	<link rel="stylesheet" href="css/content.css"> <!-- CSS do Painel de Conteúdo -->
	
	<script src="js/modernizr.js"></script> <!-- Modernizr -->
  	
	<title>Gerenciador de Atividades</title>
	
	<base href="/">
</head>
<body>
	<!-- INCLUDE HEADER.JSP -->
	<c:import url="header.jsp" />
	
	<main class="cd-main-content">
	
		<!-- INCLUDE SIDEBAR.JSP -->
		<c:import url="sidebar.jsp" />

		<!-- INCLUDE CONTENT.JSP-->
		<div class="content-wrapper">
			
			<!-- ANGULARJS INJECTED VIEWS -->
			<div ng-view></div>
	
		</div> <!-- .content-wrapper -->
		
	</main> <!-- .cd-main-content -->
	<script src="webars/jquery/3.3.1/dist/jquery.min.js"></script>
	<script src="js/jquery.menu-aim.js"></script>
	<script src="webjars/bootstrap/4.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>