var gulp = require("gulp"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concatCss = require("gulp-concat-css"),
  cssmin = require("gulp-cssmin"),
  rename = require("gulp-rename"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat");

gulp.task("sass", function() {
  return gulp
    .src("app/assets/sass/**/*.scss")
    .pipe(sass())
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest("app/assets/css/"))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/assets/css/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("babel", () =>
  gulp
    .src("app/assets/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/assets/babel/"))
);

gulp.task("watch", function() {
  gulp.watch("app/assets/sass/**/*.scss", gulp.series("sass")); // Наблюдение за sass файлами
  gulp.watch("app/assets/js/*.js", gulp.series("babel")); // Наблюдение за jc файлами
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/assets/babel/all.js").on("change", browserSync.reload);
  gulp.watch("app/assets/css/**/*.css").on("change", browserSync.stream); // Обновляем CSS на странице при изменении
  gulp.watch("app/assets/babel/all.js").on("change", browserSync.stream); // Обновляем CSS на странице при изменении

  // Наблюдение за другими типами файлов
});

gulp.task("start", gulp.parallel("watch", "babel", "sass", "browser-sync"));
