'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'app/*.html',
                    'app/styles/scss/{,*/}*.scss',
                    'app/js/{,*/}*.js'
                ]
            },
            compass: {
                files: ['app/styles/scss/{,*/}*.scss'],
                tasks: ['compass:dev']
            }
        },

        connect: {
            options: {
                port: 9001,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'gfw-ekuatorial.local'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, 'app'),
                            lrSnippet
                        ];
                    }
                }
            }
        },

        open: {
            server: {
                path: 'http://gfw-ekuatorial.local:<%= connect.options.port %>'
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: ['app/styles/scss'],
                    cssDir: ['app/styles/css'],
                    environment: 'development'
                }
            }
        }
    });

    grunt.registerTask('server', [
        'compass:dev',
        'connect:livereload',
        // 'open',
        'watch'
    ]);
};