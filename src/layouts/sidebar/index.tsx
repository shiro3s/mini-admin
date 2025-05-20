import React from "react";
import { Home } from "lucide-react";

import { SidebarItem } from "../sidebar-item";

import styles from "./styles.module.css"

const menuItems = [
	{ name: "ダッシュボード", icon: <Home size={20} />, path: "/dashboard" },
];

export const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<div>
				<h1>管理画面</h1>
			</div>

			<nav>
				<ul>
					{menuItems.map(({ name, icon, path }) => (
						<SidebarItem name={name} icon={icon} path={path} key={name} />
					))}
				</ul>
			</nav>
		</aside>
	);
};
