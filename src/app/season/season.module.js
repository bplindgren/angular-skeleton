import { season } from './season.component'
import { SeasonService } from './season.service'
import { seasonView } from './seasonView/seasonView.component'
import { seasonViewService } from './seasonView/seasonView.service'
import { configure } from './season.config'

export default
  angular
    .module('season', [])
    .component('season', season)
    .service('$season', SeasonService)
    .component('seasonView', seasonView)
    .service('$seasonView', seasonViewService)
    .config(configure)
    .name
