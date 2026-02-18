import clsx from "clsx";
import { useState } from "react";

import { Icon } from "../Icon";

import styles from "./Accordion.module.css";
import type { AccordionProps } from "./Accordion.types";

export function Accordion({ title, children, className }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={clsx(styles.accordion, className)}>
      <button onClick={handleToggle} className={styles.header} aria-expanded={isOpen}>
        <div className={styles.title}>{title}</div>
        <Icon name="arrow-down" className={clsx(styles.icon, isOpen && styles.iconOpen)} />
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}
