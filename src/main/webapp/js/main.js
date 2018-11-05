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
		.when("/curso/list", {controller: "", templateUrl: "pages/list-cursos.jsp"})
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
	
	$rootScope.home = function (){
		$location.path('/');
	};
});

app.controller('listController', ['$scope', '$routeParams', '$rootScope', '$route', '$location', function listController($scope, $routeParams, $routeScope, $route, $location) {

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