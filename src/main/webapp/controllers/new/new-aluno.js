angular.module('dataCoffee').controller('newAluno', newAluno);

newAluno.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newAluno($scope, $http, $rootScope, $location) {
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.periodo = $scope.periodos[0];
        $scope.turma = $scope.turmas[0];
        $scope.email = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ rgm : $scope.rgm, nome : $scope.name, turma : $scope.turma.nome, periodo : $scope.periodo.nome, email : $scope.email });
    	$http({ method: 'POST', url: $rootScope.url.new.aluno, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('aluno/list');
    }
    
    $http({ method: 'GET', url: $rootScope.url.list.periodo, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.periodos = response.data;
        $scope.periodo = $scope.periodos[0];
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.turma, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.turmas = response.data;
        $scope.turma = $scope.turmas[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}