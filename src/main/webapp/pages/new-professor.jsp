<div class="container">
	<form novalidate class="form-inline">
		<div class="form-group">
			<a href="professor/list" class="btn btn-lg btn-primary">Voltar</a>
			<label for="title" class="control-label">CADASTRAR PROFESSOR</label>
			<a href="professor/new" class="btn btn-lg btn-primary disabled">Novo</a>
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
		<div class="form-row justify-content-center">
			<div class="form-group col-6">
				<label for="email" class="control-label">Email:</label>
				<input type="email" name="email" size="" maxlength="" placeholder="exemplo@dominio.com.br" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="type-access" class="control-label">N�vel de acesso:</label>
				<select name="type-access" class="form-control">
					<optgroup label="Itens:">
						<option value="1">Coordenador</option>
						<option value="2" selected>Professor</option>
					</optgroup>
				</select>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-start">
			<div class="form-group col-sm-3 col-md-3">
				<label for="pwd" class="control-label">Senha:</label>
				<input type="password" name="pwd" size="" maxlength="" placeholder="Senha" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col-sm-3 col-md-3">
				<label for="pwdretype" class="control-label">Confirmar:</label>
				<input type="password" name="pwdretype" size="" maxlength="" placeholder="Confirmar senha" class="form-control" />
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