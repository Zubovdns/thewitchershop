import { makeAutoObservable } from 'mobx';

class BasketStore {
	constructor() {
		this._products = [];
		this._cost = {};
		makeAutoObservable(this);
	}
	setProducts(products) {
		this._products = products;
	}
	setCost(cost) {
		this._cost = cost;
	}
	get products() {
		return this._products;
	}
	get cost() {
		return this._cost;
	}
}

export default BasketStore;
