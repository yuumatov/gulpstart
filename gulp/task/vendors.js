export const vendorsCss = () => {
    return app.gulp.src(app.path.src.vendorsCss)
        .pipe(app.gulp.dest(app.path.build.vendorsCss))
}

export const vendorsJs = () => {
    return app.gulp.src(app.path.src.vendorsJs)
        .pipe(app.gulp.dest(app.path.build.vendorsJs))
}