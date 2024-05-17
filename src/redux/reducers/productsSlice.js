import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../common/constants'
import axios from 'axios'

export const getProducts = createAsyncThunk(
	'product/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(`${BASE_URL}`)
			if (response.status !== 200) {
				throw Error('Server error')
			}
			const data = response.data
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const updateProduct = createAsyncThunk(
	'product/updateProduct',
	async ({ userId, newRating, comments }, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/${userId}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					rating: newRating,
					comments: comments
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to update product.');
			}
			const data = await response.json();
			return data;

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
export const addReview = createAsyncThunk(
	'users/createNameUser',
	async ({ id, newReviewData }, { rejectWithValue }) => {

		try {
			const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/safari/${id}`);
			if (!response.ok) {
				throw new Error('Failed to fetch user data.');
			}
			let userReview = await response.json();

			const newReviewObject = {
				time: newReviewData.time,
				userName: newReviewData.userName,
				text: newReviewData.text,
				ratingUser: newReviewData.ratingUser,

			};
			userReview.comments.push(newReviewObject);

			const updateResponse = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/safari/${id}`, {
				method: 'PUT',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(userReview)
			});
			if (!updateResponse.ok) {
				throw new Error('Failed to update user data.');
			}
			const updatedData = await updateResponse.json();
			return updatedData;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);



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
			})
			.addCase(updateProduct.rejected, (state, { payload }) => {
				state.status = 'error'
				state.error = payload
			})
	}
});

export default productSlice.reducer