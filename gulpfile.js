var gulp         = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cssfont64    = require('gulp-cssfont64');
var cssmin       = require('gulp-clean-css');
var concat       = require('gulp-concat');
var connect      = require('gulp-connect');
var deploy       = require('gulp-gh-pages');
var htmlmin      = require('gulp-htmlmin');
var imagemin     = require('gulp-imagemin');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');

gulp.task('build', ['html', 'css', 'fonts', 'js', 'images']);

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/scss/**/*', ['css']);
  gulp.watch('./src/fonts/**/*', ['fonts']);
  gulp.watch('./src/javascripts/**/*', ['js']);
  gulp.watch('./src/images/**/*', ['images']);
});

gulp.task('html', function() {
  gulp.src('./src/index.html')
    // .pipe(htmlmin({
    //   collapseWhitespace: true,
    //   removeAttributeQuotes: true
    // }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
});

gulp.task('css', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(connect.reload())
});

gulp.task('fonts', function () {
  gulp.src('./src/fonts/**/*')
    .pipe(cssfont64())
    .pipe(gulp.dest('./src/scss/framework'))
});

gulp.task('js', function () {
  gulp.src(['./node_modules/jquery/dist/jquery.js', './src/javascripts/slick.js', './src/javascripts/scripts.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/javascripts'))
    .pipe(connect.reload())
});

gulp.task('images', () =>
  gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
);

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('default', ['connect', 'watch']);
