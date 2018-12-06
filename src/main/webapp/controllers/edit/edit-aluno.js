angular.module('dataCoffee').controller('editAluno', editAluno);

editAluno.$inject = ['$scope', '$http', '$routeParams', '$rootScope', '$location'];

function editAluno($scope, $http, $routeParams, $rootScope, $location) {
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.periodo = $scope.periodos[0];
        $scope.turma = $scope.turmas[0];
        $scope.email = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ rgm : $routeParams.obj, nome : $scope.name, periodo : $scope.periodo, turma : $scope.turma, email : $scope.email });
    	$http({ method: 'POST', url: $rootScope.url.edit.aluno, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Atualizado com sucesso!");
        $location.path('aluno/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.list.periodo, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.turma, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.aluno + '?id=' + $routeParams.obj, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.aluno = response.data;
        $scope.rgm = $scope.aluno.rgm;
        $scope.name = $scope.aluno.nome;
        $scope.curso = $scope.cursos[$scope.cursos.findIndex(curso => curso.nome === $scope.aluno.curso)];
        $scope.periodo = $scope.periodos[$scope.periodos.findIndex(periodo => periodo.nome === $scope.aluno.periodo)];
        $scope.turma = $scope.turmas[$scope.turmas.findIndex(turma => turma.nome === $scope.aluno.turma)];
        $scope.email = $scope.aluno.email;
    }, function error(response) {
        console.log(response.statusText);
    });
}