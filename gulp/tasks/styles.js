const { src, dest } = require('gulp');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));
const postcssNormalize = require('postcss-normalize');
const csso = require('postcss-csso');

const { paths, isProduction } = require('../config');

const commonPlugins = [
  autoprefixer(),
  postcssNormalize(),
]

const plugins = [
  ...commonPlugins,
  csso()
];

const styles = () => {
  return (
    src(paths.styles.src)
      .pipe(plumber())
      .pipe(gulpIf(!isProduction, sourcemaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(isProduction ? plugins : commonPlugins))
      .pipe(gulpIf(!isProduction, sourcemaps.write('.')))
      .pipe(plumber.stop())
      .pipe(dest(paths.styles.dist))
      .pipe(browserSync.stream())
  )
}

module.exports = styles;
