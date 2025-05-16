import React from "react";

import { TextInput } from "@/components/text-input";
import { Btn } from "@/components/btn";

import styles from "./style.module.css";

export const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>ログイン</h1>

				<form className={styles.form}>
					<div className="">
						<TextInput />
					</div>

					<div className="">

          </div>

					<div className="">
						<Btn>ログイン</Btn>
					</div>
				</form>
			</div>
		</div>
	);
};
