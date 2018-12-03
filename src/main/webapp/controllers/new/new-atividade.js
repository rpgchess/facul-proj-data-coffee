angular.module('dataCoffee').controller('newAtividade', newAtividade);

newAtividade.$inject = ['$scope', '$http', '$rootScope', '$location'];

function newAtividade($scope, $http, $rootScope, $location) {
    $scope.fileNameChanged = function (resFile) {
        var files = resFile.files;
        var l = files.length;
        $scope.file = files[0].name;
    }

    $scope.reset = function (){
        $scope.opt = 1;
        $scope.dateAble = false;
        $scope.name = '';
        $scope.date = '';
        $scope.dateEnd = '';
        $scope.grpQtde = 0;
        $scope.curso = $scope.cursos[0];
        $scope.disciplina = $scope.disciplinas[0];
        $scope.file = '';
        $scope.obs = '';
    }

    $scope.salvar = function() {
        if ($scope.dateEnd == null) $scope.dateEnd == "";
        if ($scope.opt != 2) $scope.grpQtde == 0;
        if ($scope.file == null) $scope.file == "";
        $scope.data = JSON.stringify({ nome : $scope.name, data : $scope.date, entrega : $scope.dateEnd, curso : $scope.curso.nome, disciplina : $scope.disciplina.nome, trabalho : $scope.opt, quantidade : $scope.grpQtde, arquivo : $scope.file, descricao : $scope.obs });
        console.log($rootScope.url.new.atividade);
        console.log($scope.data);
        /*
    	$http({ method: 'POST', url: $rootScope.url.new.atividade, 
    		data: $scope.data,
    		headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        alertify.success("Adicionado com sucesso!");
        $location.path('atividade/list');
        */
    }
    
    $http({ method: 'GET', url: $rootScope.url.list.curso, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.cursos = response.data;
        $scope.curso = $scope.cursos[0];
    }, function error(response) {
        console.log(response.statusText);
    });

    $http({ method: 'GET', url: $rootScope.url.list.disciplina, headers: { 'Content-Type': 'application/json' }
    }).then(function success(response) {
        $scope.disciplinas = response.data;
        $scope.disciplina = $scope.disciplinas[0];
    }, function error(response) {
        console.log(response.statusText);
    });
}