import { sleep } from "@/utils/promise";
import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";

type AuthUser = {
	id: string;
	name: string;
	email: string;
};
type State = {
	user: AuthUser | null;
	isAuthenticated: boolean;
};

const initialState: State = {
	user: null,
	isAuthenticated: false,
};

const ACTIONS = {
	LOGIN: "auth/login",
	LOGOUT: "auth/logout",
};

const mockAPI = (name: string, password: string) =>
	new Promise<{ user: AuthUser }>((resolve, reject) => {
		if (name === "root" && password === "password") {
			resolve({
				user: { id: "12345", name: "admin", email: "admin@example.com" },
			});
		}

		reject();
	});

export const login = createAsyncThunk(
	ACTIONS.LOGIN,
	async (cred: { name: string; password: string }, { rejectWithValue }) => {
		try {
			await sleep(1000);
			const { user } = await mockAPI(cred.name, cred.password);
			return user;
		} catch (error) {
			return rejectWithValue("ログインに失敗しました。");
		}
	},
);

const logout = createAction(ACTIONS.LOGOUT);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.isAuthenticated = true;
			state.user = payload;
		});
		builder.addCase(login.rejected, (state) => {
			state.isAuthenticated = false;
			state.user = null;
		});
		builder.addCase(logout, (state) => {
			state.isAuthenticated = false;
			state.user = null
		});
	},
});

export default authSlice.reducer;
