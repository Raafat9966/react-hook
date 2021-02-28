import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.connection.model("accounts", schema);

export const loginUser = async (name, password) => {
	let user = User.findOne({ name });
	return user;
};

export const registerUser = async (name, email, password) => {
	let hash = bcrypt.hashSync(password, 10);
	const user = new User({
		name,
		email,
		password: hash,
	});
	await user.save();
	return user;
};
