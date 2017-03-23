import templateUrl from './season.component.html'

/* @ngInject */
class SeasonController {
  constructor ($season, $state, $http, $sce, $scope, $log) {
    this.$season = $season
    this.$http = $http
    this.$sce = $sce
    this.$scope = $scope
    $log.debug('SeasonController instantiated')
    let imagePath = 'https://www.i9sports.com/images/fullsite/sport-icons/SmallIconSport5.png'
    this.seasons = $season.getSeasons()
  }
}

export const season = {
  templateUrl,
  controller: SeasonController,
  controllerAs: '$season'
}
