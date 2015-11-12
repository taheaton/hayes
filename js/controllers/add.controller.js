let AddController = function($scope, ContactService) {

  $scope.addContact = (obj) => {
    ContactService.addContact(obj).then( (res) => {
      $scope.contact = {};
    });
  };

};
AddController.$inject = ['$scope', 'ContactService'];
export default AddController;