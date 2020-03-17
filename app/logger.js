//defining global function with improved console.log
module.exports = function(message) {
	console.log(new Date(Date.now()), " - ", message);
};
