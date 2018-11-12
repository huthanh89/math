//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const _             = require ('lodash');
const gulp          = require('gulp');
const nodemon       = require('gulp-nodemon');
const webpack       = require('webpack-stream');
const livereload    = require('gulp-livereload');
const webpackConfig = require('./webpack.config');
const cleanCSS      = require('gulp-clean-css');
const rename        = require('gulp-rename');
const pug           = require('gulp-pug');
const less          = require('gulp-less');
const htmlmin       = require('gulp-htmlmin');
const imagemin      = require('gulp-imagemin');
const open          = require('gulp-open');
const concat        = require('gulp-concat');
const merge         = require('merge-stream');
const order         = require("gulp-order");
const eslint        = require('gulp-eslint');
const run           = require('gulp-run-command');

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

// Lint JavaScript files.

gulp.task('lint-js', () => {
    return gulp.src('./src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('copy-webfonts', () => {
    return gulp.src('src/webfonts/*')
        .pipe(gulp.dest('dist/webfonts'));
});

gulp.task('minify-js', () => {

    let config = _.assignIn(webpackConfig, {
        mode: 'production'
    });

    return gulp.src(__filename)
        .pipe(webpack({
            config: config
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', () => {
    return  gulp.src('dist/index.html')
        .pipe(htmlmin({ 
            collapseWhitespace: true 
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-img', () => {
    return  gulp.src('src/asset/image/*')
    .pipe(imagemin([
        imagemin.gifsicle({
            interlaced: true
        }),
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 7
        }),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/asset'));
});

gulp.task('compile-js', (cb) => {

    let config = _.assignIn(webpackConfig, {
        mode: 'development'
    });

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src(__filename)
        .pipe(webpack({
            config: config
        }))
        .pipe(gulp.dest('dist/js')).on('end', reload);
});

gulp.task('compile-css', (cb) => {

    let cssStream = gulp.src('src/css/*.css')
        .pipe(concat("vendors.css"));

    let reload = function(){
        livereload.reload();
        cb();
    };

    lessStream = gulp.src('src/css/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'));

    // It is important to order the concat so our style will be at the moment 
    // and will take into effect.

    merge(cssStream, lessStream)
        .pipe(order([
            "vendors.css",
            "style.css",
        ]))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css')).on('end', reload);

});

gulp.task('compile-html', (cb) => {
    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src('src/html/**/*.pug')
    .pipe(pug({
        doctype: 'html',
        pretty: true
    }))
    .pipe(gulp.dest('dist')).on('end', reload);
});

gulp.task('start-server', () => {

    nodemon({
        script: 'server.js',
        ext:    'js html',
        watch: ['server.js', 'server/'],
        env:  { 'NODE_ENV': 'development' }
    });

    // Start listening with livereload.

    livereload({ start: true });
});

// Open browser, using default browser.

gulp.task('browser', () => {
    return gulp.src(__filename)
    .pipe(open({
        uri: 'http://localhost:3002'
    }));
});

// Run Jest to test JavaScript files.

gulp.task('test', run.default('npm test'))

//-----------------------------------------------------------------------------//
// Main tasks
//-----------------------------------------------------------------------------//

gulp.task('asset', [
    'minify-img',
    'copy-webfonts'
]);

// Production build.
// Minify files and move asset files to /dist folder.

gulp.task('production', [
    'minify-js', 
    'minify-css',
    'minify-html',
    'minify-img'
]);

// Default task. Run command: "gulp" to start development environment.

gulp.task('default', [
    'lint-js',
    'compile-js', 
    'compile-css', 
    'compile-html', 
    'start-server',
    'browser'
]);

//-----------------------------------------------------------------------------//
// Watch changes
//-----------------------------------------------------------------------------//

gulp.watch('src/js/**',   ['lint-js', 'compile-js']);
gulp.watch('src/css/**',  ['compile-css']);
gulp.watch('src/html/**', ['compile-html']);

//-----------------------------------------------------------------------------//