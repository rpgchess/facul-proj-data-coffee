<div class="container">
	<form novalidate class="form-inline">
		<div class="form-group">
			<a href="curso/list" class="btn btn-lg btn-primary">Voltar</a>
			<label for="title" class="control-label">CADASTRAR CURSO</label>
			<a href="curso/new" class="btn btn-lg btn-primary disabled">Novo</a>
		</div>
	</form>
	<form novalidade>
		<div class="form-row justify-content-center">
			<div class="form-group col-2">
				<label for="abrev" class="control-label">#</label>
				<input type="text" name="abrev" placeholder="ABC" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="name" class="control-label">Curso:</label>
				<input type="text" name="name" size="" maxlength="" placeholder="Curso" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-start">
			<div class="form-group col-6">
				<label for="categ" class="control-label">Categoria</label>
				<select name="categ" class="form-control">
					<optgroup label="Itens:">
						<option value="1" selected>Ci�ncias humanas e educa��o</option>
						<option value="2">Exatas</option>
						<option value="3">Geral</option>
						<option value="4">Gest�o e Neg�cios</option>
						<option value="5">Sa�de</option>
					</optgroup>
				</select>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-center">
			<div class="form-group col">
				<button class="btn btn-lg btn-primary right" type="reset">Limpar</button>
			</div>
			<div class="form-group col">
				<button class="btn btn-lg btn-primary left" type="submit">Cadastrar</button>
			</div>
		</div>	
	</form>
</div>