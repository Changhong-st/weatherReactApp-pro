import React from 'react';
import './App.css';
import Weather from './components/Weather/index'


require('dotenv').config();

function App() {
	return (
		<div className = 'App'>
			<Weather/>
		</div>
	);
}

export default App;

