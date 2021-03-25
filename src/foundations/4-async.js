/* CHALLENGE 1 */

function sayHowdy() {
	console.log("Howdy");
}

function testMe() {
	setTimeout(sayHowdy, 0);
	console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
	// ADD CODE HERE
	setTimeout(() => {
		console.log("Welcome");
	}, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
	// ADD CODE HERE
	console.log("Hello");
	setTimeout(() => {
		console.log("good bye");
	}, 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
	// ADD CODE HERE
	setInterval(() => {
		console.log("hi again");
	}, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
	// ADD CODE HERE
	let called = 0;
	let timerId;
	timerId = setInterval(() => {
		called++;
		console.log("hi for now");
		if (called === 5) clearInterval(timerId);
	}, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
	// ADD CODE HERE
	let intervalId;
	intervalId = setInterval(func, interval * 1000);
	setTimeout(() => {
		clearInterval(intervalId);
	}, duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
	console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
	let count = 0;
	return function () {
		const intervalId = setInterval(() => {
			count++;
			console.log(count);
			if (count === target) {
				clearInterval(intervalId);
			}
		}, wait);
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
	// ADD CODE HERE
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(val);
		}, 2000);
	});
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised("wait for it...");
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
	constructor(cb) {
		// ADD CODE HERE
		this.cb = cb;
		this.intervalId;
		this.second = 0;
	}

	// ADD METHODS HERE
	start() {
		this.intervalId = setInterval(() => {
			this.second = (this.second + 1) % 60 || 60;
			this.cb(this.second);
		}, 1000);
	}

	reset() {
		clearInterval(this.intervalId);
		this.second = 0;
	}
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock(val => {
	console.log(val);
});
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 62000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
	// ADD CODE HERE
	let timeout;
	return function (...args) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			return callback.call(this, ...args);
		}, interval);
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
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
