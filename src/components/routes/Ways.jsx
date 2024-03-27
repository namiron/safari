import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './route';
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

	return (
		<Routes>
			<Route path={ROUTES.layout} element={<Suspense fallback={<p>Loading...</p>}><LayoutPage />
			</Suspense>} >
				<Route index element={<Suspense fallback={<p>Loading...</p>}><HomePage />
				</Suspense>} />
				<Route path={ROUTES.log_in} element={<Suspense fallback={<p>Loading...</p>}><SignInPage />
				</Suspense>} />
				<Route path={ROUTES.clothes} element={<Suspense fallback={<p>Loading...</p>}><ClothesPage />
				</Suspense>} />
				<Route path={ROUTES.shoes} element={<Suspense fallback={<p>Loading...</p>}><ShoesPage />
				</Suspense>} />
				<Route path={ROUTES.accessories} element={<Suspense fallback={<p>Loading...</p>}><AccessoriesPage /></Suspense>} />
				<Route index element={<Suspense fallback={<p>Loading...</p>}><HomePage />
				</Suspense>} />
				<Route path={ROUTES.cart} element={<Suspense fallback={<p>Loading...</p>}><CartPage />
				</Suspense>} />
				<Route path={ROUTES.favorite} element={<Suspense fallback={<p>Loading...</p>}><FavoritePage />
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