// import axios from "axios";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Form />
			</Router>
		</div>
	);
};

export default App;
