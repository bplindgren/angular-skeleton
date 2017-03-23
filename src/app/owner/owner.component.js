import templateUrl from './owner.component.html'

/* @ngInject */
class OwnerController {
  constructor ($owner, $state, $http, $sce, $log) {
    this.$state = $owner
    this.$http = $http
    this.$sce = $sce
    $log.debug('ownerController instantiated')
  }

}

export const owner = {
  templateUrl,
  controller: OwnerController,
  controllerAs: '$owner'
}
