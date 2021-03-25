// Mediator Pattern
// Allows one to define a mediator object that encapsulates and controls
//   how a gorup of objects interact with eachother.

// ChatRoom example:
// Instead of talking directly to other members, we have ChatRoom as a mediator
//   to receive members' message and it takes cares of the routing logic and
//   let other members know when messages are coming their way.

const getDate = () => new Date().toISOString();

function Member(name) {
	this.name = name;
	this.chatRoom = null;
}
Member.prototype.send = function (to, message) {
	console.log(`${getDate()} - ${this.name} send to ${to.name}: ${message}`);
};
Member.prototype.receive = function (from, message) {
	console.log(`${getDate()} - ${this.name} received from ${from.name}: ${message}`);
};

function ChatRoom() {
	this.members = {};
}
// join chatroom
ChatRoom.prototype.join = function (member) {
	this.members[member.name] = member;
	member.chatRoom = this;
};
// transit message - encapsulate / control how members interact iwth each other
ChatRoom.prototype.transit = function (message, from, to) {
	this.members[from.name].send(to, message);
	this.members[to.name].receive(from, message);
};

const denny = new Member("Denny");
const sharon = new Member("Sharon");

const chatRoom = new ChatRoom();
chatRoom.join(denny);
chatRoom.join(sharon);

console.log(denny);

chatRoom.transit("Hello, World!", denny, sharon);
chatRoom.transit("Hey!!!", sharon, denny);

/*
2021-03-25T03:33:29.643Z - Denny send to Sharon: Hello, World!
2021-03-25T03:33:29.648Z - Sharon received from Denny: Hello, World!
2021-03-25T03:33:29.649Z - Sharon send to Denny: Hey!!!
2021-03-25T03:33:29.649Z - Denny received from Sharon: Hey!!!
*/
