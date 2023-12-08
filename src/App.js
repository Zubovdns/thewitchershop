import './App.css';
import Footer from './components/footer/Footer';
import NavMenu from './components/nav_menu/NavMenu';
import ProductPage from './components/product_page/ProductPage';

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<ProductPage />
			<Footer />
		</div>
	);
}

export default App;
