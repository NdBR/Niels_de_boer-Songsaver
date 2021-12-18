import React from "react";
import SongList from "./containers/SongList";
import Nav from "./components/Nav";
import About from "./containers/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = () => {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route path="/" exact element={<SongList />} />
					<Route path="about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
};
export default Container;
