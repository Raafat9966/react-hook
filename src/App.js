// import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { LoginForm } from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<br />
			<Route path="/" exact component={LoginForm} />
		</BrowserRouter>
	);
};

export default App;
