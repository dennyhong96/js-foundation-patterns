// Singleton pattern (Creational)
// Useful when one wants to limit the number of instances
// of an object to AT MOST ONE.

const Singleton = (function () {
	// constructor function
	// Limit the number of instances of ProcessManager to at most one
	function ProcessManager() {
		this.numAppRunning = 0;
		// other props...
	}

	let pm;

	function createProcessManager() {
		pm = new ProcessManager();
		return pm;
	}

	return {
		getProcessManager() {
			if (!pm) {
				// create a new instance if we don't have one yet
				return createProcessManager();
			} else {
				return pm;
			}
		},
	};
})();

// newly created instance
const pm1 = Singleton.getProcessManager();

// existing instance
const pm2 = Singleton.getProcessManager();

console.log(pm1 === pm2);
