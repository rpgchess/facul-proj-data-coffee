<div class="container">
	<form action="#" class="form-inline">
		<div class="form-group row">
			<div class="col-sm-2">
				<a class="btn btn-primary" href="grupo/list">Voltar</a>
			</div>
			<div class="col-sm-8">
				<label>CADASTRAR GRUPO</label>
			</div>
		</div>
	</form>
	<form method="post" action="cadastrar-grupo">
		<div class="form-row">
   			<div class="form-group col-sm-2 col-md-2 ">
   				<label for="id">Qtde</label>
   				<input type="number" class="form-control" min="2" max="50" name="qtde" id="qtde" value="${rgmSalvo}">
   			</div>
  			<div class="form-group col-sm-9 col-md-9 ">
   				<label for="nome">Nome</label>
   				<input type="text" class="form-control" name="nome" id="nome" value="${nomeSalvo}">
  			</div>
   			<p id="erro">${erro}</p>
		</div>
			<style>
.main .page-header {
  margin-top: 0;
}
.placeholders {
  margin-bottom: 15px;
  margin-top: 5px;
  text-align: center;
  font-size: 8pt;
}
.placeholders h4 {
  margin-bottom: 0;
}
.placeholder {
  margin-bottom: 20px;
}
.placeholder img {
  display: inline-block;
  border-radius: 50%;
}
			</style>
		<div class="row placeholders">
			<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
			<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
           	<div class="col-xs-2 col-sm-1 placeholder">
           		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="50" height="50" class="img-responsive" alt="thumbnail">
           		<h4>Aluno</h4>
           		<span class="text-muted">00000000</span>
           	</div>
		</div>
		<div id="botoes">
			<input id="botao" class="btn btn-primary" type="submit" value="Cadastrar">
			<input id="botao" class="btn btn-primary" type="reset" value="Limpar">
			<!-- <input id="botao" class="btn btn-primary" value="Voltar" onClick="history.go(-1)"> -->
		</div>
	</form>
</div>