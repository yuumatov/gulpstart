export const other = () => {
    return app.gulp.src(app.path.src.other)
        .pipe(app.gulp.dest(app.path.buildFolder))
}