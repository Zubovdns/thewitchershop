import AboutUs from './pages/about-us/AboutUs';
import Auth from './pages/auth/Auth';
import Basket from './pages/cart/Cart';
import Catalog from './pages/catalog/Catalog';
import MainScreen from './pages/main_screen/MainScreen';
import ProductPage from './pages/product_page/ProductPage';
import {
	ABOUT_ROUTE,
	BASKET_ROUTE,
	CATALOG_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
	PRODUCT_ROUTE,
	REGISTRATION_ROUTE,
} from './utils/consts';

export const authRoutes = [
	//{ path: ADMIN_ROUTE, Component: <Admin/> },
	{ path: BASKET_ROUTE, Component: <Basket /> },
];

export const publicRoutes = [
	{ path: MAIN_ROUTE, Component: <MainScreen /> },
	{ path: LOGIN_ROUTE, Component: <Auth /> },
	{ path: REGISTRATION_ROUTE, Component: <Auth /> },
	{ path: CATALOG_ROUTE, Component: <Catalog /> },
	{ path: ABOUT_ROUTE, Component: <AboutUs /> },
	{ path: PRODUCT_ROUTE + '/:id', Component: <ProductPage /> },
];
