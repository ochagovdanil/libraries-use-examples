import { makeAutoObservable } from 'mobx';

class Counter {
	count: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	get total() {
		return this.count * 2;
	}

	increment() {
		this.count++;
	}

	decrement() {
		this.count--;
	}
}

export default new Counter();
