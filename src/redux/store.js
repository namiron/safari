import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';

export const store = configureStore({
	reducer: {
		products: productsSlice,
	}
});
