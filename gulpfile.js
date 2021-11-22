const { parallel, series } = require('gulp');

const views = require('./gulp/tasks/views');
const clean = require('./gulp/tasks/clean');
const server = require('./gulp/tasks/server');
const styles = require('./gulp/tasks/styles');
const images = require('./gulp/tasks/images');
const fonts = require('./gulp/tasks/fonts');
const svgSprite = require('./gulp/tasks/svgSprite');

const build = series(clean, parallel(views, styles, fonts, images, svgSprite));
const dev = series(build, server);

module.exports.start = dev
module.exports.build = build
