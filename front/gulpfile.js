const gulp        = require('gulp');
const amdOptimize = require('amd-optimize');
const sass        = require('gulp-sass');
const babel       = require('gulp-babel');
const Server      = require('karma').Server;
const sourcemaps  = require('gulp-sourcemaps');
const image       = require('gulp-image');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const inject      = require('gulp-inject-string');
const del         = require('del');
const zip         = require('gulp-zip');

const module_root_dir = '../';
const module_dest_dir = '../';

const src_dir   = './src';
const test_dir  = './test';
const build_dir = './build';

const KARMA_PORT = 9876;

const dirs = {
  css_src: src_dir + '/styles/**/*.scss',
  js_src: src_dir + '/js/**/*.js',
  js_src_exclude: [ '!./node_moules/**/*.js' ],
  test_src: test_dir + '/**/*.js',
  images_src: src_dir + '/images/**/*',
  css_dest: build_dir + '/styles',
  js_dest: build_dir + '/js/',
  images_dest: build_dir + '/images/',
};

gulp.task('clean', () =>
  del([build_dir])
);

// Babel stuff
gulp.task('babel:dev', () =>
  gulp.src(dirs.js_src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(amdOptimize("app", {
      name: "app",
      configFile: "./src/js/app.js",
      baseUrl: './src/js',
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.js_dest))
);

gulp.task('babel:prod', () =>
  gulp.src(dirs.js_src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(amdOptimize("app", {
      name: "app",
      configFile: "./src/js/app.js",
      baseUrl: './src/js'
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.js_dest))
);
gulp.task('babel:watch', () =>
    gulp.watch([dirs.js_src, dirs.test_src], ['babel:dev'])//, 'test'])
);

// Test
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// Sass/scss stuff
gulp.task('sass:dev', () =>
  gulp.src(dirs.css_src)
    .pipe(
      sass({outputStyle: 'expanded', sourceComments: true})
      .on('error', sass.logError))
    .pipe(gulp.dest(dirs.css_dest))
);
gulp.task('sass:prod', () =>
  gulp.src(dirs.css_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(inject.prepend('/* Built on ' + Date() + ' */ \n'))
    .pipe(gulp.dest(dirs.css_dest))
);
gulp.task('sass:watch', () =>
  gulp.watch(dirs.css_src, ['sass:dev'])
);

// Images
gulp.task('images:dev', () =>
  gulp.src(dirs.images_src)
    .pipe(image({
      pngquant: false,
      optipng: false,
      zopflipng: false,
      jpegRecompress: false,
      mozjpeg: false,
      guetzli: false,
      gifsicle: false,
      svgo: false,
      concurrent: 10,
      quiet: false
    }))
    .pipe(gulp.dest(dirs.images_dest))
);
gulp.task('images:prod', () =>
  gulp.src(dirs.images_src)
    .pipe(image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: true,
      mozjpeg: true,
      guetzli: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: false
    }))
    .pipe(gulp.dest(dirs.images_dest))
);
gulp.task('images:watch', () =>
  gulp.watch(dirs.images_src, ['images:dev'])
);

// Wordpress module release
gulp.task('zip', [/*'prod'*/], function () {
  return gulp.src([
    module_root_dir + 'wpticketack.php',
    module_root_dir + '/{app,app/**/*}',
    module_root_dir + '/{vendor,vendor/**/*}',
    module_root_dir + '/front',
    module_root_dir + '/front/{build,build/**/*}'
  ])
    .pipe(zip('wpticketack.zip'))
    .pipe(gulp.dest(module_dest_dir));
});

gulp.task('default', ['sass:watch', 'images:watch', 'babel:watch']);
gulp.task('dev', ['clean', 'sass:dev', 'babel:dev', 'images:dev']);
gulp.task('prod', ['clean', 'sass:prod', 'babel:prod', 'images:prod']);
gulp.task('wp:release', ['zip']);
