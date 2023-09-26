const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

// initial state
const initialState = {
	loading: false,
	users: [],
	error: '',
};

// users thunk
const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/albums?_limit=5'
	);
	const users = await response.json();

	return users;
});

// create user slice
const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.loading = true;
			state.error = '';
		});

		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = action.payload;
			state.error = '';
		});

		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

module.exports = {
	default: usersSlice.reducer,
	fetchUsers: fetchUsers,
};
