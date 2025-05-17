import type React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import styles from "./styles.module.css";

interface Props {
	name?: string;
	id?: string;
	readOnly?: boolean;
	disabled?: boolean;
	minLength?: number;
	maxLength?: number;
	autoComplete?: string;
	placeHolder?: string;
	tabIndex?: number;
	register?: UseFormRegisterReturn;
}

export const TextInput: React.FC<Props> = ({
	name,
	id,
	readOnly,
	disabled,
	minLength,
	maxLength,
	autoComplete = "off",
	placeHolder,
	tabIndex,
	register
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<input
					type="text"
					className={styles.input}
					name={name}
					id={id}
					readOnly={readOnly}
					disabled={disabled}
					minLength={minLength}
					maxLength={maxLength}
					autoComplete={autoComplete}
					placeholder={placeHolder}
					tabIndex={tabIndex}
					{...register}
				/>
			</div>
		</div>
	);
};
