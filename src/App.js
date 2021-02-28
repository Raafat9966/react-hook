// import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LoginForm } from "./components/Login";
import { RegisterForm } from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<br />
			<Route path="/" exact component={LoginForm} />
			<Route path="/register" exact component={RegisterForm} />
		</BrowserRouter>
	);
};

export default App;
