// Strategy Pattern (Behavioral)
// Strategy allows one to encapsulate a group / family of
//   closely related functions (stragegies). Allows for swaping
//   between them very easy.

function Fedex() {
	this.name = "Fedex";
}
Fedex.prototype.calculate = function () {
	return 12.88;
};

function UPS() {
	this.name = "UPS";
}
UPS.prototype.calculate = function () {
	return 4.88;
};

function USPS() {
	this.name = "USPS";
}
USPS.prototype.calculate = function () {
	return 3.88;
};

function Shipping() {
	// state for current strategy
	this.strategy = {};
}
Shipping.prototype.setStrategy = function (strategy) {
	this.strategy = strategy;
};
Shipping.prototype.calculateCost = function () {
	return `${this.strategy.name} strategy costs $${this.strategy.calculate()}.`;
};

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping();

// allow for easy swapping between strategies
shipping.setStrategy(fedex);
console.log(shipping.calculateCost());

shipping.setStrategy(ups);
console.log(shipping.calculateCost());

shipping.setStrategy(usps);
console.log(shipping.calculateCost());

/*
Fedex strategy costs $12.88.
UPS strategy costs $4.88.
USPS strategy costs $3.88.
*/
