import React from "react";
import {Link} from "react-router-dom"

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
    <li>
      <Link to={path}>
        {icon}
        <span>{name}</span>
      </Link>
    </li>
  )
}
