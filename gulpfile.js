const
gulp = require("gulp"),
concatCss = require("gulp-concat-css"),
notify = require("gulp-notify"),
cleanCss = require("gulp-clean-css"),
runSequence = require('run-sequence'),
rename = require("gulp-rename");

gulp.task("default",(callback)=>{
    runSequence(
        "concat",
         "minicss",
            callback
     );
    notify("Default exito");
});

gulp.task('concat', ()=> {
  return gulp.src([
      "node_modules/purecss/build/base.css",
      "node_modules/purecss/build/base-context.css",
      "node_modules/purecss/build/buttons.css",
      "node_modules/purecss/build/buttons-core.css",
      "node_modules/purecss/build/forms.css",
      "node_modules/purecss/build/forms-nr.css",
      "node_modules/purecss/build/grids.css",
      "node_modules/purecss/build/grids-core.css",
      "node_modules/purecss/build/grids-responsive.css",
      "node_modules/purecss/build/grids-responsive-old-ie.css",
      "node_modules/purecss/build/grids-units.css",
      "node_modules/purecss/build/menus.css",
      "node_modules/purecss/build/menus-core.css",
      "node_modules/purecss/build/menus-dropdown.css",
      "node_modules/purecss/build/menus-horizontal.css",
      "node_modules/purecss/build/menus-scrollable.css",
      "node_modules/purecss/build/menus-skin.css",
      "node_modules/purecss/build/pure.css",
      "node_modules/purecss/build/pure-nr.css",
      "node_modules/purecss/build/tables.css",
    ])
    .pipe(concatCss("onefile.css"))
    .pipe(gulp.dest("purecss-onefile"))
    .pipe(notify("Concat exito"));
});

gulp.task('minicss', ()=> {
  return gulp.src("purecss-onefile/onefile.css")
    .pipe(cleanCss({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('purecss-onefile'))
    .pipe(notify("minificacion con exito"));
});