import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { nonEmpty, object, pipe, string } from "valibot";

type Form = {
	name: string;
	password: string;
};

const schema = object({
	name: pipe(string(), nonEmpty()),
	password: pipe(string(), nonEmpty()),
});

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Form>({
		resolver: valibotResolver(schema),
	});

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
	};
};
