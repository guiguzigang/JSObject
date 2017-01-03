var dispatcher = {
	join: function (before, after){
		return before + ':' + after
	},
	sum: function () {
		var args = Array.prototype.slice.call(arguments);
		return args.reduce(function (previousValue, currentValue, index, array) {
			return previousValue + currentValue;
		});
	}
};
var proxy = {
	relay: function (method) {
		var args;
		args = Array.prototype.splice.call(arguments, 1);
		return dispatcher[method].apply(dispatcher, args);
	}
};
// => bar:baz
console.log(proxy.relay('join', 'bar', 'baz'));
// => 28
console.log(proxy.relay('sum', 1, 2, 3, 4, 5));
