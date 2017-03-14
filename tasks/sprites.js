/**
 * 精灵处理
 * @type {[type]}
 */
'use strict'

var PROJECT_CONFIG = require('../yworkflow').getConfig(); //载入项目基础配置
var PROJECT_ABS_PATH = PROJECT_CONFIG.absPath;
var TASK_CONFIG = PROJECT_CONFIG.tasks.sprites;
var path = require('path');

var src = path.join(PROJECT_ABS_PATH, TASK_CONFIG.src);
var dest = path.join(PROJECT_ABS_PATH, TASK_CONFIG.dest);

var gulp = require('gulp');
var path = require('path');
var chalk = require('chalk');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var changedDeps = require('./plugins/gulp-changed-deps/');


// 将处理文件全部拷贝到输出目录
gulp.task('sprites', function() {
	return gulp.src(path.join(src, '**/*.{' + TASK_CONFIG.extensions.join(',') + '}'))
});


