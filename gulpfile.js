const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const src_path = 'src/less/*.less';

gulp.task('less_constructor', function() {
    return gulp.src(src_path)
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('docs'))
})

gulp.task('watch', function(){
    return gulp.watch(src_path, gulp.series('less_constructor'));
})

gulp.task('default', gulp.series('less_constructor', 'watch'));