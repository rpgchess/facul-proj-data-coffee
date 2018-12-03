angular.module('dataCoffee', ['ngRoute'])
.directive('compareTo', compareTo)
// Definindo Rotas
.config(function($routeProvider, $locationProvider){
	// Utilizando o HTML5 History API (TRUE)
	//$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
	
	$routeProvider
		// Geral
		.when("/",
			{
				templateUrl: "pages/welcome.html"
			}
		).when("/notify",
			{
				templateUrl: "pages/notification.html"
			}
		).when("/about",
			{
				templateUrl: "pages/about.html"
			}
		).when("/welcome",
			{
				templateUrl: "pages/welcome.html"
			}
		).when("/perfil",
			{
				templateUrl: "pages/perfil.html"
			}
		).when("/contact",
			{
				templateUrl: "pages/contact.html"
			}
		)
		// Coordenador
		.when("/professor/list",
			{
				controller: "listProfessores",
				templateUrl: "pages/list/professores.html"
			}
		).when("/professor/new",
			{
				controller: "newProfessor",
				templateUrl: "pages/new/professor.html"
			}
		).when("/professor/edit/:obj",
			{
				controller: "editProfessor",
				templateUrl: "pages/new/professor.html"
			}
		).when("/curso/list",
			{
				controller: "listCursos",
				templateUrl: "pages/list/cursos.html"
			}
		).when("/curso/new",
			{
				controller: "newCurso",
				templateUrl: "pages/new/curso.html"
			}
		).when("/curso/edit/:obj",
			{
				controller: "editCurso",
				templateUrl: "pages/new/curso.html"
			}
		).when("/categoria/list",
			{
				controller: "listCategorias",
				templateUrl: "pages/list/categorias.html"
			}
		).when("/categoria/new",
			{
				controller: "newCategoria",
				templateUrl: "pages/new/categoria.html"
			}
		).when("/categoria/edit/:obj",
			{
				controller: "editCategoria",
				templateUrl: "pages/new/categoria.html"
			}
		)
		// Coordenador / Professor
		.when("/disciplina/list",
			{
				controller: "listDisciplinas",
				templateUrl: "pages/list/disciplinas.html"
			}
		).when("/disciplina/new",
			{
				controller: "newDisciplina",
				templateUrl: "pages/new/disciplina.html"
			}
		).when("/disciplina/edit/:obj",
			{
				controller: "editDisciplina",
				templateUrl: "pages/new/disciplina.html"
			}
		)
		// Professor
		.when("/atividade/list",
			{
				controller: "listAtividades",
				templateUrl: "pages/list/atividades.html"
			}
		).when("/atividade/new",
			{
				controller: "newAtividade",
				templateUrl: "pages/new/atividade.html"
			}
		).when("/atividade/edit/:obj",
			{
				controller: "editAtividade",
				templateUrl: "pages/new/atividade.html"
			}
		).when("/aluno/list",
			{
				controller: "listAlunos",
				templateUrl: "pages/list/alunos.html"
			}
		).when("/aluno/new",
			{
				controller: "newAluno",
				templateUrl: "pages/new/aluno.html"
			}
		).when("/aluno/edit/:obj",
			{
				controller: "editAluno",
				templateUrl: "pages/new/aluno.html"
			}
		).when("/turma/list",
			{
				controller: "listTurmas",
				templateUrl: "pages/list/turmas.html"
			}
		).when("/turma/new",
			{
				controller: "newTurma",
				templateUrl: "pages/new/turma.html"
			}
		).when("/turma/edit/:obj",
			{
				controller: "editTurma",
				templateUrl: "pages/new/turma.html"
			}
		).when("/periodo/list",
			{
				controller: "listPeriodos",
				templateUrl: "pages/list/periodos.html"
			}
		).when("/periodo/new",
			{
				controller: "newPeriodo",
				templateUrl: "pages/new/periodo.html"
			}
		).when("/periodo/edit/:obj",
			{
				controller: "editPeriodo",
				templateUrl: "pages/new/periodo.html"
			}
		).when("/report/professor",
			{
				templateUrl: "pages/report.html"
			}
		)
		// Aluno
		.when("/aluno/verify",
			{
				templateUrl: "aluno-valid.html"
			}
		).when("/aluno/make",
			{
				templateUrl: "aluno-make.html"
			}
		).when("/aluno/make/:obj",
			{
				templateUrl: "aluno-make.html"
			}
		).when("/grupo/list",
			{
				controller: "listGrupos",
				templateUrl: "pages/list/grupos.html"
			}
		).when("/grupo/new",
			{
				controller: "newGrupo",
				templateUrl: "pages/new/grupo.html"
			}
		).when("/grupo/edit/:obj",
			{
				controller: "editGrupo",
				templateUrl: "pages/new/grupo.html"
			}
		).when("/report/aluno",
			{
				templateUrl: "aluno-report.html"
			}
		).otherwise(
			{
				redirectTo: "/"
			}
		)
})

