module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //grunt task configuration will go here  
        concat: {
            js: { //target
                src: ['./app/app.module.js', './app/*.js', './app/**/*.js'],
                dest: './script/app.js'
            }
        },
        uglify: {
            js: { //target
                src: ['./script/app.js'],
                dest: './script/app.min.js'
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //register grunt default task
    grunt.registerTask('default', ['concat', 'uglify']);
}