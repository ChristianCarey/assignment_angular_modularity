PuppiesAPI.factory('breeds', ['$http',function($http) {

  var sendGetRequest = function() {
    return $http.get(
      'https://ajax-puppies.herokuapp.com/breeds.json'
    );
  }

  return {
    sendGetRequest: sendGetRequest
  }

}]);
