var gulp = require('gulp')
var babel = require('gulp-babel');
var beep = require('beepbeep')
var concat = require('gulp-concat')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var htmlmin = require('gulp-htmlmin')
var plumber = require('gulp-plumber')
var pngquant = require('imagemin-pngquant')
var runSequence = require('run-sequence')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var standard = require('gulp-standard')
var uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()

// DEFINE PATHS
// ----------------------------------------------------------------------------
var basePath = {
  src: './_src',
  dist: './app',
  tmp: './.tmp'
}
var main = 'main'

var assetsPath = {
  stylesSrc: basePath.src + '/scss',
  stylesTemp: basePath.tmp + '/css',
  stylesDist: basePath.dist + '/css',

  htmlSrc: basePath.src + '/',
  htmlDist: basePath.dist + '/',

  imgSrc: basePath.src + '/img',
  imgDist: basePath.dist + '/img',

  fontsSrc: basePath.src + '/fonts',
  fontsDist: basePath.dist + '/fonts',

  scriptsSrc: basePath.src + '/js',
  scriptsTemp: basePath.tmp + '/js',
  scriptsDist: basePath.dist + '/js'
}

// ERROR HANDLER
// ----------------------------------------------------------------------------

var onError = function (err) {
  beep([200, 200])
  console.log(
    '\n\n******************************************\n'.bold.red +
    '************** '.bold.red +
    ' (╯°□°)╯'.bold.yellow + ' ^ '.bold.red + 'ɹoɹɹǝ '.bold.cyan +
    // ' ┌∩┐(Ò_Ó)┌∩┐ '.bold.yellow +
    '**************'.bold.red +
    '\n******************************************\n\n'.bold.red +
    String(err) +
    '\n\n******************************************\n\n'.bold.red)
  this.emit('end')
}

// STYLES
// ----------------------------------------------------------------------------

gulp.task('scss', function () {
  return gulp.src([assetsPath.stylesSrc + '/' + main + '.scss'])
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(assetsPath.stylesTemp))
})
gulp.task('css', ['scss'], function () {
  var styles = []
  styles.push(assetsPath.stylesSrc + '/**/*.css')
  styles.push(assetsPath.stylesTemp + '/**/*.css')
  return gulp.src(styles)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(cssnano({zindex: false}))
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(assetsPath.stylesDist))
})

// SCRIPTS
// ----------------------------------------------------------------------------

gulp.task('js-lint', function () {
  var scripts = []
  scripts.push(assetsPath.scriptsSrc + '/**/.js')
  return gulp.src(scripts)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})

gulp.task('js-babel', function () {
  var scripts = []
  scripts.push(assetsPath.scriptsSrc + '/*.js')
  return gulp.src(scripts)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(babel({presets: ['es2015'] }))
    .pipe(gulp.dest(assetsPath.scriptsTemp))
})

gulp.task('js', ['js-lint', 'js-babel'], function () {
  return gulp.src([assetsPath.scriptsSrc + '/vendor/*.js', assetsPath.scriptsTemp + '/*.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(assetsPath.scriptsDist))
    .pipe(uglify({
      compress: {
        drop_console: false
      }
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(assetsPath.scriptsDist))
})

// HTML
// ----------------------------------------------------------------------------

gulp.task('html', function () {
  return gulp.src(assetsPath.htmlSrc + '/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(assetsPath.htmlDist))
})

// FONTS
// ----------------------------------------------------------------------------

gulp.task('fonts', function () {
  return gulp.src(assetsPath.fontsSrc + '/**/*.*')
    .pipe(gulp.dest(assetsPath.fontsDist))
})

// IMAGES
// ----------------------------------------------------------------------------

gulp.task('images', function () {
  return gulp.src([
    assetsPath.imgSrc + '/**/*.+(png|jpg|svg|gif|ico)'
  ])
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(assetsPath.imgDist))
})

// WATCH FOR CHANGES
// ----------------------------------------------------------------------------
gulp.task('serve', ['watch'], function () {
  browserSync.init({
    server: basePath.dist,
    port: 8888,
    files: [assetsPath.stylesDist + '/*.css',assetsPath.scriptsDist + '/*.js',assetsPath.htmlDist + '/*.html']
  })
})

gulp.task('watch', ['build'], function () {
  gulp.watch(assetsPath.stylesSrc + '/**/*.scss', ['css'])
  gulp.watch(assetsPath.scriptsSrc + '/**/*.js', ['js'])
  gulp.watch(assetsPath.htmlSrc + '/**/*.html', ['html'])
  gulp.watch(assetsPath.imgSrc + '/*.+(png|jpg|svg|gif)', ['images'])
})

// BUILD
// ----------------------------------------------------------------------------
gulp.task('build', function (callback) {
  runSequence(
    [
      'images',
      'js',
      'css',
      'html',
      'fonts'
    ],
    callback)
})

gulp.task('default', [
  'build'
])
