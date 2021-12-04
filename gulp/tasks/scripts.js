const { src, dest } = require('gulp');
const browserSync = require('browser-sync');
const esbuild = require('gulp-esbuild');

const { paths, isProduction } = require('../config');

const scripts = () => {
  return src(paths.scripts.src)
    .pipe(esbuild({
      outdir: '',
      bundle: true,
      sourcemap: !isProduction,
      minify: isProduction
    }))
    .pipe(dest(paths.scripts.dist))
    .pipe(browserSync.stream())
}

module.exports = scripts;
