var underscore = angular.module('underscore',[]);
underscore.factory('_', function(){
    return window._;
});

var layoutGen = function(w, bs, s){
    var r=[];
    for (var i=0; i < w/bs ; i++){
        var m = (w - (i*bs))/(bs-1);
        if(String(m).match(/^[0-9]{1,3}$/) && m > 0 && i > m*2){
            r.push({childWidth: i, margin: m});
        }
    }
    if(s===""){
        return r;
    }
    return r.slice(0,s);
}        

var width = 600;
var cbn = 5;
var list = 5;

angular.module('app',["underscore"]);
angular.module('app').controller('appCtrl',["$scope","_", function($scope,_){
    $scope.layoutGen = layoutGen;
    $scope.width = width;
    $scope.cbn = cbn;
    $scope.list = list;
    $scope._ = _;

}]);
