import React from "react";
import ListItem from "./ListItem";
import { deleteSong } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
	const items = useSelector((state) => state.songs);

	const dispatch = useDispatch();
	// delete item
	const handleDeleteItem = (event) => dispatch(deleteSong(event.target.value));

	const listItems =
		items &&
		items.map((item) => (
			<ListItem key={item.id} item={item} deleteItem={handleDeleteItem} />
		));

	return <>{items.length <= 0 ? <></> : <table>{listItems}</table>}</>;
};

export default List;
