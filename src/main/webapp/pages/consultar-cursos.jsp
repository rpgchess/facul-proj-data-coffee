	<label>CURSOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		    	<th scope="col">Abrev.</th>
			    <th scope="col">Curso</th>
			    <th scope="col">Categoria</th>
		    	<th scope="col">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
		    		<td>ADS</td>
			    	<td>Analise e Desenvolvimento de Sistemas</td>
			    	<td>Informática</td>
			    	<td>
			      		<a id=botao class="btn btn-lg btn-primary" href="editar?id=${curso.id}">Editar</a>
				  		<a id=botao class="btn btn-lg btn-primary" href="excluir-curso?id=${curso.id}">Excluir</a>
					</td>
	    	</c:forEach>
		</tbody>
	</table>