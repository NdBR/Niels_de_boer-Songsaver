import React from "react";

const ListItem = ({ item, deleteItem }) => {
	const { title, artist, genre, rating } = item;
	return (
		<tbody key={item.id} value={item}>
			<tr className="song-header">
				<td className="song-row__item">{title}</td>
				<td className="song-row__item">{artist}</td>
				<td className="song-row__item">{genre}</td>
				<td className="song-row__item">{rating}</td>
				<td className="song-row__item">
					<button onClick={deleteItem} value={item.id}>
						delete
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default ListItem;
