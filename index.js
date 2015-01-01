var find = require('all-requires');
var npm = require('npm');

var installRequiredDependencies = function(path, opt) {
	opt = opt || {};

	find(path, function(err, requires) {
		npm.load({ loaded: false }, function() {
			Object.keys(opt).forEach(function(o) {
				npm.config.set(o, opt[o]);
			});
			npm.commands.install(path, requires);
		});
	});
};

module.exports = installRequiredDependencies;
