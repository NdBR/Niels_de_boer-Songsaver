const initState = {
	songs: [
		{ id: "4", title: "song4", artist: "artiest4", genre: "rock", rating: "5" },
	],
};
const reducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_SONG":
			return { ...state, songs: [...state.songs, action.payload] };

		case "DELETE_All_SONGS":
			return { ...state, songs: [] };

		case "DELETE_SONG":
			return {
				...state,
				songs: state.songs.filter((song) => song.id !== action.payload),
			};

		default:
			return state;
	}
};
export default reducer;
