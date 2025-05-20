import {useState} from "react";

export const useLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return {
    sidebarOpen
  }
}
