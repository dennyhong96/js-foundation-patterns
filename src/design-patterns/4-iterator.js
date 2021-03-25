// Iterator Pattern
// Useful when one wants to loop over some collection of objects
//   and access each one in certain order.

function Iterator(collection) {
	// Key props: "index", "collection"
	this.index = 0;
	this.collection = collection;
}

// Key methods: "next", "hasNext"
Iterator.prototype.hasNext = function () {
	return this.index < this.collection.length;
};
Iterator.prototype.next = function () {
	// this.index++ returns this.index, then plus 1 onto it
	return this.collection[this.index++];
};

const collection = [1, "A", { name: "Denny" }, ["A1"]];

const iter = new Iterator(collection);

// console.log(iter.__proto__); // Iterator { hasNext: [Function], next: [Function] }

while (iter.hasNext()) {
	console.log(iter.next());
}

/*
1
A
{ name: 'Denny' }
[ 'A1' ]
*/
