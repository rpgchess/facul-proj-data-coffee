<div class="container">
	<form action="#" class="form-inline">
		<div class="form-group row">
			<div class="col-sm-2">
				<a class="btn btn-primary" href="disciplina/list">Voltar</a>
			</div>
			<div class="col-sm-8">
				<label>CADASTRAR DSICIPLINA</label>
			</div>
		</div>
	</form>
	<form method="post" action="cadastrar-curso">
		<div class="form-row">
   			<div class="form-group col-sm-8 col-md-8 ">
   				<label for="nome">Disciplina</label>
   				<input type="text" class="form-control" name="nome" id="nome" value="${nomeSalvo}">
   			</div>
   			<div class="form-group col-sm-4 col-md-4 ">
   				<label for="categoria">Categoria</label>
   				<input type="text" class="form-control" name="categoria" id="categoria" value="${nomeSalvo}">
   			</div>
   			<p id="erro">${erro}</p>
		</div>
		<div id="botoes">
			<input id="botao" class="btn btn-primary" type="submit" value="Cadastrar">
			<input id="botao" class="btn btn-primary" type="reset" value="Limpar">
			<!-- <input id="botao" class="btn btn-primary" value="Voltar" onClick="history.go(-1)"> -->
		</div>
	</form>
 </div>