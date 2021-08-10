const initialState = {
	items: [1, 2, 3],
};

const items = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_NUM':
			return { ...state, items: [...items, action.payload] };

		default:
			return state;
	}
};

export default items;
