// Observer Pattern
// One (Subject) to many (Observers) relationship.
// Observers are functions that watch the Subject and wait for
//   some signal / trigger before they run

function Observer() {
	this.state = {};

	// key props: "subscribers"
	this.subscribers = [];
}

// key methods: "subscribe", "unsubscribe", "fire"
Observer.prototype.subscribe = function (fn) {
	this.subscribers.push(fn);
};
Observer.prototype.unsubscribe = function (fn) {
	this.subscribers = this.subscribers.filter(func => func !== fn);
};
Observer.prototype.fire = function () {
	this.subscribers.forEach(fn => fn(this.state));
};

const observer = new Observer();

// subscribers
const func1 = () => console.log("Function #1 is called.");
const func2 = () => console.log("Function #2 is called.");
const func3 = () => console.log("Function #3 is called.");

[func1, func2, func3].forEach(fn => observer.subscribe(fn));

observer.fire();
/*
Function #1 is called.
Function #2 is called.
Function #3 is called.
*/

observer.unsubscribe(func2);
observer.fire();
/*
Function #1 is called.
Function #3 is called.
*/
