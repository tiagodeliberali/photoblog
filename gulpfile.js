var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concat', function() {
  return gulp.src(['./app/app.module.js', 'app/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./script/'));
});

gulp.task('compress', function() {
  return gulp.src('./script/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./script'));
});

gulp.task('uncss', function() {
  return gulp.src('./style/*.css')
        .pipe(concat('./result/main.css'))
        //.pipe(uncss({
        //    html: ['index.html', 'app/**/*.html']
        //}))
        .pipe(gulp.dest('.'));
});