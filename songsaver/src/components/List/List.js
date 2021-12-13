import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
	const { items, handleClickItem } = props;
	const listItems = items
		? items.map((item) => (
				<ListItem key={item.id} item={item} clickItem={handleClickItem} />
		  ))
		: " ";

	return (
		<React.Fragment>
			<table>{listItems}</table>
		</React.Fragment>
	);
};

export default List;
