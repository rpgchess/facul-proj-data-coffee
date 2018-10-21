	<label>ATIVIDADES</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		      <th scope="col">Data</th>
		      <th scope="col">Atividade</th>
		      <th scope="col">Situação</th>
		      <th scope="col">Periodo</th>
		      <th colspan="2">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			      <td> ${atividade.data} </td>
			      <td> ${atividade.nome} </td>
			      <td> ${atividade.status} </td>
			      <td> ${aatividade.periodo} </td>
			      <td> <a id=botao class="btn btn-primary" href="editar?id=${atividade.id}">Editar</a> </td>
				  <td> <a id=botao class="btn btn-primary" href="excluir-atividade?id=${atividade.id}">Excluir</a> </td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>