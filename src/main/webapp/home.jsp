<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html ng-app="dataCoffee">
<head>
	<!-- Required meta tags -->
    <meta charset="UTF-8">
    
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
	<meta name="author" content="Claudio A. Martins">
	<meta name="description" content="">
	<link rel="icon" href="http://getbootstrap.com/favicon.ico">
    
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
	
	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="webjars/bootstrap/4.1.3/dist/css/bootstrap.min.css" />
	
	<!-- Alertify -->
	<link rel="stylesheet" href="webjars/alertify.js/1.0.10/dist/css/alertify.css" />
	
	<!-- AngularJS -->
	<script src="webjars/angularjs/1.7.4/angular.min.js"></script>
	<script src="webjars/angularjs/1.7.4/angular-route.min.js"></script>
	
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/content.css"> 
	
	<script src="js/modernizr.js"></script> <!-- Modernizr -->

	<script src="js/navbars.js"></script>
	<script src="js/main.js"></script>
  	
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
	<script src="webjars/alertify.js/1.0.10/dist/js/alertify.js"></script>
	<script src="webjars/alertify.js/1.0.10/dist/js/ngAlertify.js"></script>
</body>
</html>