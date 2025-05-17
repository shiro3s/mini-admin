import type React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Btn } from "@/components/btn";
import { TextInput } from "@/components/text-input";
import { PasswordInput } from "@/components/password-input";
import { useAppSelector } from "@/libs/redux";

import { useLoginForm } from "./useLogin";

import styles from "./style.module.css";

export const LoginPage: React.FC = () => {
	const location = useLocation();
	const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
	const { isSubmitting, register, handleSubmit, onSubmit, errors } =
		useLoginForm();

	const from = location.state?.from.pathname || "/dashboard";
	if (isAuth) return <Navigate to={from} replace />;

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Login</h1>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.field}>
						<label className={styles.label}>Username:</label>
						<TextInput placeHolder="Username" register={register("name")} />
						{!!errors.name?.message && (
							<div className={styles.error}>{errors.name.message}</div>
						)}
					</div>

					<div className={styles.field}>
						<label className={styles.label}>Password:</label>
						<PasswordInput
							placeHolder="Password"
							register={register("password")}
						/>
						{!!errors.password?.message && (
							<div className={styles.error}>{errors.password.message}</div>
						)}
					</div>

					<div className={styles.action}>
						<Btn block disabled={isSubmitting} type="submit">
							ログイン
						</Btn>
					</div>
				</form>
			</div>
		</div>
	);
};
