let ContactController = function($scope, ContactService) {
  $scope.title = "Request ";
  $scope.titletwo = "Information";
  $scope.addContact = (obj) => {
    ContactService.addContact(obj).then( (res) => {
      $scope.contact = {};
      $scope.message = "Thank you for your submission.";
    });
  };

};
ContactController.$inject = ['$scope', 'ContactService'];
export default ContactController;