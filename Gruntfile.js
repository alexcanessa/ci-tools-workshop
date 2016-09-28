'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        }

    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('test', ['eslint']);
};
