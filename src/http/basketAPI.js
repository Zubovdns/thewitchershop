import { $authHost } from './index';

export const fetchBasket = async (limit, page, discount) => {
	const { data } = await $authHost.get('api/basket', {
		params: { limit, page, discount },
	});
	return data;
};
export const addProductOnBasket = async (productId, quantity) => {
	const { data } = await $authHost.post('api/basket', null, {
		params: { productId, quantity },
	});

	return data;
};
export const deleteProductFromBasket = async (productId) => {
	const { data } = await $authHost.delete('api/basket/', {
		params: { productId },
	});
	return data;
};
