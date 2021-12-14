export const addSong = (song) => ({
	type: "ADD_SONG",
	payload: song,
});
export const deleteSong = (id) => ({
	type: "DELETE_SONG",
	payload: id,
});

export const deleteAllSongs = (payload) => ({
	type: "DELETE_All_SONGS",
	payload: payload,
});
