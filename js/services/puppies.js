PuppiesAPI.factory('puppies', ['$http',function($http) {

  var sendGetRequest = function() {
    return $http.get(
      'https://ajax-puppies.herokuapp.com/puppies.json'
    );
  }

  var sendPostRequest = function(data) {
    return $http.post(
      'https://ajax-puppies.herokuapp.com/puppies.json',
      data
    );
  }

  var sendDeleteRequest = function(id) {
    return $http.delete(
      "https://ajax-puppies.herokuapp.com/puppies/" + id + ".json"
    );
  }

  return {
    sendGetRequest: sendGetRequest,
    sendPostRequest: sendPostRequest,
    sendDeleteRequest: sendDeleteRequest
  }

}]);
