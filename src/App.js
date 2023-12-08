import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about-us/AboutUs';
import Footer from './components/footer/Footer';
import NavMenu from './components/nav_menu/NavMenu';
import Catalog from './components/catalog/Catalog'

function App() {
	return (
		<>
			<NavMenu />
			<Routes>
				<Route>
					<Route path='/' element={<MainScreen />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/basket' element={<></>} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}
export default App;
