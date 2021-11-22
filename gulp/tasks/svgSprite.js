const { src, dest } = require('gulp');
const gulpSvgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const paths = require('../paths');

const svgSprite = () => {
  return src(paths.sprites.src)
    .pipe(plumber())
    .pipe(gulpSvgSprite({
      mode: 'symbols',
      preview: false
    }))
    .pipe(dest(paths.sprites.dist))
    .pipe(browserSync.stream());
}

module.exports = svgSprite;
