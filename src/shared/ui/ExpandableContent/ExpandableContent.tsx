import clsx from "clsx";
import { useState } from "react";

import { Icon } from "../Icon";

import { Button } from "../Button";

import styles from "./ExpandableContent.module.css";

interface ExpandableContentProps {
  children: React.ReactNode;
  maxHeight?: number;
  expandText?: string;
  collapseText?: string;
}

export function ExpandableContent({
  children,
  maxHeight,
  expandText = "Развернуть",
  collapseText = "Свернуть",
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.content, !isExpanded && styles.collapsed)}
        style={{ maxHeight: isExpanded ? "none" : `${maxHeight}px` }}
      >
        {children}
      </div>
      <div className={styles["button-container"]}>
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="text">
          {isExpanded ? collapseText : expandText}
        </Button>
        <Icon name="arrow-down" />
      </div>
    </div>
  );
}
