const initialState = [
	{
		id: 1234,
		name: "First track"
	}
];

let firstReducer;
export default firstReducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TRACK":
			return [
				...state,
				action.payload
			];
			break;
		case "REMOVE_TRACK":
			return [
				...state.filter((elem) => {
					//"string" и "string" === -1 вернет false так как элемент присутствует
					//а если .filter() для текущего элемента возвращает false, то элемент не добавляется в новый массив  
					return elem.name.indexOf(action.payload) === -1;
				})
			];
			break;
		case "FETCH_TRACK_SUCCESS":
			return action.payload;
			break;
		default:
			return state;
	}
};