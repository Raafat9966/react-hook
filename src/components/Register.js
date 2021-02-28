import { useState } from "react";

export function RegisterForm() {
	const [data, setData] = useState({ name: "", email: "", password: "" });

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(data);
		// RegisterForm(data);
	};
	return (
		<div className="form-div" onSubmit={submitHandler}>
			<form>
				<div className="form-inner">
					<h2>Register</h2>
					<div className="from-group">
						<input
							type="text"
							name="name"
							placeholder="name"
							onChange={(e) =>
								setData({ ...data, name: e.target.value })
							}
							value={data.name}
						/>
					</div>
					<div className="from-group">
						<input
							type="email"
							name="email"
							placeholder="email"
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}
							value={data.email}
						/>
					</div>
					<div className="from-group">
						<input
							type="password"
							name="password"
							placeholder="password"
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
							value={data.password}
						/>
					</div>
					<button type="submit">Submit</button>
					<a href="/">login</a>
				</div>
			</form>
		</div>
	);
}
