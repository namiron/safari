import { createSlice } from '@reduxjs/toolkit';
import { useCustomProductList } from '../../hooks/untils';

function useCustomProductListInReducer() {
	return useCustomProductList();
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		list: [],
	},
	reducers: {
		filterForSize: (state, { payload }) => {
			const newList = [...state.list];
			const sizeFilter = newList.filter(el => el.size === 'M');
			state.list = sizeFilter;
		}
	},
});

export const initializeList = () => dispatch => {
	const customProductList = useCustomProductListInReducer();
	dispatch(filtersSlice.actions.setList(customProductList));
};

export default filtersSlice.reducer;

export const { filterForSize } = filtersSlice.actions;
