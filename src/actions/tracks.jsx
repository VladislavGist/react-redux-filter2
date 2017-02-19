let mockApiData = [
	{
		id: 1,
		name: "First track"
	},
	{
		id: 2,
		name: "Second track"
	}
];

export let asycnGetTracks = () => {
	return dispatch => {
		setTimeout(() => {
			console.log("get tracks");
			dispatch({type: "FETCH_TRACK_SUCCESS", payload: mockApiData})
		}, 1000);
	}
};