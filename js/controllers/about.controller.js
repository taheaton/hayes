let AboutController = function($scope) {
  $scope.title = "Spencer Hayes, President and CEO and his wife Jen";
  $scope.lefttitle="Areas of Expertise";
  $scope.leftone = "December 2003 – Present (12 years)Johns Creek, GA.  Providing nationwide IT and SAS consulting services. Specializing in IT Systems Architecture, SAS Installation, Platform Administraton and Performance Tuning, Public and Private cloud computing, and Enterprise, mission-critical, high performance systems.";
  $scope.img="https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11700935_10207283178780247_4641038143668188356_n.jpg?oh=436851da59d9bbd041d28eb3ad20b7b4&oe=56BFFE55";
  $scope.lefttwo = "Expert in Enterprise IT & Cloud systems architecture and design with focus on high performance, high availability and clustering, virtualization and cloud computing, and automation for mission-critical systems.";
  $scope.leftthree = "Certified Architecture and Design Specialist and Deployment and Implementation Specialist for SAS Grid Manager. Expert knowledge of UNIX/Linux physical and virtual environments specializing in SAS Grid and Platform Architecture and Administration.";
  $scope.leftfour = "Responsible for end-to-end implementation and configuration of Amazon EC2 environment inside Amazon Virtual Private Cloud (VPC) as well as multiple SAS 9.3 Enterprise Business Intelligence and Enterprise Data Integration environments on RedHat Enterprise Linux (RHEL). Designed and built of SAS Grid on RHEL5, as well as 30-node private VMware cluster and creation of Cloudera Hadoop CDH3 cluster.";
  $scope.ul = "Specialties: ";
  $scope.lione= "     Cloud & IT Systems Architecture";
  $scope.litwo= "     Amazon EC2, VPC";
  $scope.lithree = "SAS Installation, Platform Administration and Performance Tuning";
  $scope.lifour = "Enterprise, mission-critical, high performance systems";
  $scope.lifive = "High availability, clustering";
  $scope.lisix = "UNIX/Linux systems automation and scripting";
  $scope.span = "      ";

};
AboutController.$inject = ['$scope'];
export default AboutController;