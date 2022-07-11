const  {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require('gulp-sourcemaps')
const postcss    = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const paths = {
    scss: "src/scss/**/*.scss"
}

function css() {
    return src(paths.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write('.'))
            .pipe(dest('public/build/css'));

   
}


function watchArchivos() {
    watch( paths.scss, css );
    //watch( paths.js, javascript );
    //watch( paths.imagenes, imagenes );
    //watch( paths.imagenes, versionWebp );
}


exports.tarea = css;
exports.default = parallel(css, watchArchivos );