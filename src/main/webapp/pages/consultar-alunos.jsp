	<label>ALUNOS</label>
	<hr>
	<table class="table table-striped">
		<thead class="thead-light ">
		    <tr>
		      <th scope="col">RGM</th>
		      <th scope="col">Nome</th>
		      <th scope="col">Turma</th>
		      <th scope="col">Periodo</th>
		      <th scope="col">Controle</th>
		    </tr>
		</thead>
		<tbody class="innerHTML">
			<c:forEach items="${alunos}" var="aluno">
		    	<script language="Javascript">
					$.get("http://localhost:9999/consultar-alunos", function(alunos) {
         				console.log(alunos);
	         			$.each(alunos,function(a, aluno){
    	        			var item = "<tr>"
    	           			item += "<td>"+ aluno.rgm +"</td>";
	        		   		item += "<td>"+ aluno.nome +"</td>";
    		    	   		item += "<td>"+ aluno.turma +"</td>";
	    	          		item += "<td>"+ aluno.periodo +"</td>";
	    	          		item += "<td>"
	        	    		item += "<a id=botao class='btn btn-primary' href='editar?rgm="+aluno.rgm+"'>Editar</a>";
				    		item += "<a id=botao class='btn btn-primary' href='excluir-aluno?rgm="+aluno.rgm+"'>Excluir</a>";
	        	      		item += "</td></tr>"
                			$('.innerHTML').append(item);
                		});
    				});
				</script>
	    	</c:forEach>
		</tbody>
	</table>