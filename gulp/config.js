const isProduction = process.env.NODE_ENV === 'production';

const paths = {
  views: {
    src: './src/views/pages/*.pug',
    dist: './dist/',
    watch: [
      './src/views/**/*.pug',
      './src/components/**/*.pug',
    ],
  },
  styles: {
    src: './src/styles/main.{scss,sass}',
    dist: './dist/assets/styles/',
    watch: [
      './src/components/**/*.{scss,sass}',
      './src/styles/**/*.{scss,sass}'
    ]
  },
  scripts: {
    src: './src/js/index.js',
    dist: './dist/assets/js/',
    watch: [
      './src/js/index.js',
      './src/components/**/*.js'
    ]
  },
  images: {
    src: [
      './src/assets/images/**/*.{jpg,jpeg,png,gif,svg}',
    ],
    dist: './dist/assets/images/',
    watch: './src/assets/images/**/*.{jpg,jpeg,png,gif,svg}'
  },
  fonts: {
    src: './src/assets/fonts/**/*.{ttf,woff,woff2}',
    dist: './dist/assets/fonts/',
    watch: './src/assets/fonts/**/*.{ttf,woff,woff2}'
  },
  sprites: {
    src: './src/sprite/*.svg',
    dist: './dist/assets/images/',
    watch: './src/sprite/*.svg'
  }
};

module.exports = {
  isProduction,
  paths,
}
