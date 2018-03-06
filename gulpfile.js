'use strict';

let gulp = require('gulp');
let ts = require('gulp-typescript');
let nodemon = require("gulp-nodemon");
const serverTSPath = 'server/';
const clientTSPath = 'client/';
let serverTsProject = ts.createProject(serverTSPath+'tsconfig.json');
let clientTsProject = ts.createProject(clientTSPath+'tsconfig.json');

// This task can be run alone with "gulp serverscripts"
gulp.task('clientscripts', () => {
  return clientTsProject.src()
    .pipe(clientTsProject())
    .pipe(gulp.dest('client/app'));
})


gulp.task('serverscripts', () => {
  return serverTsProject.src()
    .pipe(serverTsProject())
    .pipe(gulp.dest('server/app'));
});

gulp.task('watch', ['serverscripts'], function () {
  var stream = nodemon({
      script: serverTSPath+"app/server.js",
      watch: serverTSPath+"src/**/*",
      tasks: ["serverscripts"],
      ext: 'ts json'
  });
  return stream;
})
