import { season } from './season.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(season)
}
