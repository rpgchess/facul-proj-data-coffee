	<label>GRUPOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
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
			      		<a id=botao class="btn btn-lg btn-primary" href="editar?id=${grupo.id}">Editar</a>
				  		<a id=botao class="btn btn-lg btn-primary" href="excluir-grupo?id=${grupo.id}">Excluir</a>
					</td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>