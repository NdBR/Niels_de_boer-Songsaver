import React from "react";
import SongList from "./containers/SongList";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllSongs, deleteSong } from "./redux/actions";

const Container = () => {
	const dispatch = useDispatch();
	const songListArray = useSelector((state) => state.songs);

	// delet all songs
	const handleDeleteAllItems = () => dispatch(deleteAllSongs([]));

	// delete item
	const handleDeleteItem = (event) => dispatch(deleteSong(event.target.value));

	// sort songs AZ

	// sort artrist AZ

	// filter genre

	// filter rating

	return (
		<>
			<SongList
				songListArray={songListArray}
				handleDeleteAllItems={handleDeleteAllItems}
				handleDeleteItem={handleDeleteItem}
			/>
		</>
	);
};
export default Container;
