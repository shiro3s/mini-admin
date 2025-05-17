import { useEffect } from "react";

import { getAuth } from "@/utils/auth";
import { getUserInfo } from "@/store/auth";
import { useAppDispatch } from "@/libs/redux";

export const useAuthState = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const token = getAuth();
		if (token) dispatch(getUserInfo(token));
	}, [dispatch]);
};
