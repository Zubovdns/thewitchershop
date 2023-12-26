import { $host } from './index';

export const fetchCategories = async () => {
	const { data } = await $host.get('api/category');
	return data;
};
export const fetchProducts = async (categoryId, limit, page) => {
	const { data } = await $host.get('api/product', {
		params: { categoryId, limit, page },
	});
	return data;
};
export const fetchOneProduct = async (id) => {
	const { data } = await $host.get('api/product/' + id);
	return data;
};
