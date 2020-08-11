const gulp = require('gulp')
//setup task
//区分多个任务的依据就是任务名称
//需要async await
gulp.task('first', async() =>{
  await gulp.src('./src/teststyle.css')
      .pipe(gulp.dest('./dist/css'))
})

//html mission
//1. compress
//2. extract common code
const htmlmin = require('gulp-htmlmin')
gulp.task('htmlmin', async() => {
  await gulp.src('./src/*.html')
      //压缩html中的代码
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'))
})