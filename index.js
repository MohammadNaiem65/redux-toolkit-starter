const store = require('./redux/app/store');
const { fetchUsers } = require('./redux/users/usersSlice');

store.subscribe(() => {});

store.dispatch(fetchUsers());
