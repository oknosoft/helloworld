/**
 * gulpfile.js for order-online
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

var gulp = require('gulp'),
	base64 = require('gulp-base64'),
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	resources = require('./src/utils/resource-concat.js'),
	prebuild = require('./src/utils/prebuild.js'),
	umd = require('gulp-umd'),
	package_data = JSON.parse(require('fs').readFileSync('package.json', 'utf8'));  // данные файла package.json

module.exports = gulp;

// Основная сборка проекта
gulp.task('main', function(){

	return gulp.src([
		'./tmp/prebuild.js',
		'./tmp/injected.js',
		'./src/modifiers/**/*.js',
		'./src/main.js',
		'./src/wdg_*.js',
		'./src/view_*.js'
	])
		.pipe(concat('orders.js'))
		.pipe(umd({
			exports: function(file) {
				return 'undefined';
			}
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('orders.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

// Сборка метаданных
gulp.task('prebuild', function(){

	return gulp.src(['./src/utils/prebuild.js'])
		.pipe(prebuild(package_data))
		.pipe(gulp.dest('./tmp'));

});

// Сборка ресурсов
gulp.task('injected', function(){

	return gulp.src([
		'./src/templates/*.html',
		'./src/templates/xml/toolbar_buyers_order_obj.xml',
		'./src/templates/xml/tree_*.xml'
	])
		.pipe(resources('injected.js', function (data) {
			return new Buffer('$p.injected_data._mixin(' + JSON.stringify(data) + ');');
		}))
		.pipe(gulp.dest('./tmp'));
});

// Сборка css
gulp.task('css-base64', function () {

	return gulp.src([
			'./src/templates/*.css'
		])
		.pipe(base64({
			maxImageSize: 32*1024 // bytes
		}))
		.pipe(concat('orders.css'))
		.pipe(csso())
		.pipe(gulp.dest('./dist'));
});


gulp.task('full', ['injected', 'css-base64', 'prebuild', 'main'], function(){});