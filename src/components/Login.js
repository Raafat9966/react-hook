import { useState } from "react";

export const LoginForm = () => {
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const Login = (details) => {
		if (details.email && details.password) {
			console.log(details.name);
		} else {
			setError("Details do not match");
		}
	};
	const Logout = () => {
		console.log("logout");
		setDetails({ name: "", email: "", password: "" });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return details.password !== "" ? (
		<div className="welcome">
			<h2>
				Welcome, <span>{details.name}</span>
			</h2>
			<button onClick={Logout}>logout</button>
		</div>
	) : (
		<div className="form-div">
			<form action="" onSubmit={submitHandler}>
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
							type="email"
							name="email"
							id="email"
							placeholder="email"
							onChange={(e) =>
								setDetails({
									...details,
									email: e.target.value,
								})
							}
							value={details.email}
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
