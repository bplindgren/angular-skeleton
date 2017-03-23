export const season = {
  name: 'season',
  url: '/season',
  component: 'season'
}

export const seasonView = {
  name: 'season.seasonView',
  url: '/season/:id',
  params: {
    season: season
  },
  component: 'seasonView'
}