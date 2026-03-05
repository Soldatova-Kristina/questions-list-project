import styles from "./SidebarSection.module.css";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className={styles["sidebar-section"]}>
      <p className={styles["sidebar-section__title"]}>{title}</p>
      <div className={styles["sidebar-section__list-column"]}>{children}</div>
    </div>
  );
}
