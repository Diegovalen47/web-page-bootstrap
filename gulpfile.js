import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass';

gulp.task('imagemin', () => {
   return gulp.src('images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images/'));
});

gulp.task('sass', () => {
   return gulp.src('./css/.css')
   .pipe(sass().on('error', sas.logError))
   .pipe(gulp.dest('dist/css/'))
})