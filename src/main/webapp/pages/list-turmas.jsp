<div class="container">
	<form action="#" class="form-inline">
		<div class="form-group row">
			<div class="col-sm-4">
				<label>TURMAS</label>
			</div>
			<div class="col-sm-2">
				<a class="btn btn-primary" href="turma/new">Novo</a>
			</div>
		</div>
	</form>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		    	<th scope="col">Nome da Turma</th>
		    	<th scope="col">Controle</th>
		    </tr>
		</thead>
		<tbody>
	    	<tr>
	    		<td>3B/4C</td>
		    	<td>
		      		<a id=botao class="btn btn-lg btn-primary" href="editar?id=${curso.id}">Editar</a>
			  		<a id=botao class="btn btn-lg btn-primary" href="excluir-curso?id=${curso.id}">Excluir</a>
				</td>
			</tr>
		</tbody>
	</table>