export const Product = ({ product }) => {
	return (
		<div className="card">
			<h2>{product.articleNo}</h2>
			<h2>{product.name}</h2>
			<h2>{product.description}</h2>
			<h2>{product.price}</h2>
		</div>
	);
};
