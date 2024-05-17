/* eslint-disable react-hooks/exhaustive-deps */
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

export const useCustomUsers = () => {
	const users = useSelector((state) => state.users.users)

	return users
}



export const useCustomCurrentUser = () => {
	const currentUser = useSelector((state) => state.users.currentUser)
	return currentUser
}


export const useCustomTriggerModalWindow = () => {
	const [isModalWindow, setModalWindow] = useState(false);
	const handleCloseWindow = () => {
		setModalWindow(!isModalWindow);
	};

	return { isModalWindow, handleCloseWindow }

}

export const useCustomTriggerModalWindowHook = () => {
	const { isModalWindow, handleCloseWindow } = useCustomTriggerModalWindow();
	return { isModalWindow, handleCloseWindow };
};

export const useCustomCountHook = () => {
	const [count, setCount] = useState(1)

	const handleCountMinus = () => {
		setCount(count - 1)
	}
	const handleCountPlus = () => {
		setCount(count + 1)
	}


	return { count, handleCountMinus, handleCountPlus }


}


export const discount = (price) => {
	let percent
	if (price > 5000) {
		percent = 50
	} else if (price <= 5000) {
		percent = 25
	} else if (price <= 1000) {
		percent = 15
	}
	const result = (price / 100) * percent
	return [result, percent]
}

export const TotalProductsPrice = (array = []) => {
	let totalPrice = 0;
	let totalCount = 0;
	let totalPriceItem = 0;

	for (let i = 0; i < array.length; i++) {
		const el = array[i];
		totalPrice += el.price;
		totalCount += el.count;
		totalPriceItem += el.price * el.count;
	}

	return totalPriceItem;
}
