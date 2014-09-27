var find = require('all-requires');
var npm = require('npm');

var installRequiredDependencies = function(path, opt) {
	opt = opt || {};

	find(path, function(err, requires) {
		npm.load({}, function() {
			npm.install(requires);
		});
	});
};

module.exports = installRequiredDependencies;
