import React from "react";
import { Home, Users } from "lucide-react";

import { SidebarItem } from "../sidebar-item";

import styles from "./styles.module.css"

interface Props {
  sidebarOpen: boolean
}

const menuItems = [
	{ name: "ダッシュボード", icon: <Home size={20} />, path: "/dashboard" },
  { name: "ユーザー管理", icon: <Users size={20} />, path: "/users"}
];

export const Sidebar: React.FC<Props> = ({sidebarOpen}) => {
	return (
		<aside 
      className={styles.sidebar}
      data-open={sidebarOpen}
    >
			<div className={styles.header}>
				<h1 className={styles.title}>Admin Template</h1>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.list}>
					{menuItems.map(({ name, icon, path }) => (
						<SidebarItem name={name} icon={icon} path={path} key={name} />
					))}
				</ul>
			</nav>
		</aside>
	);
};
