// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Laboratory of Multi-Agent Systems in Smart Cities and Industry 4.0',
  plugins: [
    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ["en", "ru"],
        defaultLocale: "en",
        translations: yaml.load(fs.readFileSync('./src/data/locales/translations.yaml', 'utf8')),
        // collections: ['blog'],
        routes: yaml.load(fs.readFileSync('./src/data/locales/routes.yaml', 'utf8')),
      }
    },
  ],

  chainWebpack (config) {
    config.mode('development')
  }
}
