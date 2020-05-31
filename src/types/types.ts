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
	id?: string
	name: string
	price: number
	category: string
	image: string
	description: string
	quantity: number
}