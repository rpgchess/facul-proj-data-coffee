	<label>ALUNOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		      <th scope="col">RGM</th>
		      <th scope="col">Nome</th>
		      <th scope="col">Turma</th>
		      <th scope="col">Periodo</th>
		      <th colspan="2">Controle</th>
		    </tr>
		</thead>
		<tbody>
			<c:forEach items="${alunos}" var="aluno">
		    	<tr>
			      <td> ${aluno.rgm} </td>
			      <td> ${aluno.nome} </td>
			      <td> ${aluno.turma} </td>
			      <td> ${aluno.periodo} </td>
			      <td> <a id=botao class="btn btn-primary" href="editar?rgm=${aluno.rgm}">Editar</a> </td>
				  <td> <a id=botao class="btn btn-primary" href="excluir-aluno?rgm=${aluno.rgm}">Excluir</a> </td>
		    	</tr>
	    	</c:forEach>
		</tbody>
	</table>