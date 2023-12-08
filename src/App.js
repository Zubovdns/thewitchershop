import './App.css';
import NavMenu from './components/nav_menu/NavMenu';
import Catalog from './components/catalog/Catalog'
import Footer from './components/footer/Footer'

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<Catalog />
			<Footer />
		</div>
	);
}
export default App;
