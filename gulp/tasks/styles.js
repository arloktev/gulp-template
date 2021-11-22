const { src, dest } = require('gulp');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));

const paths = require('../paths');

const isProduction = process.env.NODE_ENV === 'production';

const styles = () => {
  return (
    src(paths.styles.src)
      .pipe(plumber())
      .pipe(gulpIf(!isProduction, sourcemaps.init()))
      .pipe(sass())
      .pipe(postcss(
        [
          autoprefixer()
        ]
      ))
      .pipe(gulpIf(!isProduction, sourcemaps.write('.')))
      .pipe(dest(paths.styles.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = styles;
