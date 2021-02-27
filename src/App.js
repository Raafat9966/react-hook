import { useState } from "react";
// import axios from "axios";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
const admin = {
	email: "admin@email.com",
	password: "admin",
};

const App = () => {
	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		if (
			details.email === admin.email &&
			details.password === admin.password
		) {
			setUser({
				name: details.name,
				email: details.email,
			});
			console.log(user.name);
		} else {
			setError("Details do not match");
		}
	};
	const Logout = () => {
		console.log("logout");
		setUser({ name: "", email: "" });
	};

	return (
		<div className="App">
			<Header />
			{user.email !== "" ? (
				<div className="welcome">
					<h2>
						Welcome, <span>{user.name}</span>
					</h2>
					<button onClick={Logout}>logout</button>
				</div>
			) : (
				<LoginForm Login={Login} error={error} />
			)}
		</div>
	);
};

export default App;
