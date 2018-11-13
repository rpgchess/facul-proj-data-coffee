<div class="container">
	<form class="form-inline">
		<div class="form-group">
			<a href="grupo/list" class="btn btn-lg btn-primary disabled">Voltar</a>
			<label for="title" class="control-label">GRUPOS</label>
			<a href="grupo/new" class="btn btn-lg btn-primary">Novo</a>
		</div>
	</form>
	<table class="table table-sm table-striped table-hover">
		<thead class="thead-light">
		    <tr>
		    	<th scope="col">Nome</th>
		    	<th scope="col">Integrantes</th>
		    	<th scope="col">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			    	<td>Data Coffee Company</td>
			    	<td>6/10</td>
		    	<td>
		      		<a href="" class="btn btn-sm btn-primary">Editar</a>
			  		<a href="" class="btn btn-sm btn-primary">Excluir</a>
				</td>
			</tr>
		</tbody>
	</table>
</div>