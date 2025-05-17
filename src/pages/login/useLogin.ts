import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";
import { nonEmpty, object, pipe, string } from "valibot";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/libs/redux";
import { login } from "@/store/auth";

type Form = {
	name: string;
	password: string;
};

const schema = object({
	name: pipe(string(), nonEmpty("Usernameを入力してください。")),
	password: pipe(string(), nonEmpty("Passwordを入力してください。")),
});

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Form>({
		resolver: valibotResolver(schema),
	});

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<Form> = async (data) => {
		const action = await dispatch(login(data));
		if (login.fulfilled.match(action)) navigate("/");
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isSubmitting,
	};
};
