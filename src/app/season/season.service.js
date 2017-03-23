export class SeasonService {
  initialized = false

  constructor ($log, $http) {
    'ngInject'
    this.$http = $http
    $log.debug('SeasonService instantiated!')
  }

  getSeasons = function() {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/season/',
      headers: {
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
              }
    }).then(function successCallback(response) {
      console.log(response.data)
      return response.data
    }, function errorCallback(response) {
      return response
    })
  }

}
