export const fonts = () => {
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`)
		.pipe(app.gulp.dest(app.path.build.fonts));
}