import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../common/constants'
import axios from 'axios'

export const getProducts = createAsyncThunk(
	'product/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(`${BASE_URL}`)
			if (response.status !== 200) { // Проверяем статус ответа
				throw Error('Server error')
			}
			const data = response.data
			console.log(data);
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)


const productSlice = createSlice({
	name: 'product',
	initialState: {
		status: null,
		productList: [],
		error: null,
	},
	reducers: {

	},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getProducts.fulfilled, (state, { payload }) => {
				state.status = 'fulfilled'
				state.productList = payload
			})
			.addCase(getProducts.rejected, (state, { payload }) => {
				state.status = 'error'
				state.error = payload
			});
	}
});

export default productSlice.reducer