import { Header } from ".//header";
import { Sidebar } from "./sidebar";

import { useLayout } from "./useLayout";

import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	const { sidebarOpen } = useLayout();

	return (
		<div className={styles.container}>
			<Sidebar />
			<div
        className={styles.content}
        data-open={sidebarOpen}
      >
				<Header />
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	);
};
