const { src, dest } = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

const { paths, isProduction } = require('../config');

const images = () => {
  return (
    src(paths.images.src)
      .pipe(gulpIf(isProduction, imagemin()))
      .pipe(dest(paths.images.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = images;
