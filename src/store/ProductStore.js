import { makeAutoObservable } from 'mobx';

class ProductStore {
	constructor() {
		this._types = [];
		this._products = [];
		this._selectedType = {};
		this._page = 1;
		this._totalCount = 0;
		this._limit = 100;
		makeAutoObservable(this);
	}
	setTypes(types) {
		this._types = types;
	}
	setProducts(products) {
		this._products = products;
	}
	setSelectedType(selectedType) {
		this._selectedType = selectedType;
	}
	setPage(page) {
		this._page = page;
	}
	setTotalCount(totalCount) {
		this._totalCount = totalCount;
	}
	setLimit(limit) {
		this._limit = limit;
	}
	get types() {
		return this._types;
	}
	get products() {
		return this._products;
	}
	get selectedType() {
		return this._selectedType;
	}
	get page() {
		return this._page;
	}
	get totalCount() {
		return this._totalCount;
	}
	get limit() {
		return this._limit;
	}
}

export default ProductStore;
