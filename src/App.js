import './App.css';
import Footer from './components/footer/Footer';
import MainScreen from './components/main_screen/MainScreen';
import NavMenu from './components/nav_menu/NavMenu';

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<MainScreen />
			<Footer />
		</div>
	);
}

export default App;
