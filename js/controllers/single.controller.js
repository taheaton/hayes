let SingleController = function($scope, $stateParams, ContactService) {
  
  ContactService.getContact($stateParams.contactId).then( (res) => {
    $scope.singleContact = res.data;
  });

};
SingleController.$inject = ['$scope', '$stateParams', 'ContactService'];
export default SingleController;