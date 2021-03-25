// Visitor Pattern
// Allows one to add functionalities / behaviors to an object (receiver)
//   without actually changing the receiver itself. The extended
//   functionalities are kept on a `visitor` object.
// The receiver object must expose some kind of `accept` method to
//   provide visitor object access.

function Person(name, salary) {
	this.name = name;
	this.salary = salary;
}

Person.prototype.setSalary = function (newSalary) {
	this.salary = newSalary;
};
Person.prototype.getSalaray = function () {
	return this.salary;
};

// key method: "accept" to provide visitor functions access to "this"
Person.prototype.accept = function (visitorFn) {
	return visitorFn(this);
};

const denny = new Person("Denny", 90000);

console.log(denny.getSalaray()); // 90000

// define a visitor function
const raise = person => (person.salary *= 1.25);

denny.accept(raise);

console.log(denny.getSalaray()); // 112500
