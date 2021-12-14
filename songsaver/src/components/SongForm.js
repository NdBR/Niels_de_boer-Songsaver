import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../redux/actions";

const SongForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [genre, setGenre] = useState("");
	const [rating, setRating] = useState("");

	const onInputTitle = (event) => {
		setTitle(event.target.value);
	};
	const onInputArtist = (event) => {
		setArtist(event.target.value);
	};
	const onInputGenre = (event) => {
		setGenre(event.target.value);
	};
	const onInputRating = (event) => {
		setRating(event.target.value);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();

		console.log(title);
		dispatch(
			addSong({
				title: title,
				id: `${Date.now()}`,
				artist: artist,
				genre: genre,
				rating: rating,
			})
		);
		setTitle("");
		setArtist("");
		setGenre("");
		setRating("");
	};

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<label>
					<input
						type="text"
						name="title"
						value={title}
						placeholder="Title of Song...."
						onChange={onInputTitle}
					></input>
				</label>
				<label>
					<input
						type="text"
						name="title"
						value={artist}
						placeholder="Artist of Song...."
						onChange={onInputArtist}
					></input>
				</label>
				<label>
					<select value={genre} name="genre" onChange={onInputGenre}>
						<option>-- Please Choose a genre --</option>
						<option value="Rock">Rock</option>
						<option value="Jazz">Jazz</option>
						<option value="Classic">Classic</option>
						<option value="Disco">Disco</option>
						<option value="Other">Other</option>
					</select>
				</label>
				<label>
					<select value={rating} name="rating" onChange={onInputRating}>
						<option>-- Please Choose a rating --</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</label>
				<label>
					<button type="submit">ADD</button>
				</label>
			</form>
		</>
	);
};

export default SongForm;
