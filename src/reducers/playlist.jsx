const initialState = [
	"Playlist"
];

let secondReducer;
export default secondReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_PLAYLIST":
			return state;
			break;
		default:
			return state;
	}
};