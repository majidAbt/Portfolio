import Sidebar from "../Sidebar";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main
        className={`min-h-screen ml-[140px] bg-[#1d1d1d] ${styles.container}`}
      >
        <div className={`p-4 h-full static ${styles.containerIner}`}>
          {children}
        </div>
      </main>
    </>
  );
}
