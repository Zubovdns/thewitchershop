import { makeAutoObservable } from 'mobx';

class BasketStore {
	constructor() {
		this._products = [];
		this._cost = {};
		this._amount = 0;
		makeAutoObservable(this);
	}
	setProducts(products) {
		this._products = products;
	}
	setCost(cost) {
		this._cost = cost;
	}
	setAmount(amount) {
		this._amount = amount;
	}
	get products() {
		return this._products;
	}
	get cost() {
		return this._cost;
	}
	get amount() {
		return this._amount;
	}
}

export default BasketStore;
