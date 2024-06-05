const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function sasstask(){
return src('scss/**/*.scss')
.pipe(sass())
.pipe(dest('css'))
}

function watchtask(){
watch('scss/**/*.scss',sasstask);
}
exports.default=series(sasstask,watchtask);