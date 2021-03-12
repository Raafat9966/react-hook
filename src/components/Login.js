import axios from "axios";
import { useState } from "react";

export const LoginForm = () => {
	const [details, setDetails] = useState({
		name: "",
		password: "",
	});
	const [error, setError] = useState("");

	// const Login = (details) => {
	// 	if (details.email && details.password) {
	// 		console.log(details.name);
	// 	} else {
	// 		setError("Details do not match");
	// 	}
	// };
	// const Logout = () => {
	// 	console.log("logout");
	// 	setDetails({ name: "", password: "" });
	// };
	const submitHandler = (e) => {
		e.preventDefault();
		axios.post("http://localhost:8080/user/login", details).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<div className="form-div">
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2>login</h2>
					{error !== "" ? <div className="error">{error}</div> : ""}
					<div className="form-group">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="name"
							onChange={(e) =>
								setDetails({ ...details, name: e.target.value })
							}
							value={details.name}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="password"
							onChange={(e) =>
								setDetails({
									...details,
									password: e.target.value,
								})
							}
							value={details.password}
						/>
					</div>
					<button type="submit">Submit</button>
					<a href="/register">register</a>
				</div>
			</form>
		</div>
	);
};
