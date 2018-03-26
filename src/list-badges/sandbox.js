










const fetch = require('node-fetch')
const discourseUrl = require('../discourse-url')
const makeJunction = require('../junction-file-cache')
const junction = makeJunction('list-badges')
const R = require('ramda')

function listBadges() {
  return junction('fetch-body', () =>
    fetch(discourseUrl('/admin/badges.json')).then(asJSON)
  )
    .then(extractBadges)
    .then(simplifyBadges)
}

const extractBadges = body => body.badges
const asJSON = response => response.json()
const simplifyBadge = R.pick([ 'id', 'name' ])
const simplifyBadges = R.map(simplifyBadge)

it('listBadges (sandbox)', () => {
  return listBadges()
    .then(badges => {
      badges//?
    })
})