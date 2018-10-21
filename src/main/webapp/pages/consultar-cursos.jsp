	<label>CURSOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		      <th scope="col">Curso</th>
		      <th colspan="2">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			      <td> ${curso.nome} </td>
			      <td> <a id=botao class="btn btn-primary" href="editar?id=${curso.id}">Editar</a> </td>
				  <td> <a id=botao class="btn btn-primary" href="excluir-curso?id=${curso.id}">Excluir</a> </td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>