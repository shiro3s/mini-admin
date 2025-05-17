import React, { useCallback, useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

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

export const PasswordInput: React.FC<Props> = ({
	name,
	id,
	readOnly,
	disabled,
	minLength,
	maxLength,
	autoComplete = "off",
	placeHolder,
	tabIndex,
	register,
}) => {
	const [showPwdVisible, setShowPwdVisible] = useState(false);
	const handleToggle = useCallback(() => {
		setShowPwdVisible((pre) => !pre);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<input
					type={showPwdVisible ? "text" : "password"}
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

				<span className={styles.suffix} onClick={handleToggle}>
					{showPwdVisible ? (
						<Eye stroke="#a8abb2" width="16px" />
					) : (
						<EyeOff stroke="#a8abb2" width="16px" />
					)}
				</span>
			</div>
		</div>
	);
};
