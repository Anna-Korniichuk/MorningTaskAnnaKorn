const { defineConfig } = require('cypress')


module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://www.demoblaze.com',
    //   viewportHeight:1080,
    //   viewportWidth: 1340,
      setupNodeEvents(on, config) {
      },
    },
  })
  