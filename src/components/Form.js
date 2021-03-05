import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginForm } from "./Login";
import { RegisterForm } from "./Register";

function Form() {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<BrowserRouter>
			<Route path="/" exact component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
			<Switch></Switch>
		</BrowserRouter>
	);
}

export default Form;
