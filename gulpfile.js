const gulp         = require('gulp'),

      autoprefixer     = require('gulp-autoprefixer'),
      cache            = require('gulp-cache'),
      concat           = require('gulp-concat'),
      connect          = require('gulp-connect'),
      del              = require('del'),
      ghPages          = require('gulp-gh-pages-with-updated-gift'),
      imagemin         = require('gulp-imagemin'),
      imageminPngquant = require('imagemin-pngquant'),
      include          = require('gulp-file-include'),
      inlineFonts      = require('gulp-inline-fonts'),
      merge            = require('merge-stream'),
      sassGlob         = require('gulp-sass-glob'),
      sass             = require('gulp-sass');

var paths = {
  downloads: {
    src: './src/downloads/*',
    dest: './dist/downloads/',
  },
  fonts: {
    src: './src/fonts/*',
    dest: './src/stylesheets/framework/',
  },
  html: {
    src: ['./src/**/*.html', '!./src/partials/*'],
    dest: './dist'
  },
  images: {
    src: './src/images/**/*',
    dest: './dist/images'
  },
  stylesheets: {
    src: './src/stylesheets/**/*.scss',
    dest: './dist/stylesheets'
  },
  // javascripts: {
  //   src: './src/javascripts/scripts.js',
  //   dest: './dist/javascripts'
  // },
};

function clean(done) {
  del(['./dist/**/*', '!./dist/CNAME']);
  cache.clearAll();
  done();
}

function serve(done) {
  connect.server({
    root: './dist',
    livereload: true
  });
  done();
};

function watch(done) {
  gulp.watch(paths.downloads.src, downloads);
  gulp.watch(paths.fonts.src, fonts);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.stylesheets.src, stylesheets);
  // gulp.watch(paths.javascripts.src, javascripts);
  done();
};

function downloads() {
  return gulp
    .src(paths.downloads.src)
    .pipe(gulp.dest(paths.downloads.dest))
    .pipe(connect.reload())
};

function fonts() {
  var stream = merge();

  stream.add(
    gulp.src('./src/fonts/brandon-grotesque-regular*')
      .pipe(inlineFonts({ name: 'brandon-grotesque-regular' }))
  )

  stream.add(
    gulp.src('./src/fonts/brandon-grotesque-light*')
      .pipe(inlineFonts({ name: 'brandon-grotesque-light' }))
  )

  return stream
    .pipe(concat('_fonts.scss'))
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(connect.reload())
};

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(include({
      basepath: './src/partials/',
      indent: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())
};

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(cache(imagemin([
      imageminPngquant({
          speed: 1,
          quality: [0.7, 0.95]
      }),
      imagemin.svgo({
          plugins: [{
              removeViewBox: false
          }]
      }),
    ])))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload())
};

function stylesheets() {
  return gulp
    .src(paths.stylesheets.src)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
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
    downloads,
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
