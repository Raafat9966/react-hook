import { useForm } from "react-hook-form";

export const Form = () => {
	const { register, handleSubmit } = useForm(); // initialize the hook
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Login</h1>
			<input name="name" ref={register} /> {/* register an input */}
			<input
				name="email"
				type="email"
				ref={register({ required: true })}
			/>
			<input
				name="password"
				type="password"
				ref={register({ required: true })}
			/>
			<input type="submit" />
		</form>
	);
};
