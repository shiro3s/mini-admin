import React from "react";
import { Menu, Bell, UserCircle } from "lucide-react";

import styles from "./styles.module.css"

interface Props {
  toggleSidebar: () => void;
}

export const Header: React.FC<Props> = ({
  toggleSidebar
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button 
          type="button" 
          className={styles.menu}
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
      </div>

      <div className={styles.right}>
        <button 
          type="button" 
          aria-label="通知"
          className={styles.badge}
        >
          <Bell size={22} />
        </button>
        <UserCircle size={32} className={styles.icon} />
      </div>
    </header>
  )
}
