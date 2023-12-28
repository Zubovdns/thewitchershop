import { $host } from './index';

export const fetchCategories = async () => {
	const { data } = await $host.get('api/category');
	return data;
};
export const fetchProducts = async (categoryId, limit, page, inStock) => {
	const { data } = await $host.get('api/product', {
		params: { categoryId, limit, page, inStock },
	});
	return data;
};
export const fetchOneProduct = async (id) => {
	const { data } = await $host.get('api/product/' + id);
	return data;
};
export const getTopOnCategory = async () => {
	const { data } = await $host.get('api/product/top');
	return data;
};
