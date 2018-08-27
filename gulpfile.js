var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

gulp.task('testAutoFx', function () {
    console.log(789);
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream())
});

gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.stream())
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true,
        port: 8010,
        middleware: function (connect, opt) {
            return [
                proxy('/public', {
                    target: 'http://www.taihetourongbao.com',
                    changeOrigin:true
                }),
                proxy('/product', {
                    target: 'http://172.16.1.60:8080',
                    changeOrigin:true
                }),
                proxy('/bpauth', {
                    target: 'http://192.168.24.77:8080',
                    changeOrigin:true
                })
            ]
        }
    });
});

    gulp.task('serve', ['testAutoFx'], function() {
        browserSync.init({
            server: "./"
        });

        // gulp.watch("css/*.css", ['testAutoFx']);
        // gulp.watch("js/*.js", ['js'])
        gulp.watch("html/*.html").on('change', browserSync.reload);
        gulp.watch("css/*.css").on('change', browserSync.reload);
        gulp.watch("js/*.js").on('change', browserSync.reload);
    });

    gulp.task('default',['connect']);
