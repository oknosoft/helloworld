/**
 * gulpfile.js for metadata-based projects
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 */

var gulp = require('gulp'),
	base64 = require('gulp-base64'),
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	//inject = require('gulp-inject-string'),
	resources = require('./src/utils/resource-concat.js'),
	prebuild = require('./src/utils/prebuild.js'),
	umd = require('gulp-umd'),
	replace = require('gulp-replace'),
	package_data = JSON.parse(require('fs').readFileSync('./package.json', 'utf8'));  // данные файла package.json

module.exports = gulp;

// Основная сборка проекта
function main(){

	return gulp.src([
		'./tmp/prebuild.js',
		'./tmp/injected.js',
		'./src/modifiers/**/*.js',
		'./src/i18n.ru.js',
		'./src/main.js',
		'./src/wdg_*.js',
		'./src/view_*.js'
	])
		.pipe(concat('app.js'))
		.pipe(umd({
			exports: function(file) {
				return 'undefined';
			}
		}))
		.pipe(replace(/PACKAGE_VERSION/g, package_data.version))
		.pipe(replace(/PACKAGE_PREFIX/g, package_data.config.prefix))
		.pipe(replace(/PACKAGE_ZONE_DEMO/g, package_data.config.zone_demo || 0))
		.pipe(replace(/PACKAGE_ZONE/g, package_data.config.zone || 0))
		.pipe(replace(/PACKAGE_COUCHDB/g, package_data.config.couchdb))
		.pipe(replace(/PACKAGE_REST_1C/g, package_data.config.rest_1c))
		.pipe(replace(/PACKAGE_ATT_MAX_SIZE/g, package_data.config.attachment_max_size || 0))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
}
gulp.task('main', main);

// Сборка метаданных
gulp.task('prebuild', function(){

	return gulp.src(['./src/utils/default_settings.js'])
		.pipe(prebuild(package_data))
		.pipe(gulp.dest('./tmp'));

});

// Сборка ресурсов
gulp.task('injected', function(){

	return gulp.src([
		'./src/templates/html/*.html',
		'./src/templates/xml/*.xml'
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
		.pipe(concat('app.css'))
		.pipe(csso())
		.pipe(gulp.dest('./dist'));
});

// Пересборка всех частей
gulp.task('full', ['prebuild', 'injected', 'css-base64'], main);