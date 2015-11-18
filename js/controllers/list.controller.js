let ListController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.contacts = res.data.results;
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;