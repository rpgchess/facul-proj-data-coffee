<div class="container">
	<form action="#" class="form-inline">
		<div class="form-group row">
			<div class="col-sm-2">
				<a class="btn btn-primary" href="atividade/list">Voltar</a>
			</div>
			<div class="col-sm-8">
				<label>CADASTRAR ATIVIDADE</label>
			</div>
		</div>
	</form>
	<form method="post" action="cadastrar-atividade">
		<div class="form-row">
    		<div class="form-group col-sm-3 col-md-3 ">
    			<label for="data">Data</label>
    			<input type="date" class="form-control" name="data" id="data" value="${rgmSalvo}">
    		</div>
    		<div class="form-group col-sm-3 col-md-3 ">
    			<div class="form-check">
    				<input type="checkbox" class="form-check-input" id="data-enable">
    				<label for="data-entrega">Data de Entrega</label>
  				</div>
  				<input type="date" class="form-control" name="data-entrega" id="data-entrega" value="${rgmSalvo}" readonly>
    		</div>
    		<div class="form-group col-sm-6 col-md-6 ">
      			<label for="curso">Curso</label>
   				<input type="text" class="form-control" name="curso" id="curso" value="${nomeSalvo}">
   			</div>
		</div>
		<div class="form-row">
			<div class="form-group col-xs-4 col-sm-2 col-md-2">
    			<label for="">Turma</label>
    			<select class="form-control" name="turma-number" id="turma-number">
      				<option selected>...</option>
       				<option value="1">1º</option>
					<option value="2">2º</option>
					<option value="3">3º</option>
					<option value="4">4º</option>
					<option value="5">5º</option>
    			</select>
    		</div>
    		<div class="form-group col-xs-4 col-sm-2 col-md-2">
    			<label for="">(A/B/C/D/E)</label>
    			<select class="form-control" name="turma-letra" id="turma-letra">
       				<option selected>...</option>
       				<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
     				</select>
    		</div>
    		<div class="form-group col-sm-8 col-md-8 ">
    			<label for="nome">Titulo</label>
    			<input type="text" class="form-control" name="nome" id="nome" value="${nomeSalvo}">
    		</div>
    		<p id="erro">${erro}</p>
		</div>
		<div id="botoes">
			<input id="botao" class="btn btn-lg btn-primary" type="submit" value="Cadastrar">
			<input id="botao" class="btn btn-lg btn-primary" type="reset" value="Limpar">
			<!-- <input id="botao" class="btn btn-primary" value="Voltar" onClick="history.go(-1)"> -->
		</div>
 	</form>
 </div>