import { Logo } from "@/shared/ui/Logo";

import styles from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        Header will be soon
      </div>
    </>
  );
}
