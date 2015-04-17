module.exports = function(grunt) {
	grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['stylus'],
					compress: false
        },
        files: {
          'css/style.css': 'stylus/style.styl'
        }
      }
    },
		watch: {
      stylus: {
        files: ['stylus/**/*'],
        tasks: ['stylus:compile'],   // This needs to be "tasks" (not "task")
        options: { livereload: true }
      }
		},
    dataUri: {
      dist: {
        src: ['css/*.css'],
        dest: 'sample/css',
        options: {
          target: ['img/*.*'],
          baseDir: './'
        }
      }
    }
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['stylus', 'watch']);
};
