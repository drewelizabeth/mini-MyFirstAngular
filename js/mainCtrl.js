angular.module('friendsList')
    .controller('mainCtrl', function($scope) {
    $scope.friends = [
        'Spencer',
        'Jovy',
        'Brooke',
        'Brian'
    ];
});