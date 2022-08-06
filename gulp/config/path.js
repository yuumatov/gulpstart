import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		img: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		favicon: `${buildFolder}/favicons/`,
		vendorsCss: `${buildFolder}/css/`,
		vendorsJs: `${buildFolder}/js/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/main.scss`,
		js: `${srcFolder}/js/main.js`,
		img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
		sprite: `${srcFolder}/img/sprite/*.svg`,
		favicon: `${srcFolder}/favicons/**/*.*`,
		vendorsCss: `${srcFolder}/vendors/css/*.css`,
		vendorsJs: `${srcFolder}/vendors/js/*.js`,
		other: [`${srcFolder}/favicon.ico`, `${srcFolder}/manifest.webmanifest`, `${srcFolder}/robots.txt`]
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		img: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,svg,gif}`, `!${srcFolder}/img/sprite/**/*.*`],
		sprite: `${srcFolder}/img/sprite/*.svg`,
		vendors: `${srcFolder}/vendors/**/*.{css,js}`,
	},
	clean: buildFolder,
	srcFolder: srcFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	ftp: `projects`
}