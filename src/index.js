function debounce(callback, interval) {
	let timeout;
	return function (...args) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			return callback.call(this, ...args);
		}, interval);
	};
}

function giveHi() {
	console.log("hi");
}
const giveHiSometimes = debounce(giveHi, 3000);

giveHiSometimes(); // -> 'hi'
setTimeout(function () {
	giveHiSometimes();
}, 2000); // -> undefined
setTimeout(function () {
	giveHiSometimes();
}, 4000); // -> undefined
setTimeout(function () {
	giveHiSometimes();
}, 8000); // -> 'hi'
