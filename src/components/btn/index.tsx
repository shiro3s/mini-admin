import type React from "react";

import styles from "./styles.module.css"

interface Props {
	block?: boolean;
	children: React.ReactNode;
	disabled?: boolean;
	type?: HTMLButtonElement["type"];
}

export const Btn: React.FC<Props> = ({
	block,
	children,
	disabled,
	type = "button",
}) => {
	return (
		<button 
			type={type} 
			disabled={disabled}
			className={styles.container}
			data-block={block}
		>
			{children}
		</button>
	);
};
