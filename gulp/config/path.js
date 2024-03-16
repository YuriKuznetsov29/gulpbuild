import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const build = "./dist";
const src = "./src";

export const path = {
    build: {
        js: `${build}/js/`,
        css: `${build}/css/`,
        html: `${build}`,
        files: `${build}/files/`,
    },
    src: {
        js: `${src}/js/app.js`,
        scss: `${src}/scss/style.scss`,
        html: `${src}/*.pug`,
        files: `${src}/files/**/*.*`,
    },
    watch: {
        js: `${src}/js/**/*.js`,
        scss: `${src}/scss/**/*.scss`,
        html: `${src}/**/*.pug`,
        files: `${src}/files/**/*.*`,
    },
    clean: build,
    buildFolder: build,
    srcFolder: src,
    rootFolder: rootFolder,
    ftp: "",
};
