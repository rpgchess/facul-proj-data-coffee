<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" href="webjars/bootstrap/4.1.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="webjars/bootstrap/4.1.3/dist/css/bootstrap-theme.min.css">
<link href="https://fonts.googleapis.com/css?family=Charmonman:700" rel="stylesheet">

</head>
<body>

	<div id="logo">
		<p>Data Coffee</p>
		<p id="sublogo">Company</p>
	</div>

	<div class="container" id="container">
		<form action="login-valid" method="post">
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" class="form-control" name="user" id="username">
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" name="pwd" id="password">
			</div>
			<p>${erro}</p>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
		
		<div id="aluno">Se voce é aluno clique <a href="aluno">aqui</a>.</div>
		
	</div>
	
	<script src="webjars/bootstrap/4.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>
