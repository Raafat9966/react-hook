import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
	// Get auth header value
	const bearerHeader = req.headers["authorization"];
	// Check if bearer is undefined
	if (!bearerHeader) return res.sendStatus(403);

	// Split at the space
	const bearer = bearerHeader.split(" ");
	// Get token from array
	const token = bearer[1];
	// Check if token is undefined
	if (!token) return res.sendStatus(403);

	// Verify token
	jwt.verify(token, process.env.SECRET, (err, user) => {
		if (err) {
			// Print error
			console.error("Error:", err);
			// Forbidden
			return res.sendStatus(403);
		}
		// Set user
		req.user = user;
		// Next middleware
		next();
	});
}
