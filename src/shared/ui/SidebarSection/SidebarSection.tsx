import styles from "./SidebarSection.module.css";
interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  variant?: "row" | "column";
}

export default function SidebarSection({ title, children, variant = "row" }: SidebarSectionProps) {
  return (
    <div className={styles["sidebar-section"]}>
      {title && <p className={styles["sidebar-section__title"]}>{title}</p>}
      <div className={styles[`sidebar-section__list-${variant}`]}>{children}</div>
    </div>
  );
}
