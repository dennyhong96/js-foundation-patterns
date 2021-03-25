// Proxy Pattern
// Proxy pattern uses one object (proxy) to act as the placeholder / middleman
// for another object. Proxy object controls the access / interaction between
// user and the other object.

function CryptoAPI() {
	this.getValue = async function (type) {
		// mock a network request
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				switch (type) {
					case "Bitcoin":
						resolve(`$${52487}`);
						break;
					case "Ethereum":
						resolve(`$${1574}`);
						break;
					case "Dogecoin":
						resolve(`$${0.050817}`);
						break;
					default: {
						reject(new Error(`${type} is not yet supported.`));
						break;
					}
				}
			}, 1000); // 1 second for each network request
		});
	};
}

// no proxy/cache, takes 6 seconds for 6 network requests
const getPrices = async () => {
	const cryptoAPI = new CryptoAPI();

	console.log(await cryptoAPI.getValue("Bitcoin"));
	console.log(await cryptoAPI.getValue("Ethereum"));
	console.log(await cryptoAPI.getValue("Dogecoin"));
	console.log(await cryptoAPI.getValue("Ethereum"));
	console.log(await cryptoAPI.getValue("Dogecoin"));
	console.log(await cryptoAPI.getValue("Bitcoin"));
};
getPrices();

function CryptoAPIProxy() {
	this.api = new CryptoAPI();

	// cache values
	this.cache = {};

	this.getValue = async function (type) {
		if (this.cache[type]) return this.cache[type];

		this.cache[type] = await this.api.getValue(type);
		return this.cache[type];
	};
}

// with proxy/cache, takes 3 seconds for 6 network requests
const getPricesWithProxy = async () => {
	const cryptoAPIWithProxy = new CryptoAPIProxy();

	console.log(await cryptoAPIWithProxy.getValue("Bitcoin"));
	console.log(await cryptoAPIWithProxy.getValue("Ethereum"));
	console.log(await cryptoAPIWithProxy.getValue("Dogecoin"));
	console.log(await cryptoAPIWithProxy.getValue("Ethereum"));
	console.log(await cryptoAPIWithProxy.getValue("Dogecoin"));
	console.log(await cryptoAPIWithProxy.getValue("Bitcoin"));
};
getPricesWithProxy();
