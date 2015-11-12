let HomeController = function ($scope) {

  $scope.title = 'EXPERT SAS INSTALLATION AND ADMINISTRATION';
  $scope.titleTwo = 'SAS Enterprise Consulting';

  $scope.aboutText = 'I am some about text';

  $scope.contactText = 'I am some contact text';

  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

};

HomeController.$inject = ['$scope'];

export default HomeController;