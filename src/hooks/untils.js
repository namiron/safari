import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/reducers/productsSlice';
import { useSelector } from 'react-redux'



export const useClickOutSide = (ref, callback) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callbackRef.current();
		}
	};

	useEffect(() => {
		const handleDocumentClick = (e) => {
			handleClick(e);
		};

		document.addEventListener('mousedown', handleDocumentClick);

		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
		};
	}, [ref, handleClick]);
};

export const useExportAllProducts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
}

export const useCustomProductList = () => {
	const { isLoading, productList, error } = useSelector((state) => state.products);
	return productList;
}






