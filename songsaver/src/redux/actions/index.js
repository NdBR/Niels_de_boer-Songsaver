export const addSong = (song) => ({
	type: "ADD_SONG",
	payload: song,
});
export const deleteSong = (id) => ({
	type: "DELETE_SONG",
	payload: id,
});
export const deleteAllSongs = () => ({
	type: "DELETE_All_SONGS",
});
