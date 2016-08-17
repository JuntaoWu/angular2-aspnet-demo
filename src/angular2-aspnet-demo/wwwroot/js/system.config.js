
(function systemConfig(global) {

    // map tells the System loader where to look for things
    var map = {
        'rxjs': 'lib/npmlibs/rxjs',
        '@angular': 'lib/npmlibs/@angular',
        'moment': 'lib/npmlibs/moment/moment.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': { main: 'Rx', defaultExtension: 'js' },
        'app': { defaultExtension: 'js' },
        'lib': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
        '@angular/forms'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(window);