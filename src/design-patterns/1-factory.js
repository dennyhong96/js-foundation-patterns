// Factory Pattern (Creational)
// - An object that menufactures other objects. Factory provides a
//   centralized object creation logic.

// Provides object creation machenisims that promote flexibility
//   and reusability. Especially in situations where one needs
//   to create many different types of many different objects.

function Developer(name) {
	// "this" starts off as {} when using "new" keyword
	this.name = name;
	this.type = "Developer";
	// implicit return "this"
}

function Tester(name) {
	this.name = name;
	this.type = "Tester";
}

function Marketer(name) {
	this.name = name;
	this.type = "Marketer";
}

function Accountant(name) {
	this.name = name;
	this.type = "Accountant";
}

function EmployeeFactory() {
	// "this" starts off as {} when using "new" keyword
	this.create = function (name, type) {
		switch (type) {
			// block scoped switch cases
			case "D": {
				return new Developer(name);
			}

			case "T": {
				return new Tester(name);
			}

			case "M": {
				return new Marketer(name);
			}

			case "A": {
				return new Accountant(name);
			}

			default: {
				throw new Error(`Type "${type}" is not supported.`);
			}
		}
	};
	// implicit return "this"
}

const factory = new EmployeeFactory();

const employeeData = [
	{ type: "D", name: "Denny" },
	{ type: "D", name: "Lance" },
	{ type: "T", name: "Mike" },
	{ type: "T", name: "Sam" },
	{ type: "T", name: "David" },
	{ type: "M", name: "Sally" },
	{ type: "A", name: "Jenny" },
	{ type: "A", name: "Tim" },
	{ type: "M", name: "Pency" },
];

const employees = employeeData.map(({ type, name }) => factory.create(name, type));

function greet() {
	console.log(`Hi, my name is ${this.name}, and I am a ${this.type}.`);
}

employees.forEach(emp => greet.call(emp));

/*
Hi, my name is Denny, and I am a Developer.
Hi, my name is Lance, and I am a Developer.
Hi, my name is Mike, and I am a Tester.
Hi, my name is Sam, and I am a Tester.
Hi, my name is David, and I am a Tester.
Hi, my name is Sally, and I am a Marketer.
Hi, my name is Jenny, and I am a Accountant.
Hi, my name is Tim, and I am a Accountant.
Hi, my name is Pency, and I am a Marketer.
*/
