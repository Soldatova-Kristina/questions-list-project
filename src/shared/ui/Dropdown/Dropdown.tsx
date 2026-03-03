import clsx from "clsx";

import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useToggle } from "@/shared/hooks/useToggle";

import styles from "./Dropdown.module.css";
import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({ trigger, children, className }: DropdownProps) {
  const { value: isOpen, toggle, setFalse } = useToggle(false);
  const ref = useClickOutside<HTMLDivElement>(setFalse);

  return (
    <div ref={ref} className={clsx(styles.dropdown, className)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
      >
        {trigger}
      </div>

      {isOpen && <div className={styles.menu}>{children}</div>}
    </div>
  );
}
