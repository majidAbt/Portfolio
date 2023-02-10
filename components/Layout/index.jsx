import { useState } from "react";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <Sidebar isSidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={` md:ml-[140px] lg:ml-[140px] xl:ml-[140px] bg-[#1d1d1d] relative ${styles.container}`}
      >
        <div className={`p-4 h-full relative ${styles.containerIner} w-full`}>
          {children}
        </div>
      </div>
    </>
  );
}
