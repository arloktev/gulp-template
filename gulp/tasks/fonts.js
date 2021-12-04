const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const { paths } = require('../config');

const fonts = () => {
  return (
    src(paths.fonts.src)
      .pipe(dest(paths.fonts.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = fonts;
