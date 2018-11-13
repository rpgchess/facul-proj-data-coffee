<div class="container">
	<form novalidate class="form-inline">
		<div class="form-group">
			<a href="aluno/list" class="btn btn-lg btn-primary">Voltar</a>
			<label for="title" class="control-label">CADASTRAR ALUNO</label>
			<a href="aluno/new" class="btn btn-lg btn-primary disabled">Novo</a>
		</div>
	</form>
	<form novalidade>
		<div class="form-row justify-content-center">
			<div class="form-group col-4">
				<label for="rgm" class="control-label">Registro:</label>
				<input type="text" name="rgm" size="" maxlength="" placeholder="N� de Registro" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="name" class="control-label">Nome:</label>
				<input type="text" name="name" size="" maxlength="" placeholder="Nome completo" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-2">
				<label for="turma" class="control-label">Turma:</label>
				<select name="turma" class="form-control">
					<optgroup label="Itens:">
       					<option value="1" selected>1A/2B</option>
						<option value="2">1B/2A</option>
						<option value="3">3A/4B</option>
						<option value="4">3B/4A</option>
					</optgroup>
				</select>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col-2">
				<label for="periodo" class="control-label">Per�odo:</label>
				<select name="periodo" class="form-control">
					<optgroup label="Itens:">
       					<option value="1" selected>Matutino</option>
						<option value="2">Vespertino</option>
						<option value="3">Noturno</option>
						<option value="4">Diurno</option>
						<option value="5">Integral</option>
					</optgroup>
				</select>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="email" class="control-label">Email:</label>
				<input type="email" name="email" size="" maxlength="" placeholder="exemplo@dominio.com.br" class="form-control" />
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