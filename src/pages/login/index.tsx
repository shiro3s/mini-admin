import React from "react";

import { TextInput } from "@/components/text-input";
import { Btn } from "@/components/btn";

import styles from "./style.module.css";

export const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Login</h1>

				<form className={styles.form}>
					<div className={styles.field}>
						<label className={styles.label}>Username:</label>
						<TextInput placeHolder="Username" />
					</div>

					<div className={styles.field}>
						<label className={styles.label}>Password:</label>
						<TextInput placeHolder="Password" />
          </div>

					<div className={styles.action}>
						<Btn block>ログイン</Btn>
					</div>
				</form>
			</div>
		</div>
	);
};
