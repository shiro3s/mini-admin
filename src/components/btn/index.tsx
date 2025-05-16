import type React from "react";

interface Props {
	children: React.ReactNode;
	disabled?: boolean;
	type?: HTMLButtonElement["type"];
}

export const Btn: React.FC<Props> = ({
	children,
	disabled,
	type = "button",
}) => {
	return (
		<button type={type} disabled={disabled}>
			{children}
		</button>
	);
};
