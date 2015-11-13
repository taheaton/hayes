let ContactController = function($scope, ContactService) {
  $scope.title = "Request ";
  $scope.titletwo = "Information";

  $scope.count = 0;
  $scope.message = "";

  $scope.incrementByOne= function() {
    $scope.count++;
    $scope.message= ($scope.count === 1) ? "Thank you for your submission.  We will contact you soon!" : "Thank you for your interest!";

  };


  $scope.addContact = (obj) => {
    ContactService.addContact(obj).then( (res) => {
      $scope.contact = {};
    });
  };   
  

};
ContactController.$inject = ['$scope', 'ContactService'];
export default ContactController;