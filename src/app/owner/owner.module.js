import { owner } from './owner.component'
import { OwnerService } from './owner.service'
import { configure } from './owner.config'

export default
  angular
    .module('owner', [])
    .component('owner', owner)
    .service('$owner', OwnerService)
    .config(configure)
    .name
