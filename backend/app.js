import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config.js";
import "./lib/db.js";
import users from "./routes/userRouter.js";

const app = express();
let port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/user", users);

app.listen(port, () => console.log(`http://localhost:${port}`));
