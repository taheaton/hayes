let ListController = function($scope, ContactService) {

  ContactService.getContacts().then ( (res) => {
    $scope.contacts = res.data.results;
  });

};
ListController.$inject = ['$scope', 'ContactService'];
export default ListController;