.run(function($rootScope, $location) {
	$rootScope.url = [];
	$rootScope.url.tipo = [];
	$rootScope.url.list = [];
	$rootScope.url.edit = [];
	$rootScope.url.new = [];
	$rootScope.url.del = [];
	$rootScope.url.base = "http://localhost:9999";

	$rootScope.url.tipo.curso = $rootScope.url.base + "/data/tipos-curso.json";
	$rootScope.url.tipo.acesso = $rootScope.url.base + "/data/tipos-acesso.json";
	$rootScope.url.tipo.disciplina = $rootScope.url.base + "/data/tipos-disciplina.json";

	$rootScope.url.new.aluno = $rootScope.url.base + "/cadastrar-aluno";
	$rootScope.url.new.atividade = $rootScope.url.base + "/cadastrar-atividade";
	$rootScope.url.new.categoria = $rootScope.url.base + "/cadastrar-categoria";
	$rootScope.url.new.curso = $rootScope.url.base + "/cadastrar-curso";
	$rootScope.url.new.disciplina = $rootScope.url.base + "/cadastrar-disciplina";
	$rootScope.url.new.periodo = $rootScope.url.base + "/cadastrar-periodo";
	$rootScope.url.new.professor = $rootScope.url.base + "/cadastrar-professor";
	$rootScope.url.new.turma = $rootScope.url.base + "/cadastrar-turma";

	$rootScope.url.list.aluno = $rootScope.url.base + "/consultar-alunos";
	$rootScope.url.list.atividade = $rootScope.url.base + "/consultar-atividades";
	$rootScope.url.list.categoria = $rootScope.url.base + "/consultar-categorias";
	$rootScope.url.list.curso = $rootScope.url.base + "/consultar-cursos";
	$rootScope.url.list.disciplina = $rootScope.url.base + "/consultar-disciplinas";
	$rootScope.url.list.periodo = $rootScope.url.base + "/consultar-periodos";
	$rootScope.url.list.professor = $rootScope.url.base + "/consultar-professores";
	$rootScope.url.list.turma = $rootScope.url.base + "/consultar-turmas";

	$rootScope.url.edit.aluno = $rootScope.url.base + "/editar-aluno";
	$rootScope.url.edit.atividade = $rootScope.url.base + "/editar-atividade";
	$rootScope.url.edit.categoria = $rootScope.url.base + "/editar-categoria";
	$rootScope.url.edit.curso = $rootScope.url.base + "/editar-curso";
	$rootScope.url.edit.disciplina = $rootScope.url.base + "/editar-disciplina";
	$rootScope.url.edit.periodo = $rootScope.url.base + "/editar-periodo";
	$rootScope.url.edit.professor = $rootScope.url.base + "/editar-professor";
	$rootScope.url.edit.turma = $rootScope.url.base + "/editar-turma";

	$rootScope.url.del.aluno = $rootScope.url.base + "/excluir-aluno";
	$rootScope.url.del.atividade = $rootScope.url.base + "/excluir-atividade";
	$rootScope.url.del.categoria = $rootScope.url.base + "/excluir-categoria";
	$rootScope.url.del.curso = $rootScope.url.base + "/excluir-curso";
	$rootScope.url.del.disciplina = $rootScope.url.base + "/excluir-disciplina";
	$rootScope.url.del.periodo = $rootScope.url.base + "/excluir-periodo";
	$rootScope.url.del.professor = $rootScope.url.base + "/excluir-professor";
	$rootScope.url.del.turma = $rootScope.url.base + "/excluir-turma";

	$rootScope.home = function (){
		$location.path('/')
	}

	$rootScope.alert_reset = function (){
		$("#toggleCSS").attr("href", "css/alertify.default.css");
		alertify.set({
			labels : {
				ok     : "OK",
				cancel : "Cancel"
			},
			delay : 5000,
			buttonReverse : false,
			buttonFocus   : "ok"
		});
	};
})

function compareTo() {
    return {
        require: "ngModel",
        scope: {
            pwdretype: "=compareTo"
        },
        link: function(scope, element, attributes, modelVal) {
            modelVal.$validators.compareTo = function(val) {
                return val == scope.pwdretype;
            };
            scope.$watch("pwdretype", function() {
                modelVal.$validate();
            });
        }
    }
}