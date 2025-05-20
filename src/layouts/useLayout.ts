import { useCallback, useState } from "react";

export const useLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = useCallback(() => {
		setSidebarOpen((pre) => !pre);
	}, []);

	return {
		sidebarOpen,
		toggleSidebar,
	};
};
