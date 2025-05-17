import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";
import { LoginPage } from "@/pages/login";

import { Layout } from "@/layouts";
import { DashboardPage } from "@/pages/dashboard";
import { useAuthState } from "./useAuthState";

export const App = () => {
	useAuthState();

	return (
		<Routes>
			<Route path="/login" Component={LoginPage} />

			<Route
				path="/*"
				element={
					<AuthRoutes>
						<Layout>
							<Routes>
								<Route
									path="/"
									element={<Navigate to="/dashboard" replace />}
								/>
								<Route path="dashboard" Component={DashboardPage} />
							</Routes>
						</Layout>
					</AuthRoutes>
				}
			/>
		</Routes>
	);
};
