/// <binding />
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat', function() {
    return gulp.src(['./wwwroot/app/app.module.js', 'wwwroot/app/**/*.js', './wwwroot/script/primary_load/ngGallery.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./wwwroot/script/'));
});

gulp.task('concat-debug', function() {
    return gulp.src(['./wwwroot/app/app.module.js', 'wwwroot/app/**/*.js', './wwwroot/script/primary_load/ngGallery.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./wwwroot/script/'));
});

gulp.task('css', function() {
    return gulp.src('./wwwroot/style/third_party/*.css')
        .pipe(concat('./wwwroot/style/main.css'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('.'));
});