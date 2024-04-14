import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './route';
import { Skeleton } from '../skeleton/Skeletons';
import { SkeletonCart } from './../skeleton/Skeletons';
import { useCustomProductList, useExportAllProducts } from './../../hooks/untils';


//----------------------------------------------------------
const HomePage = lazy(() => import('./../pages/Home'))
const LayoutPage = lazy(() => import('../Layout/Layout'))
const ClothesPage = lazy(() => import('./../pages/Clothes'))
const ShoesPage = lazy(() => import('./../pages/Shoes'))
const AccessoriesPage = lazy(() => import('./../pages/Accessories'))
const NotFoundPage = lazy(() => import('../pages/NotFound'))
const SignInPage = lazy(() => import('../pages/SignIn'))
const CartPage = lazy(() => import('./../pages/Cart'))
const FavoritePage = lazy(() => import('./../pages/Favorite'))
const ItemDetailsPage = lazy(() => import('./../ProductList/ItemDetails'))
const AboutUsPage = lazy(() => import('./../pages/informations/AboutUs'))
const ContactPage = lazy(() => import('./../pages/informations/Contact'))
const TermsPage = lazy(() => import('./../pages/informations/Terms'))

//----------------------------------------------------------


const Ways = () => {
	//---------------------------------------------------
	useExportAllProducts()
	const productList = useCustomProductList()
	const [searchList, setSearchList] = useState([])

	const handleSearchList = (searchFilterArray) => {
		setSearchList(searchFilterArray)
	}
	console.log('searchList:', searchList);
	//---------------------------------------------------


	return (
		<Routes>
			<Route path={ROUTES.layout} element={<Suspense fallback={<Skeleton />}><LayoutPage productList={productList} handleSearchList={handleSearchList} />
			</Suspense>} >
				<Route index element={<Suspense fallback={<Skeleton />}> <HomePage productList={productList} searchList={searchList} />
				</Suspense>} />
				<Route path={ROUTES.clothes} element={<Suspense fallback={<Skeleton />}><ClothesPage productList={productList} searchList={searchList} />
				</Suspense>} />
				<Route path={ROUTES.shoes} element={<Suspense fallback={<Skeleton />}><ShoesPage productList={productList} searchList={searchList} />
				</Suspense>} />
				<Route path={ROUTES.accessories} element={<Suspense fallback={<Skeleton />}><AccessoriesPage productList={productList} searchList={searchList} />
				</Suspense>} />
				<Route path={ROUTES.log_in} element={<Suspense fallback={<p>Loading...</p>}><SignInPage />
				</Suspense>} />
				<Route path={ROUTES.cart} element={<Suspense fallback={<SkeletonCart />}><CartPage />
				</Suspense>} />
				<Route path={ROUTES.favorite} element={<Suspense fallback={<SkeletonCart />}><FavoritePage />
				</Suspense>} />
				<Route path={ROUTES.about_us} element={<Suspense fallback={<p>Loading...</p>}><AboutUsPage />
				</Suspense>} />
				<Route path={ROUTES.contact} element={<Suspense fallback={<p>Loading...</p>}><ContactPage />
				</Suspense>} />
				<Route path={ROUTES.terms} element={<Suspense fallback={<p>Loading...</p>}><TermsPage />
				</Suspense>} />
				<Route path={ROUTES.item_details} element={<Suspense fallback={<p>Loading...</p>}><ItemDetailsPage
				/></Suspense>} />
				<Route path={ROUTES.not_found} element={<Suspense fallback={<p>Loading...</p>}><NotFoundPage />
				</Suspense>} />
			</Route>
		</Routes>
	)
}
export default Ways;