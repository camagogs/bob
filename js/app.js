var app = angular.module('hytt', []);
app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.showMe2 = false;
    $scope.myFunc = function() {
      $scope.showMe = !$scope.showMe;
    }
    $scope.myFunc2 = function(){
    $scope.showMe2 = !$scope.showMe2;
    var element = document.getElementById("star1");
    var element2 = document.getElementById("hyt-container-lateral1");
    if(element.className=="icon-star-icon"){
    element.classList.add("icon-53415");
    element.classList.remove("icon-star-icon");
    element2.style.height = "450px";
  }
    else{
      element.classList.remove("icon-53415");
      element.classList.add("icon-star-icon");
      element2.style.height = "517px";
    }
  }
});
function showModal(){
  document.getElementById("icon-upload-icon1").style.backgroundColor="#00a58b";
  document.getElementById("icon-upload-icon1").style.color="#fff";
}
function hideModal(){
  document.getElementById("icon-upload-icon1").style.backgroundColor="#fff";
  document.getElementById("icon-upload-icon1").style.color="#a09f9f";
}
