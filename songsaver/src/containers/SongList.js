import React from "react";
import List from "../components/List/List";
import InputField from "../components/InputField";

const SongList = (props) => {
	return (
		<React.Fragment>
			<header className="Container-header">
				<h1>song list saver</h1>
				<InputField />
			</header>
			<table>
				<thead className="song-head">
					<tr className="song-header">
						<th className="song-row__item">Song</th>
						<th className="song-row__item">Artist</th>
						<th className="song-row__item">Genre</th>
						<th className="song-row__item">Rating</th>
						<th className="song-row__item">
							<button>delete all</button>
						</th>
					</tr>
				</thead>
			</table>
			<List
				items={props.songListArray}
				handleClickItem={props.handleClickItem}
			/>
		</React.Fragment>
	);
};

export default SongList;
