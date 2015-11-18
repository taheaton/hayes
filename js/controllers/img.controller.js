let ImageController = function ($scope) {

  $scope.title = 'J.S. Hayes, Inc.';
    $scope.titleTwo = 'SAS Enterprise Consulting';

  $scope.aboutText = 'I am some about text';

  $scope.contactText = 'I am some contact text';
};

ImageController.$inject = ['$scope'];

export default ImageController;