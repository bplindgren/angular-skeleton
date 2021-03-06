import templateUrl from './app.component.html'

/* @ngInject */
class AppController {
  constructor ($log, $location, $http, $sce, $scope) {
    $log.debug('AppController instantiated')
    this.$location = location
    this.$http = $http
    this.$sce = $sce
    this.recentGames = function() {
      let games = []
      this.$http({
        method: 'GET',
        url: 'http://localhost:8080/games/recent',
        headers: {
                  'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': 'http://localhost:3000/'
                }
      }).then(function successCallback(response) {
        games = response.data
        console.log(games.length)
        return games
      }, function errorCallback(response) {
        return response
      })
    }

    $scope.str = "stuff"

  }
}

export const app = {
  templateUrl,
  controller: AppController,
  controllerAs: '$app'
}
