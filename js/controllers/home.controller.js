let HomeController = function ($scope) {

  $scope.title = 'J.S. Hayes, Inc.';
    $scope.titleTwo = 'SAS Enterprise Consultant';

  $scope.aboutText = 'I am some about text';

  $scope.contactText = 'I am some contact text';

};

HomeController.$inject = ['$scope'];

export default HomeController;