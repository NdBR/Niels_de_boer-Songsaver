import React from "react";
import SongList from "./containers/SongList";
import Nav from "./components/Nav";
import About from "./containers/About";

import { useSelector, useDispatch } from "react-redux";
import { deleteAllSongs, deleteSong } from "./redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = () => {
	const dispatch = useDispatch();
	const songListArray = useSelector((state) => state.songs);

	// delet all songs
	const handleDeleteAllItems = () => dispatch(deleteAllSongs([]));

	// delete item
	const handleDeleteItem = (event) => dispatch(deleteSong(event.target.value));

	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route
						path="/"
						exact
						element={
							<SongList
								songListArray={songListArray}
								handleDeleteAllItems={handleDeleteAllItems}
								handleDeleteItem={handleDeleteItem}
							/>
						}
					/>
					<Route path="about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
};
export default Container;
