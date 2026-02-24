import clsx from "clsx";

import { useToggle } from "@/shared/hooks/useToggle";
import { Icon } from "../Icon";

import styles from "./Accordion.module.css";
import type { AccordionProps } from "./Accordion.types";

export function Accordion({ title, children, className }: AccordionProps) {
  const { value: isOpen, toggle } = useToggle(false);

  return (
    <div className={clsx(styles.accordion, className)}>
      <button onClick={toggle} className={styles.header} aria-expanded={isOpen}>
        <div className={styles.title}>{title}</div>
        <Icon name="arrow-down" className={clsx(styles.icon, isOpen && styles.iconOpen)} />
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}
