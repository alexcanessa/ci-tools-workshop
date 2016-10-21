'use strict';

module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        sasslint: 'grunt-sass-lint'
    });

    grunt.initConfig({
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },
        sasslint: {
            target: [
                './src/**/*.scss'
            ],
            options: {
                configFile: '.sass-lint.yml'
            }
        },
        mocha_istanbul: {
            coverage: {
                src: ['test/**/*.test.js'],
                options: {
                    mochaOptions: ['--compilers', 'js:babel-register']
                }
            }
        }
    });

    grunt.registerTask('scripts', ['babel']);
    grunt.registerTask('test', ['sasslint', 'eslint', 'mocha_istanbul']);
    grunt.registerTask('default', ['test']);
};
