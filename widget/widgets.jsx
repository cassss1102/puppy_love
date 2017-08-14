import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Clock />
				<Weather />
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root />, root);
});
