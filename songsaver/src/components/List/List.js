import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
	const { items, handleDeleteItem } = props;
	const listItems =
		items &&
		items.map((item) => (
			<ListItem key={item.id} item={item} deleteItem={handleDeleteItem} />
		));

	return <>{items.length <= 0 ? <></> : <table>{listItems}</table>}</>;
};

export default List;
