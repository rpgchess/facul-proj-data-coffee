	<label>CADASTRAR ALUNO</label>
	<hr>
	<div class="container">
		<form method="post" action="cadastrar-aluno">
			<div class="form-row">
    			<div class="form-group col-sm-3 col-md-3 ">
      				<label for="rgm">RGM</label>
      				<input type="text" class="form-control" name="rgm" id="rgm" value="${rgmSalvo}">
    			</div>
    			<div class="form-group col-sm-9 col-md-9 ">
      				<label for="nome">Nome</label>
      				<input type="text" class="form-control" name="nome" id="nome" value="${nomeSalvo}">
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
    			<div class="form-group col-sm-6 col-md-6">
      				<label for="periodo">Periodo</label>
      				<select class="form-control" name="periodo">
      					<option selected>Selecione...</option>
						<option value="noturno">Noturno</option>
						<option value="matutino">Matutino</option>
					</select>
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