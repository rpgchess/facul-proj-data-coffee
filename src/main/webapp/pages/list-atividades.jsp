<div class="container">
	<form action="#" class="form-inline">
		<div class="form-group row">
			<div class="col-sm-6">
				<label>ATIVIDADES</label>
			</div>
			<div class="col-sm-2">
				<a class="btn btn-primary" href="atividade/new">Novo</a>
			</div>
		</div>
	</form>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		    	<th scope="col">Data</th>
			    <th scope="col">Entrega</th>
			    <th scope="col">Atividade</th>
			    <th scope="col">Curso</th>
			    <th scope="col">Turma</th>
			    <!-- <th scope="col">Situação</th> -->
			    <th scope="col">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			    	<td>25/10/2018</td>
			    	<td>--/--/----</td>
			    	<td>Atividade de Teste</td>
			    	<td>ADS</td>
			    	<td>3º/B</td>
			    	<!-- <td>Finalizado</td> -->
			    	<td>
			      		<a id=botao class="btn btn-lg btn-primary" href="editar?id=${atividade.id}">Editar</a>
				  		<a id=botao class="btn btn-lg btn-primary" href="excluir-atividade?id=${atividade.id}">Excluir</a>
					</td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>
</div>