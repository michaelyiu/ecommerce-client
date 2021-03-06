import { Product } from './../types/types';

//for some unfortunate reason, typename needs to be stripped out of products to send out as input for another mutation

export function stripTypename(input: Product[]): Product[] {

	for (let i = 0; i < input.length; i++) {
		let newProdList: Product[] = input.map(item => ({
			id: item.id,
			name: item.name,
			price: item.price,
			category: item.category,
			images: item.images,
			description: item.description,
			quantity: item.quantity,
			brand: item.brand
		}))
		return newProdList;
	}
	return input;
}