import { createSlice, createAction } from "@reduxjs/toolkit";

type State = {
	isAuthenticated: boolean;
};

const initialState: State = {
	isAuthenticated: false,
};

const ACTIONS = {
	LOGOUT: "auth/logout",
};

const logout = createAction(ACTIONS.LOGOUT);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(logout, (state) => {
			state.isAuthenticated = false;
		});
	},
});

export default authSlice.reducer;
