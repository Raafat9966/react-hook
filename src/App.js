import { useState, useEffect } from "react";
import axios from "axios";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
//import { Form } from "./components/Form";
import "./App.css";

const App = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((response) => setProducts(response.data));
	}, []);

	return (
		<div className="App">
			<Header />
			<Products products={products} />
		</div>
	);
};

export default App;
