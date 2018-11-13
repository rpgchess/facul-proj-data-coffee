<div class="container">
	<form novalidate class="form-inline">
		<div class="form-group">
			<a href="disciplina/list" class="btn btn-lg btn-primary">Voltar</a>
			<label for="title" class="control-label">CADASTRAR DISCIPLINA</label>
			<a href="disciplina/new" class="btn btn-lg btn-primary disabled">Novo</a>
		</div>
	</form>
	<form novalidade>
		<div class="form-row justify-content-center">
			<div class="form-group col">
				<label for="name" class="control-label">Disciplina:</label>
				<input type="text" name="name" placeholder="Nome da disciplina" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-start">
			<div class="form-group col-2">
				<label for="sem" class="control-label">Semestre</label>
				<input type="number" name="sem" min="1" max="10" placeholder="Qtde." class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="curso" class="control-label">Curso:</label>
				<!-- <select name="curso" class="form-control selectpicker" data-live-search="true"> -->
				<select name="curso" class="form-control" searchable="Pesquisar...">
					<optgroup label="Itens:">
						<option value="1" selected>Analise e Desenvolvimento de Sistemas</option>
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