import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
				<Route
					path="/login"
					element={
						<>
							<Login />
						</>
					}
				/>
				<Route
					path="/checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
