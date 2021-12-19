// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async store => {
    store.addMetadata('link_github', 'https://github.com/Multi-Agent-io/gaka-chu.online')
    store.addMetadata('link_rarible', 'https://rarible.com/gakachu')
    store.addMetadata('link_opensea', 'https://opensea.io/accounts/Gaka-Chu')
    store.addMetadata('link_youtube', 'https://www.youtube.com/channel/UCT5_U0Nddr9UG2Z15ArdOLA')
  })
  // api.loadSource(({ addCollection }) => {

    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
