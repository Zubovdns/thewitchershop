import './App.css';
import AboutUs from './components/about-us/AboutUs'
import Footer from './components/footer/Footer'
import NavMenu from './components/nav_menu/NavMenu'

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
