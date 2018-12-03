angular.module('dataCoffee').controller('newProfessor', newProfessor);

newProfessor.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newProfessor($scope, $http, $rootScope, $location) {
    $scope.types = [];
    $scope.reset = function (){
        $scope.rgm = '';
        $scope.name = '';
        $scope.email = '';
        $scope.type = $scope.types[0];
        $scope.pwd = '';
        $scope.pwdretype = '';
    }

    $scope.salvar = function() {
        $scope.data = JSON.stringify({ registro : $scope.rgm, nome : $scope.name, email : $scope.email, nvAcesso : $scope.type.nome, senha : $scope.pwd });
    	$http({ method: 'POST', url: $rootScope.url.new.professor, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('professor/list');
    }

    $http({ method: 'GET', url: $rootScope.url.tipo.acesso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.types = response.data;
        $scope.type = $scope.types[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}