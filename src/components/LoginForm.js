import { useState } from "react";

export const LoginForm = ({ Login, error }) => {
	const [details, setDetails] = useState({
		name: "",
		email: "",
		password: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return (
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
							placeholder="Name"
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
							placeholder="Email"
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
							placeholder="Password"
							onChange={(e) =>
								setDetails({
									...details,
									password: e.target.value,
								})
							}
							value={details.password}
						/>
					</div>
					<input type="submit" value="LOGIN" />
				</div>
			</form>
		</div>
	);
};
