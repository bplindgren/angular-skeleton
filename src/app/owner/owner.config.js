import { owner } from './owner.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(owner)
}
