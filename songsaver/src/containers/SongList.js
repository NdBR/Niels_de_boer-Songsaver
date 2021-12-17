import React from "react";
import List from "../components/List/List";
import SongForm from "../components/SongForm";

const SongList = (props) => {
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
								<button onClick={props.handleDeleteAllItems}>delete all</button>
							</th>
						</tr>
					</thead>
				</table>
			</header>
			<main>
				<List
					items={props.songListArray}
					handleDeleteItem={props.handleDeleteItem}
				/>
			</main>
		</>
	);
};

export default SongList;
