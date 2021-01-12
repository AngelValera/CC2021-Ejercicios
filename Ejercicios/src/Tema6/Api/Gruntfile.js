module.exports = function (grunt) {
  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          quiet: false,
          ui: "bdd",
        },
        src: ["test/**/*.js"],
      },
    },
    run: {
      start: {
        cmd: "pm2",
        args: ["start", "./src/index.js", "--name", "animals", "-i", "2"],
      },
      stop: {
        cmd: "pm2",
        args: ["stop", "animals"],
      },
    }    
  });

  // Carga los plugins de grunt
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-run");
  // Tareas
  grunt.registerTask("test", ["mochaTest"]);  
  grunt.registerTask("start", ["run:start"]);
  grunt.registerTask("stop", ["run:stop"]);
};