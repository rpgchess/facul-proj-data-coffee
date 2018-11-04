<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<link rel="stylesheet" href="css/login2.css">
<link rel="stylesheet" href="webjars/bootstrap/4.1.3/dist/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Charmonman:700" rel="stylesheet">

</head>
<body>

	<div id="logo">
		<p>Data Coffee</p>
		<p id="sublogo">Company</p>
	</div>

	<div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">Faça o login</h2>
        <label for="inputEmail" class="sr-only">Login</label>
        <input type="text" id="inputEmail" class="form-control" placeholder="Login" required autofocus>
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Logar</button>
        <div class="checkbox">
          <label>
            Você é aluno? Então clique <a href="#">aqui</a>
          </label>
        </div>
      </form>

    </div> <!-- /container -->
	
	<script src="webjars/bootstrap/4.1.3/dist/js/bootstrap.min.js"></script>
</body>
</html>