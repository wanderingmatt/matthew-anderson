const gulp         = require('gulp'),

      autoprefixer = require('gulp-autoprefixer'),
      concat       = require('gulp-concat'),
      connect      = require('gulp-connect'),
      del          = require('del'),
      ghPages      = require('gulp-gh-pages-with-updated-gift'),
      sassGlob     = require('gulp-sass-glob'),
      sass         = require('gulp-sass');

var paths = {
  html: {
    src: './src/**/*.html',
    dest: './dist'
  },
  images: {
    src: './src/images/**/*',
    dest: './dist/images'
  },
  stylesheets: {
    src: ['./src/stylesheets/**/*.scss', '!./src/stylesheets/styles.scss'],
    dest: './dist/stylesheets'
  },
  // javascripts: {
  //   src: './src/javascripts/scripts.js',
  //   dest: './dist/javascripts'
  // },
};

function clean() {
  return del(['./dist/**/*', '!./dist/CNAME']);
}

function serve(done) {
  connect.server({
    root: './dist',
    livereload: true
  });
  done();
};

function watch(done) {
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.stylesheets.src, stylesheets);
  // gulp.watch(paths.javascripts.src, javascripts);
  done();
};

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())
};

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload())
};

function stylesheets() {
  return gulp
    .src(paths.stylesheets.src)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(paths.stylesheets.dest))
    .pipe(connect.reload())
};

// function javascripts() {
//   return gulp
//     .src(paths.javascripts.src)
//     .pipe(concat('scripts.js'))
//     .pipe(gulp.dest(paths.javascripts.dest))
//     .pipe(connect.reload())
// };

function deploy() {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages())
};

exports.clean = clean;

const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    images,
    stylesheets
  )
);

exports.build = build;

exports.deploy = gulp.series(
  build,
  deploy
);

exports.default = gulp.series(
  build,
  serve,
  watch
);
