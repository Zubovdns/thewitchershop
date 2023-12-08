import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about-us/AboutUs';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import MainScreen from './components/main_screen/MainScreen';
import NavMenu from './components/nav_menu/NavMenu';

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
