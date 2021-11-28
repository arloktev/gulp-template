const browserSync = require('browser-sync');
const { watch } = require('gulp');

const styles = require('./styles');
const fonts = require('./fonts');
const views = require('./views');
const svgSprite = require('./svgSprite');
const images = require('./images');
const scripts = require('./scripts');

const { paths } = require('../config');

const server = () => {
  browserSync.init({
    server: 'dist/',
  })

  watch(paths.styles.watch, styles);
  watch(paths.fonts.watch, fonts);
  watch(paths.views.watch, views);
  watch(paths.sprites.watch, svgSprite);
  watch(paths.images.watch, images);
  watch(paths.scripts.watch, scripts);
}

module.exports = server;
