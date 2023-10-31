class Key {
	private signature = Math.random();
	getSignature() {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {}
	getKey() {
		return this.key;
	}
}

abstract class House {
	protected door: boolean = false;
	protected key: Key;
	protected tenants: Person[] = [];
	constructor(key: Key) {}

	abstract openDoor(key: Key): void;

	comeIn(person: Person) {
		if (this.door) this.tenants.push(person);
	}
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature())
			this.door = true;
	}
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
