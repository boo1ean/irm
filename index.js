var find = require('all-requires');
var npm = require('npm');

var installRequiredDependencies = function(path, opt) {
	opt = opt || {};

	find(path, function(err, requires) {
		npm.load({ loaded: false }, function() {
			npm.install(path, requires);
		});
	});
};

module.exports = installRequiredDependencies;
