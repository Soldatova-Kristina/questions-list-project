import { Outlet } from "react-router-dom";

import Footer from "@/widgets/footer/ui/Footer";
import Header from "@/widgets/header/ui/Header";

import styles from "./layouts.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles["main_content"]}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
