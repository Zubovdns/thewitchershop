import './App.css';
import AboutUs from './components/about-us/AboutUs'
import NavMenu from './components/nav_menu/NavMenu'
import Footer from './components/footer/Footer'

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<AboutUs />
			<Footer />
		</div>
	);
}

export default App;
