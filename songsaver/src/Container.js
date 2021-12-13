import React from "react";
import SongList from "./containers/SongList";
import { useSelector, useDispatch } from "react-redux";

const Container = () => {
	const dispatch = useDispatch();
	const songListArray = useSelector((state) => state.songs);
	console.log(songListArray);
	const handleClickItem = (event) => {
		console.log(event.target);
		// dispatch()
	};
	return (
		<>
			<main>
				<SongList
					songListArray={songListArray}
					handleClickItem={handleClickItem}
				/>
			</main>
		</>
	);
};
export default Container;
