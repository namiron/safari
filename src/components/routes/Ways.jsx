import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './route';
import { Skeleton } from '../skeleton/Skeletons';
import { SkeletonCart } from './../skeleton/Skeletons';
import { useCustomProductList, useCustomTriggerModalWindow, useExportAllProducts } from './../../hooks/untils';
import { LOG } from '../../common/constants';


//----------------------------------------------------------
const HomePage = lazy(() => import('./../pages/Home'))
const LayoutPage = lazy(() => import('../Layout/Layout'))
const ClothesPage = lazy(() => import('./../pages/Clothes'))
const ShoesPage = lazy(() => import('./../pages/Shoes'))
const AccessoriesPage = lazy(() => import('./../pages/Accessories'))
const NotFoundPage = lazy(() => import('../pages/NotFound'))
const CartPage = lazy(() => import('./../pages/Cart'))
const FavoritePage = lazy(() => import('./../pages/Favorite'))
const ItemDetailsPage = lazy(() => import('./../ProductList/ItemDetails'))
const ShoppingDetailsPage = lazy(() => import('../pages/ShoppingDetails'))



//----------------------------------------------------------


const Ways = () => {
	//---------------------------------------------------
	useExportAllProducts()
	const productList = useCustomProductList()
	const [searchList, setSearchList] = useState([])
	const handleSearchList = (searchFilterArray) => {
		setSearchList(searchFilterArray)
	}
	const { isModalWindow, handleCloseWindow } = useCustomTriggerModalWindow()

	//---------------------------------------------------


	return (
		<Routes>
			<Route path={ROUTES.layout} element={<Suspense fallback={<Skeleton />}><LayoutPage productList={productList} handleSearchList={handleSearchList}
				handleCloseWindow={handleCloseWindow} isModalWindow={isModalWindow}
			/>
			</Suspense>} >
				<Route index element={<Suspense fallback={<Skeleton />}> <HomePage productList={productList} searchList={searchList} handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.clothes} element={<Suspense fallback={<Skeleton />}><ClothesPage productList={productList} searchList={searchList} handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.shoes} element={<Suspense fallback={<Skeleton />}><ShoesPage productList={productList} searchList={searchList} handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.accessories} element={<Suspense fallback={<Skeleton />}><AccessoriesPage productList={productList} searchList={searchList} handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.cart} element={<Suspense fallback={<SkeletonCart />}><CartPage handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.favorite} element={<Suspense fallback={<SkeletonCart />}><FavoritePage handleCloseWindow={handleCloseWindow} />
				</Suspense>} />
				<Route path={ROUTES.item_details} element={<Suspense fallback={<p>{LOG}</p>}><ItemDetailsPage
				/></Suspense>} />
				<Route path={ROUTES.shopping_details} element={<Suspense fallback={<p>{LOG}</p>}><ShoppingDetailsPage />
				</Suspense>} />
				<Route path={ROUTES.not_found} element={<Suspense fallback={<p>{LOG}</p>}><NotFoundPage />
				</Suspense>} />
			</Route>
		</Routes>
	)
}
export default Ways;