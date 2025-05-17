import Cookie from "js-cookie";

const AuthKey = "auth";

export const setAuth = (token: string) => {
	Cookie.set(AuthKey, token, {
		secure: true,
		sameSite: "strict",
		expires: 7,
	});
};

export const getAuth = () => {
	const token = Cookie.get(AuthKey);
	if (token) return JSON.parse(token);

	return null;
};
