const initialState = "";

let filterTracks;
export default filterTracks = (state = initialState, action) => {
	switch(action.type) {
		case "FIND_TRACK":
			return action.payload;
			break;
		default:
			return state;
	}
};