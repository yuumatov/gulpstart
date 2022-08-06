// Импортирование Gulp
import gulp from 'gulp';
// Импортирование путей
import { path } from './gulp/config/path.js';
// Импортирование общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Указание переменных
global.app = {
  isBuild: process.argv.includes('--production'),
  isDev: !process.argv.includes('--production'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

// Импортирование задач
import { reset } from './gulp/task/reset.js';
import { html } from './gulp/task/html.js';
import { scss } from './gulp/task/scss.js';
import { js } from './gulp/task/js.js';
import { images } from './gulp/task/images.js';
import { sprite } from './gulp/task/sprite.js';
import { fonts } from './gulp/task/fonts.js';
import { favicon } from './gulp/task/favicons.js';
import { vendorsCss, vendorsJs } from './gulp/task/vendors.js';
import { other } from './gulp/task/other.js';
import { server } from './gulp/task/server.js';
import { zip } from './gulp/task/zip.js';
import { ftp } from './gulp/task/ftp.js';

// Задачи копирования сторонних мтилей и скриптов
const vendors = gulp.parallel(vendorsCss, vendorsJs);

// Слежка за изменениями файлов
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, images);
  gulp.watch(path.watch.sprite, sprite);
  gulp.watch(path.watch.vendors, vendors);
}

// Главная задача
const mainTask = gulp.parallel(html, scss, js, images, sprite, fonts, favicon, vendors, other);

// Задача сборки проекта в режиме разработки
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

// Задача сборки проекта в режиме публикации
const buld = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

// Задача создания ZIP архива проекта
const deployZIP = gulp.series(reset, mainTask, zip);

// Задача загрузки проекта на хостинг по FTP
const deployFTP = gulp.series(reset, mainTask, ftp);

// Регистрация задач
gulp.task('default', dev);
gulp.task('build', buld);
gulp.task('zip', deployZIP);
gulp.task('ftp', deployFTP);
