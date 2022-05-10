import React from 'react';
import './App.css';
import Home from './pages/Home';


function App() {
	console.log("-- in App")
	return (
		<div className="App">
			<div className="text-center">Reach CRM</div>
			<Home />
		</div>
	);
}

export default App;
