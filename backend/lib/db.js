import mongoose from "mongoose";

mongoose
	.connect(process.env.URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => console.log("mongoDB connected"))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
