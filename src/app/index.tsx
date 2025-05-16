import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthRoute } from "./AuthRoute";
import { LoginPage } from "@/pages/login";

import { Layout } from "@/layouts";
import { DashboardPage } from "@/pages/dashboard";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" Component={LoginPage} />

				<Route
					path="/*"
					element={
						<AuthRoute>
							<Layout>
								<Routes>
									<Route
										path="/"
										element={<Navigate to="/dashboard" replace />}
									/>
									<Route path="dashboard" Component={DashboardPage} />
								</Routes>
							</Layout>
						</AuthRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
