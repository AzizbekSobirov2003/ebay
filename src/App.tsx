import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Category from "./pages/category/Category";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/singleProduct/SinglePage";
import LikePage from "./pages/likePage/LikePage";
import CartPage from "./pages/cartPage/CartPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import SearchResults from "./components/searchResults/SearchResults";
import { useLocation } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

function App() {
	const { pathname } = useLocation();
	return (
		<SearchProvider>
			<div>
				{!pathname.includes("/login") &&
					!pathname.includes("/registration") && <Navbar />}
				<Search /> {/* Add the Search component here */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:product_id" element={<Category />} />
					<Route path="/singlePage/:single_id" element={<SinglePage />} />
					<Route path="/likePage" element={<LikePage />} />
					<Route path="/cartPage" element={<CartPage />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/login" element={<Login />} />
					<Route path="/search" element={<SearchResults />} />{" "}
					{/* Add SearchResults route */}
				</Routes>
				{!pathname.includes("/login") &&
					!pathname.includes("/registration") && <Footer />}
			</div>
		</SearchProvider>
	);
}

export default App;
