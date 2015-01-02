var find = require('all-requires');
var npm = require('npm');
var noop = function() {};

var installRequiredDependencies = function(path, opt) {
	opt = opt || {};

	find(path, function(err, requires) {
		npm.load({ loaded: false }, function() {
			Object.keys(opt).forEach(function(o) {
				npm.config.set(o, opt[o]);
			});
			npm.commands.install(path, requires, noop);
		});
	});
};

module.exports = installRequiredDependencies;
