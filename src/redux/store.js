import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import filtersSlice from './reducers/filtersSlice';

export const store = configureStore({
	reducer: {
		products: productsSlice,
		filters: filtersSlice,
	}
});
