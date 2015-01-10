var find = require('all-requires');
var pluck = require('object.pluck');
var omit = require('object.omit');
var async = require('async');
var path = require('path');
var npm = require('npm');
var fs = require('fs');
var noop = function() {};

var nodeModulePath = function(dir, filename) {
	return path.join(dir, '/node_modules/', filename);
};

var installRequiredDependencies = function(dir, opt) {
	opt = opt || {};

	var install = function(requires) {
		npm.load({ loaded: false }, function() {
			Object.keys(omit(opt, 'reinstall')).forEach(function(o) {
				npm.config.set(o, opt[o]);
			});
			npm.commands.install(dir, requires, noop);
		});
	};
 
	find(dir, function(err, requires) {
		if (opt.reinstall) {
			return install(requires);
		}

		async.filter(requires, function(module, next) {
			fs.exists(nodeModulePath(dir, module), function(exists) {
				next(!exists ? module : null);
			});
		}, function(missing) {
			if (missing.length) {
				install(missing);
			}
		});
	});
};

module.exports = installRequiredDependencies;
