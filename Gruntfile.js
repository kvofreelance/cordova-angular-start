module.exports = function (grunt) {
	var filesJS = [
		"bower_components/angular/angular.min.js",
		"bower_components/angular-ui-router/release/angular-ui-router.min.js",
		"dev/app/**/*.js",
		"dev/app/*.js",
		"release/templates.js"
	];

	var filesCSS = [
		"dev/css/custom.css"
	];

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: filesJS,
				dest: "release/app.js"
			},
			css: {
				src: filesCSS,
				dest: "release/app.css"
			}
		},
		ngtemplates: {
  			"metronic": {
   				src: [
   					'dev/partials/**.html', 
   					'dev/partials/data/**.html'
   				],
				dest: 'release/templates.js'
  			}
		},
		copy: {
			all: {
				files: [
					{expand: true, cwd: "metronic/assets/admin/layout/css/themes/", src: ['**'], dest: 'release/css/themes'},
					{expand: true, cwd: "metronic/assets/admin/layout/img/", src: ['sidebar_toggler_icon_default.png'], dest: 'release/img'},
					{expand: true, cwd: "metronic/assets/admin/layout/img/", src: ['sidebar_inline_toggler_icon_default.jpg'], dest: 'release/img'},
					{expand: true, cwd: "fonts/", src: ['**'], dest: 'release/fonts'},
					{expand: true, cwd: "dev/", src: ['googleapisfonts.css'], dest: 'release'}
				]
			},
			android: {
				files: [
					{expand: true, cwd: "fonts/", src: ['**'], dest: '../platforms/android/assets/www/fonts'},
					{expand: true, cwd: "dev/partials", src: ['**'], dest: '../platforms/android/assets/www/dev/partials'},
					{expand: true, cwd: "release/", src: ['**'], dest: '../platforms/android/assets/www/release/'},
					{expand: true, cwd: "", src: ['index.html'], dest: '../platforms/android/assets/www/'}
				]
			}
		}
	});



	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["ngtemplates", "concat", "copy:all"]);
	// Release task
	grunt.registerTask("release", ["default", "uglify:release"]);

	grunt.registerTask("android", ["default", "copy:android"]);
};
