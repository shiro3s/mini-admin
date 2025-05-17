import { setAuth, getAuth } from "@/utils/auth";
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
	isAuthenticated: !!getAuth(),
};

const ACTIONS = {
	LOGIN: "auth/login",
	LOGOUT: "auth/logout",
	GET_USER_INFO: "auth/getUserInfo",
};

const mockLoginAPI = (name: string, password: string) =>
	new Promise<{ user: AuthUser; token: string }>((resolve, reject) => {
		if (name === "root" && password === "password") {
			resolve({
				user: { id: "12345", name: "admin", email: "admin@example.com" },
				token: "T6l+Weg-353Fy8cVmq7j+jT-2_Rrja5Z",
			});
		}

		reject();
	});

const mockGetUserInfoAPI = (token: string) =>
	new Promise<{ user: AuthUser }>((resolve, reject) => {
		if (token === "T6l+Weg-353Fy8cVmq7j+jT-2_Rrja5Z") {
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
			const { user, token } = await mockLoginAPI(cred.name, cred.password);
			setAuth(JSON.stringify(token));
			return user;
		} catch (error) {
			return rejectWithValue("ログインに失敗しました。");
		}
	},
);

export const getUserInfo = createAsyncThunk(
	ACTIONS.GET_USER_INFO,
	async (token: string, { rejectWithValue }) => {
		try {
			await sleep(1000);
			const { user } = await mockGetUserInfoAPI(token);
			return user;
		} catch {
			return rejectWithValue("データの取得に失敗しました。");
		}
	},
);

const logout = createAction(ACTIONS.LOGOUT);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
			state.user = payload;
			state.isAuthenticated = true;
		});
		builder.addCase(getUserInfo.rejected, (state) => {
			state.user = null;
			state.isAuthenticated = false;
		});
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
			state.user = null;
		});
	},
});

export default authSlice.reducer;
