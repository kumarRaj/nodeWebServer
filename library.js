var lib = {};
lib.sum2 = function (numbers) {
	return +numbers.first + +numbers.second;
}
lib.accumulate = function(queryString,sum){
	return +queryString.number + +sum;
}
exports.lib = lib;