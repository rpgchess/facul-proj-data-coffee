<div class="container">
	<form novalidate class="form-inline">
		<div class="form-group">
			<a href="atividade/list" class="btn btn-lg btn-primary">Voltar</a>
			<label for="title" class="control-label">CADASTRAR ATIVIDADE</label>
			<a href="atividade/new" class="btn btn-lg btn-primary disabled">Novo</a>
		</div>
	</form>
	<form novalidade>
		<div class="form-row justify-content-center">
			<div class="form-group col-3">
				<label for="date" class="control-label">Data:</label>
				<input type="date" name="date" placeholder="Data" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col-3">
				<div class="form-check">
    				<input type="checkbox" name="date-able" class="form-check-input" />
    				<label for="date-end">Entrega</label>
  				</div>
				<input type="date" name="date-end" placeholder="Entrega" readonly class="form-control" />
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
				<label for="disc" class="control-label">Disciplina:</label>
				<!-- <select name="disc" class="form-control selectpicker" data-live-search="true"> -->
				<select name="disc" class="form-control" searchable="Pesquisar...">
					<optgroup label="Itens:">
						<option value="1">Analise e Desenvolvimento de Projetos I</option>
						<option value="1" selected>Analise e Desenvolvimento de Projetos II</option>
					</optgroup>
				</select>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col-4">
				<fieldset name="">
					<legend>Trabalho:</legend>
					<label class="radio-inline"><input type="radio" name="opt-olny" id="" value="1" checked>Individual</label>
					<label class="radio-inline"><input type="radio" name="opt-mult" id="" value="2">Grupo</label>
					<span class="glyphicon glyphicon-ok form-control-feedback"></span>
					<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
					<span class="glyphicon glyphicon-remove form-control-feedback"></span>
					<span class="help-block"></span>
				</fieldset>
			</div>
			<div class="form-group col-2">
				<label for="grp-qtde" class="control-label">Qtde:</label>
				<input type="number" name="grp-qtde" min="2" max="25" placeholder="Qtde." readonly class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-center">
			<div class="form-group col-6">
				<label for="name" class="control-label">Atividade:</label>
				<input type="text" name="name" placeholder="Nome da Atividade" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
			<div class="form-group col">
				<label for="file" class="control-label">Anexar:</label>
				<input type="file" name="file" class="form-control" />
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
				<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
				<span class="glyphicon glyphicon-remove form-control-feedback"></span>
				<span class="help-block"></span>
			</div>
		</div>
		<div class="form-row justify-content-center">
			<div class="form-group col">
				<label for="desc" class="control-label">Descri��o:</label>
				<textarea name="desc" rows="5" placeholder="..." class="form-control rounded-0"></textarea>
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