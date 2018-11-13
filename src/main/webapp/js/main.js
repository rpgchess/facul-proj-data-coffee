(function (angular){
	'use strict';
	
var app = angular.module('dataCoffee', ['ngRoute']);

// Definindo Rotas
app.config(function($routeProvider, $locationProvider){
	// Utilizando o HTML5 History API (TRUE)
	$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
	
	$routeProvider
		.when("/", {controller: "listController", templateUrl: "pages/welcome.jsp"})
		// Geral
		.when("/notify", {controller: "listController", templateUrl: "pages/notification.jsp"})
		.when("/about", {controller: "listController", templateUrl: "pages/about.jsp"})
		.when("/welcome", {controller: "listController", templateUrl: "pages/welcome.jsp"})
		.when("/perfil", {controller: "listController", templateUrl: "pages/perfil.jsp"})
		.when("/contact", {controller: "listController", templateUrl: "pages/contact.jsp"})
		// Coordenador
		.when("/professor/list", {controller: "", templateUrl: "pages/list-professores.jsp"})
		.when("/professor/new", {controller: "", templateUrl: "pages/new-professor.jsp"})
		.when("/professor/edit:obj", {controller: "", templateUrl: "pages/new-professor.jsp"})
		.when("/curso/list", {controller: "listCursos", templateUrl: "pages/list-cursos.jsp"})
		.when("/curso/new", {controller: "", templateUrl: "pages/new-curso.jsp"})
		.when("/curso/edit:obj", {controller: "", templateUrl: "pages/new-curso.jsp"})
		.when("/categoria/list", {controller: "", templateUrl: "pages/list-categorias.jsp"})
		.when("/categoria/new", {controller: "", templateUrl: "pages/new-categoria.jsp"})
		.when("/categoria/edit:obj", {controller: "", templateUrl: "pages/new-categoria.jsp"})
		// Coordenador / Professor
		.when("/disciplina/list", {controller: "", templateUrl: "pages/list-disciplinas.jsp"})
		.when("/disciplina/new", {controller: "", templateUrl: "pages/new-disciplina.jsp"})
		.when("/disciplina/edit:obj", {controller: "", templateUrl: "pages/new-disciplina.jsp"})
		// Professor
		.when("/atividade/list", {controller: "", templateUrl: "pages/list-atividades.jsp"})
		.when("/atividade/new", {controller: "", templateUrl: "pages/new-atividade.jsp"})
		.when("/atividade/edit:obj", {controller: "", templateUrl: "pages/new-atividade.jsp"})
		.when("/aluno/list", {controller: "", templateUrl: "pages/list-alunos.jsp"})
		.when("/aluno/new", {controller: "", templateUrl: "pages/new-aluno.jsp"})
		.when("/aluno/edit:obj", {controller: "", templateUrl: "pages/new-aluno.jsp"})
		.when("/turma/list", {controller: "", templateUrl: "pages/list-turmas.jsp"})
		.when("/turma/new", {controller: "", templateUrl: "pages/new-turma.jsp"})
		.when("/turma/edit:obj", {controller: "", templateUrl: "pages/new-turma.jsp"})
		.when("/periodo/list", {controller: "", templateUrl: "pages/list-periodos.jsp"})
		.when("/periodo/new", {controller: "", templateUrl: "pages/new-periodo.jsp"})
		.when("/periodo/edit:obj", {controller: "", templateUrl: "pages/new-periodo.jsp"})
		.when("/report/professor", {controller: "", templateUrl: "pages/reports.jsp"})
		// Aluno
		.when("/aluno/verify", {controller: "", templateUrl: "pages/valid-aluno.jsp"})
		.when("/aluno/make", {controller: "", templateUrl: "pages/make-aluno.jsp"})
		.when("/aluno/make:obj", {controller: "", templateUrl: "pages/make-aluno.jsp"})
		.when("/grupo/list", {controller: "", templateUrl: "pages/list-grupos.jsp"})
		.when("/grupo/new", {controller: "", templateUrl: "pages/new-grupo.jsp"})
		.when("/grupo/edit:obj", {controller: "", templateUrl: "pages/new-grupo.jsp"})
		.when("/report/aluno", {controller: "", templateUrl: "pages/reports.jsp"})
		.otherwise({redirectTo: "/"});
});

app.run(function($rootScope, $location) {
    $rootScope.wines = [{
	        name: "Pintas Douro",
	        year: 2013,
	        type: "Tinto",
	        price: "R$ 768.00"
	    }, {
	    	name: "Amado Sur Trivento",
	        year: 2011,
	        type: "Tinto",
	        price: "R$ 54.80"
	    }, {
	    	name: "Guru Douro Branco",
	        year: 2014,
	        type: "Tinto",
	        price: "R$ 348,00"
    }];
    /*
    $rootScope.cursos = [{
		adc: "abc",
		name: "ARTES VISUAIS (LICENCIATURA)",
		cat:"CIÊNCIAS HUMANAS E EDUCAÇÃO"
	},{
		abc: "abc",
		name: "CIÊNCIAS BIOLÓGICAS (LICENCIATURA)          ",
		cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO"
	},{
		abc: "abc", name: "DESIGN DE PRODUTO (TECNOLÓGICO)             ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "DESIGN GRÁFICO (TECNOLÓGICO)                ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "DIREITO                                     ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "EDUCAÇÃO FÍSICA (LICENCIATURA)              ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "FÍSICA (LICENCIATURA)                       ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "FOTOGRAFIA (TECNOLÓGICO)                    ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "HISTÓRIA (LICENCIATURA)                     ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "LETRAS - PORTUGUÊS (LICENCIATURA)           ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "LETRAS - PORTUGUÊS E ESPANHOL (LICENCIATURA)", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "LETRAS - PORTUGUÊS E INGLÊS (LICENCIATURA)  ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "MATEMÁTICA (LICENCIATURA)                   ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "PEDAGOGIA (LICENCIATURA)                    ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "PRODUÇÃO AUDIOVISUAL (TECNOLÓGICO)          ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "PRODUÇÃO PUBLICITÁRIA (TECNOLÓGICO)         ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "RELAÇÕES INTERNACIONAIS                     ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "SEGURANÇA PRIVADA (TECNOLÓGICO)             ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "SERVIÇO SOCIAL                              ", cat: "CIÊNCIAS HUMANAS E EDUCAÇÃO" },{
		abc: "abc", name: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS (TECNOLÓGICO)", cat: "EXATAS" },{
		abc: "abc", name: "ARQUITETURA E URBANISMO                            ", cat: "EXATAS" },{
		abc: "abc", name: "AUTOMAÇÃO INDUSTRIAL                               ", cat: "EXATAS" },{
		abc: "abc", name: "CIÊNCIA DA COMPUTAÇÃO                              ", cat: "EXATAS" },{
		abc: "abc", name: "DESIGN DE INTERIORES (TECNOLÓGICO)                 ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA AMBIENTAL                               ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA CIVIL                                   ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA DA COMPUTAÇÃO                           ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA DE PRODUÇÃO                             ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA DE TELECOMUNICAÇÕES                     ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA ELÉTRICA                                ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA MECÂNICA                                ", cat: "EXATAS" },{
		abc: "abc", name: "ENGENHARIA MECATRÔNICA                             ", cat: "EXATAS" },{
		abc: "abc", name: "GESTÃO AMBIENTAL (TECNOLÓGICO)                     ", cat: "EXATAS" },{
		abc: "abc", name: "GESTÃO DA TECNOLOGIA DA INFORMAÇÃO (TECNOLÓGICO)   ", cat: "EXATAS" },{
		abc: "abc", name: "PRODUÇÃO INDUSTRIAL                                ", cat: "EXATAS" },{
		abc: "abc", name: "REDES DE COMPUTADORES (TECNOLÓGICO)                ", cat: "EXATAS" },{
		abc: "abc", name: "REDES DE TELECOMUNICAÇÕES                          ", cat: "EXATAS" },{
		abc: "abc", name: "CIÊNCIAS ECONÔMICAS", cat: "GERAL" },{
		abc: "abc", name: "ADMINISTRAÇÃO                           ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "CIÊNCIAS CONTÁBEIS                      ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "COMÉRCIO EXTERIOR (TECNOLÓGICO)         ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "EVENTOS (TECNOLÓGICO)                   ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO COMERCIAL (TECNOLÓGICO)          ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO DA QUALIDADE                     ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO DE TURISMO (TECNOLÓGICO)         ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO EM RECURSOS HUMANOS (TECNOLÓGICO)", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO FINANCEIRA (TECNOLÓGICO)         ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "GESTÃO PÚBLICA (TECNOLÓGICO)            ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "LOGÍSTICA (TECNOLÓGICO)                 ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "MARKETING (TECNOLÓGICO)                 ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "PROCESSOS GERENCIAIS (TECNOLÓGICO)      ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "PUBLICIDADE E PROPAGANDA                ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "SEGURANÇA NO TRABALHO                   ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "TURISMO                                 ", cat: "GESTÃO E NEGÓCIOS" },{
		abc: "abc", name: "BIOMEDICINA                      ", cat: "SAÚDE" },{
		abc: "abc", name: "CIÊNCIAS BIOLÓGICAS (BACHARELADO)", cat: "SAÚDE" },{
		abc: "abc", name: "EDUCAÇÃO FÍSICA (BACHARELADO)    ", cat: "SAÚDE" },{
		abc: "abc", name: "ENFERMAGEM                       ", cat: "SAÚDE" },{
		abc: "abc", name: "FARMÁCIA                         ", cat: "SAÚDE" },{
		abc: "abc", name: "FISIOTERAPIA                     ", cat: "SAÚDE" },{
		abc: "abc", name: "GESTÃO HOSPITALAR                ", cat: "SAÚDE" },{
		abc: "abc", name: "MEDICINA                         ", cat: "SAÚDE" },{
		abc: "abc", name: "NUTRIÇÃO                         ", cat: "SAÚDE" },{
		abc: "abc", name: "ODONTOLOGIA                      ", cat: "SAÚDE" },{
		abc: "abc", name: "PSICOLOGIA                       ", cat: "SAÚDE" },{
		abc: "abc", name: "RADIOLOGIA                       ", cat: "SAÚDE
	}];
	*/
	$rootScope.home = function (){
		$location.path('/');
	};
});

app.controller('listCursos', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function listController($scope, $routeParams, $routeScope, $route, $location) {
	
}]);

app.controller('editController', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function editController($scope, $routeParams, $routeScope, $route, $location) {
	$scope.wine = $routeParams.obj;
	$scope.wineIndex = $scope.wines.indexOf($scope.wine);
	
	$scope.salvar = function (){
		$scope.wines[$scope.wineIndex] = $scope.wine;
		$location.path('/');
	};	
}]);

app.controller('newController', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function newController($scope, $routeParams, $routeScope, $route, $location) {
	$scope.wine = '';
	
	$scope.salvar = function (){
		$scope.wines.push($scope.wine);
		$location.path('/');
	};
}]);

})(window.angular);