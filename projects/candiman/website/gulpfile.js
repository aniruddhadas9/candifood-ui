// Path to the schematics output directory if the build package has schematics.
// import {join} from "path";
const gulp = require('gulp');
var path_1 = require("path");
var child_process_1 = require("child_process");
var chalk_1 = require("chalk");

function tsCompile(binary, flags) {
  return new Promise(function (resolve, reject) {
    var binaryPath = path_1.resolve("./node_modules/.bin/" + binary);
    var childProcess = child_process_1.spawn(binaryPath, flags, { shell: true });
    // Pipe stdout and stderr from the child process.
    childProcess.stdout.on('data', function (data) { return console.log("" + data); });
    childProcess.stderr.on('data', function (data) { return console.error(chalk_1.red("" + data)); });
    childProcess.on('exit', function (exitCode) {
      exitCode === 0 ? resolve() : reject(binary + " compilation failure");
    });
  });
}

const buildPackage = {
  sourceDir: './',
  outputDir: 'dist/candiman/website'
};

const path = require('path');
const schematicsDir = path.join(buildPackage.sourceDir, 'schematics');

// Pattern matching schematics files to be copied into the output directory.
const schematicsGlobs = [
  path.join(schematicsDir, '**/+(data|files)/**/*'),
  path.join(schematicsDir, '**/+(schema|collection|migration).json'),
];


gulp.task(`assets:schematics-ts`, () => {
  return tsCompile('tsc', ['-p', path.join(schematicsDir, 'tsconfig.schematics.json')]);
});

gulp.task(`assets:schematics`, () => {
  return gulp.src(schematicsGlobs).pipe(gulp.dest(path.join(buildPackage.outputDir, 'schematics')));
});
