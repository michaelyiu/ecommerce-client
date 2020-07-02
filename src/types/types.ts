// shape of data that we expect back from the server
// export interface User {
// 	id?: string;
// 	email: string;
// 	name: string;
// }

// export interface Cart {
// 	id: string;
// 	orderedItems: {
// 		quantity: number;
// 		product: Product
// 		user?: User
// 	}
// }

export interface Product {
	id: string
	name: string
	price: number
	category: string
	images: [string]
	description: string
	quantity: number
	brand: string
}

export enum AvailableBrands {
	APPLE,
	HTC,
	HUAWEI,
	LENOVO,
	ONEPLUS,
	SAMSUNG,
	SONY,
	XIAOMI
}

export const BrandList = [
	'APPLE',
	'HTC',
	'HUAWEI',
	'LENOVO',
	'ONEPLUS',
	'SAMSUNG',
	'SONY',
	'XIAOMI'
]

export interface ShippingInfo {
	firstname: string
	lastname: string
	address: string
	city: string
	province: string
	postal: string
	country: string
}