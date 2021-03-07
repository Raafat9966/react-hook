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
	if (!user) {
		return "user is not registered";
	} else {
		let result = bcrypt.compareSync(password, user.password);
		if (!result) {
			return "password doesn't match";
		} else {
			return user;
		}
	}
};

export const registerUser = async (name, email, password) => {
	let hash = bcrypt.hashSync(password, 10);
	const user = new User({
		name,
		email,
		password: hash,
	});
	return await user.save();
};
