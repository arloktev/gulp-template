const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const { paths } = require('../config');

const views = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest(paths.views.dist))
    .pipe(browserSync.stream())
}

module.exports = views;
