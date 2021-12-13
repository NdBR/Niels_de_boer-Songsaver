import React from "react";

const ListItem = ({ item, clickItem }) => {
	const { title, artist, genre, rating } = item;
	return (
		<tbody key={item.id} value={item}>
			<tr className="song-header">
				<th className="song-row__item">{title}</th>
				<th className="song-row__item">{artist}</th>
				<th className="song-row__item">{genre}</th>
				<th className="song-row__item">{rating}</th>
				<th>
					<button onClick={clickItem} value={item.id}>
						delete
					</button>
				</th>
			</tr>
		</tbody>
	);
};

export default ListItem;
