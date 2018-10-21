	<label>GRUPOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		      <th scope="col">Curso</th>
		      <th scope="col">Turma</th>
		      <th scope="col">Periodo</th>
		      <th scope="col">Grupo</th>
		      <th colspan="2">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			      <td> ${grupo.curso} </td>
			      <td> ${grupo.turma} </td>
			      <td> ${grupo.periodo} </td>
			      <td> ${grupo.grupo} </td>
			      <td> <a id=botao class="btn btn-primary" href="editar?id=${grupo.id}">Editar</a> </td>
				  <td> <a id=botao class="btn btn-primary" href="excluir-grupo?id=${grupo.id}">Excluir</a> </td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>