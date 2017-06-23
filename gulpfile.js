var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');


gulp.task('pug', function(){
  return gulp.src('app/dev/_pug/**/*.pug', ['pug'])
  .pipe(pug())
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function(){
  return gulp.src('app/dev/_sass/**/*.sass', ['sass'])
  .pipe(sass())
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('app/dist/css'));
});

gulp.task('js', function(){
  return gulp.src('app/dev/_js/**/*.js')
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('app/dist/js'));
});

gulp.task('server', function(){
  browserSync.init({
    server:{
      baseDir: './app/dist'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('app/dev/_sass/**/*.sass', ['sass']);
  gulp.watch('app/dev/_pug/**/*.pug', ['pug']);
  gulp.watch('app/dev/_js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'pug', 'sass', 'js', 'server']);
