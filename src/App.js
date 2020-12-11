import React from 'react';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/Shared/Preloader/Preloader';
function App() {
	return (
		<div>
			<Router>
				<Preloader />
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
