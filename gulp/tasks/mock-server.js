'use strict';

import config from '../config';
import gulp   from 'gulp';
import * as child from 'child_process';

gulp.task('mock-server', function(cb) {
 child.exec('json-server --watch db.json');
 
});
