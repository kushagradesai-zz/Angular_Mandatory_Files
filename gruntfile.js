module.exports = function(grunt) {
 
  
    grunt.initConfig({
 
       
        pkg: grunt.file.readJSON('package.json'),
 
       
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
       
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.srcPath %>scripts/fileone.js', '<%= meta.srcPath %>scripts/filetwo.js'],
                dest: '<%= meta.deployPath %>scripts/app.js'
            }
        }
    });
 
   
    grunt.loadNpmTasks('grunt-contrib-concat');
 
 
    grunt.registerTask('default', ['concat']);
 
};