module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( 'package.json' ),

		concat: {

		},

		watch: {
			main: {
				files: 'project/src/**/*',
				tasks: 'copy:toBuild'
			},
			dir2json: {
				files: 'project/data/**/*',
				tasks: 'dir2json'
			},
			sass: {
				files: 'project/styles/**/*',
				tasks: 'sass'
			}
		},

		clean: [ 'build/' ],

		sass: {
			files: {
				src: 'project/styles/**/*.scss',
				dest: 'build/min.css'
			},
			options: {
				debugInfo: true
			}
		},

		dir2json: {
			data: {
				root: 'project/data/',
				dest: 'project/src/js/data.js',
				options: { amd: true }
			}
		},

		copy: {
			toBuild: {
				files: [{
					expand: true,
					cwd: 'project/src',
					src: [ '**/*' ],
					dest: 'build/'
				}]
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'project/src/js',
					mainConfigFile: 'project/src/js/main.js',
					out: 'build/js/main.js'
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-requirejs' );

	grunt.loadNpmTasks( 'grunt-dir2json' );

	grunt.registerTask( 'default', [ 'clean', 'dir2json', 'copy', 'sass', 'watch' ] );

};