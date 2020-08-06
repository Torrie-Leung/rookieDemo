const gulp = require('gulp')
//setup task
gulp.task('first', async() =>{
  await gulp.src('./src/teststyle.css')
      .pipe(gulp.dest('./dist/css'))
})