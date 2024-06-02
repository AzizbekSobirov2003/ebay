import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./SearchResults.scss";

const SearchResults = () => {
	const context = useContext(SearchContext);

	if (!context) {
		throw new Error("SearchResults must be used within a SearchProvider");
	}

	const { searchTerm, products } = context;

	const filteredProducts = products.filter(
		(product) => product.category.toLowerCase() === searchTerm.toLowerCase()
	);

	return (
		<div className="search-results">
			<h1>Search Results for "{searchTerm}"</h1>
			<ul className="results">
				{filteredProducts.map((product, index) => (
					<li key={index}>
						<img
							src={product.images[0]}
							alt={product.title}
							width={400}
							height={400}
						/>
						<p>{product.title}</p>
						<p>{product.category}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchResults;
