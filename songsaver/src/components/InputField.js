import React, { useState } from "react";
import { useDispatch } from "react-redux";

const InputField = () => {
	const dispatch = useDispatch();
	const [newSong, setNewSong] = useState();

	const [title, setTitle] = useState("");
	const [artist, setartist] = useState("");
	const [genre, setGenre] = useState("");
	const [rating, setRating] = useState("");

	const onInputTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		console.log(title);
		dispatch({
			type: "ADD_SONG",
			payload: {
				title: title,
				id: Math.ceil(Math.random() * 100),
				artist: "artiest4",
				genre: "rock",
				rating: "5",
			},
		});
		// doorgeven aan state array of hoger statemanagement
		setTitle("");
	};

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="Title of Song...."
					onChange={onInputTitle}
				></input>
				<button type="submit">ADD</button>
			</form>
			<h3>{title}</h3>
		</>
	);
};

export default InputField;
