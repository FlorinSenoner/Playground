var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var uncss = require('gulp-uncss');

// ----- variables ----- add more!
var inputSass = './app/sass/**/*.sass';
var outputCSS = './app/css';
var optionsAutoprefixer = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
var optionsSass = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
var optionsSassdoc = {
    dest: './dist/sassdoc'
};

// ----- tasks -----
gulp.task('default', function (callback) {
    console.log('----- starting browserSync and watch -----');
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
})

gulp.task('sass', function () {
    return gulp
        .src(inputSass) // Find all `.sass` files from the `sass/` folder
        .pipe(sourcemaps.init()) //init sourcemaps
        .pipe(sass(optionsSass).on('error', sass.logError)) // Run Sass on those files
        .pipe(autoprefixer(optionsAutoprefixer)) //autoprefix css files
        .pipe(sourcemaps.write('.')) //write sourcemaps
        .pipe(gulp.dest(outputCSS)) // Write the resulting CSS in the output folder
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass_clean', function () {
    return gulp
        .src(inputSass) // Find all `.sass` files from the `sass/` folder
        .pipe(sourcemaps.init()) //init sourcemaps
        .pipe(sass(optionsSass).on('error', sass.logError)) // Run Sass on those files
        .pipe(autoprefixer(optionsAutoprefixer)) //autoprefix css files
        .pipe(uncss({ //remouve unused css code
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.')) //write sourcemaps
        .pipe(gulp.dest(outputCSS)) // Write the resulting CSS in the output folder
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        browser: "google chrome"
    })
})

gulp.task('watch', function() {
    gulp.watch(inputSass, ['sass']) // Watch the input folder for change, and run `sass` task when something happens
    .on('change', function(event) { // When there is a change, log a message in the console
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch('app/*.html', browserSync.reload)
    .on('change', function(event) { // When there is a change, log a message in the console
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch('app/js/**/*.js', browserSync.reload)
    .on('change', function(event) { // When there is a change, log a message in the console
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// ----- task to run at production -----
gulp.task('build', function (callback) {
    console.log('----- Building files -----');
    runSequence('clean:dist', //makes sure clean is run before all other tasks
        ['sass', 'useref', 'images', 'fonts', 'sassdoc'],
        callback
    )
})

gulp.task('sassdoc', function () {
  return gulp
    .src(inputSass)
    .pipe(sassdoc(optionsSassdoc));
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify())) // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.css', cssnano())) // Minifies only if it's a CSS file
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({ // Caching images that ran through imagemin
      interlaced: true // Setting interlaced to true
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function() {
    return del.sync('dist');
})