import React from "react";
import List from "../components/List/List";
import SongForm from "../components/SongForm";
import { useDispatch } from "react-redux";
import { deleteAllSongs } from "../redux/actions/index";

const SongList = (props) => {
	const dispatch = useDispatch();
	// delet all songs
	const handleDeleteAllItems = () => dispatch(deleteAllSongs());

	return (
		<>
			<header className="Container-header">
				<h3>song list saver</h3>
				<SongForm />

				<table>
					<thead>
						<tr className="song-header">
							<th className="song-row__item">Song</th>
							<th className="song-row__item">Artist</th>
							<th className="song-row__item">Genre</th>
							<th className="song-row__item">Rating</th>
							<th className="song-row__item">
								<button onClick={handleDeleteAllItems}>delete all</button>
							</th>
						</tr>
					</thead>
				</table>
			</header>
			<main>
				<List />
			</main>
		</>
	);
};

export default SongList;
