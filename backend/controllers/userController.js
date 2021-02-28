import { loginUser, registerUser } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
	try {
		let { name, password } = req.body;
		let result = await loginUser(name, password);
		let token = jwt.sign({ result }, process.env.SECRET);
		res.cookie("authCookie", token);
		res.status(200).send(result);
	} catch (err) {
		res.status(406).send(err);
	}
};

export const register = async (req, res) => {
	try {
		let { name, email, password } = req.body;
		let user = await registerUser(name, email, password);
		let token = jwt.sign({ user }, process.env.SECRET);
		res.cookie("authCookie", token);
		res.status(201).send(user);
	} catch (err) {
		res.status(406).send(err);
	}
};

export const logout = (req, res) => {
	res.clearCookie("authCookie");
	res.status(200).send("logged out");
};
