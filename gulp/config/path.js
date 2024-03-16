import * as nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve())

const build = "./dist"
const src = "./src"

export const path = {
    build: {
        html: `${build}`,
        files: `${build}/files/`,
    },
    src: {
        html: `${src}/*.html`,
        files: `${src}/files/**/*.*`,
    },
    watch: {
        html: `${src}/**/*.html`,
        files: `${src}/files/**/*.*`,
    },
    clean: build,
    buildFolder: build,
    srcFolder: src,
    rootFolder: rootFolder,
    ftp: "",
}
