import './App.css';
import MainScreen from './components/main_screen/MainScreen';
import NavMenu from './components/nav_menu/NavMenu';

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<MainScreen />
		</div>
	);
}

export default App;
