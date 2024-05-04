import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import userSlice from '../redux/reducers/userSlice';


export const store = configureStore({
	reducer: {
		products: productsSlice,
		users: userSlice,
	}
});
