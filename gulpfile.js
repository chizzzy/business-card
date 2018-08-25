var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //Преобразуем Sass в Css
		.pipe(gulp.dest('css')) // Выгружаем результат в папку css
});

gulp.task('watch', function(){
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
});

gulp.task('default', function(){
	gulp.start("watch");
});