import { writable, readable } from 'svelte/store';
import productData from './components/productData.json'

export const color = writable('Burgundy');
export const outfit = writable('091323-1126');
export const ProductData = readable(productData)






