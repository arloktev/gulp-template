const { src, dest } = require('gulp');
const svgstore = require('gulp-svgstore');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const { paths } = require('../config');

const svgSprite = () => {
  return src(paths.sprites.src)
    .pipe(plumber())
    .pipe(svgstore())
    .pipe(dest(paths.sprites.dist))
    .pipe(browserSync.stream());
}

module.exports = svgSprite;
