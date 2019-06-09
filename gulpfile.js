const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const gulpSass = require('gulp-sass');

const paths = {
  src: {
    less  : './src/style/less/*.less',
    css   : './src/style/css/*.css',
    sass  : './src/style/sass/*.scss',
    js    : './src/js/*.js',
    pug   : './src/pug/*.pug',
    images: './src/img/*'
  },
  dist: {
    html  : './dist',
    css   : './dist/style',
    js    : './dist/js',
    images: './dist/img',
    font: './dist/font'
  }
};

gulp.task('pug', () => {
  gulp.src(paths.src.pug)
      .pipe($.pug())
      .pipe(gulp.dest('./dist'));
})

gulp.task('less', () =>  {
  gulp.src(paths.src.less)
      .pipe($.less())
      .pipe(gulp.dest(paths.dist.css))
})
gulp.task('css', () => {
  gulp.src(paths.src.css)
      .pipe(gulp.dest(paths.dist.css))
})

gulp.task('sass',() => {
  gulp.src(paths.src.sass)
    .pipe(gulpSass())
    .pipe(gulp.dest(paths.dist.css))
})

gulp.task('scripts', () =>  {
  gulp.src(paths.src.js)
      // .pipe($.uglify())
      .pipe(gulp.dest(paths.dist.js))
})

gulp.task('images', () =>  {
  gulp.src(paths.src.images)
      .pipe($.imagemin())
      .pipe(gulp.dest(paths.dist.images))
})

gulp.task('webserver', () => {
  gulp
    .src(paths.dist.html)
    .pipe($.webserver({
      port: 8080,
      livereload: true,
      directoryListing: false
    }))
})

gulp.task('watch',() => {
  gulp.watch(paths.src.pug, ['pug'])
  gulp.watch(paths.src.css, ['css'])
  gulp.watch(paths.src.js, ['scripts'])
  gulp.watch(paths.src.less, ['less'])
  gulp.watch(paths.src.sass, ['sass'])
})

gulp.task('default', ['pug', 'less', 'css', 'sass', 'scripts', 'webserver', 'watch'])