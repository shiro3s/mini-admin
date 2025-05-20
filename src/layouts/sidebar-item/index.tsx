import React from "react";
import {Link} from "react-router-dom"

import styles from "./styles.module.css"

interface Props {
  name: string;
  icon: React.ReactElement;
  path: string;
}

export const SidebarItem: React.FC<Props> = ({
  name,
  icon,
  path,
}) => {
  return (
    <li className={styles.item}>
      <Link to={path} className={styles.link}>
        {icon}
        <span className={styles.name}>{name}</span>
      </Link>
    </li>
  )
}
