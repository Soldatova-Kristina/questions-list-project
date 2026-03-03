import { Icon } from "@/shared/ui/Icon";
import { Link } from "@/shared/ui/Link";

import styles from "./QuestionCardMenu.module.css";

interface QuestionCardMenuProps {
  questionId: number;
}

export function QuestionCardMenu({ questionId }: QuestionCardMenuProps) {
  const menuItems = [
    { to: `/question/${questionId}`, icon: "more-icon", label: "More" },
    { to: "/404", icon: "graduation-cap", label: "Learn" },
    { to: "/404", icon: "repeat", label: "Repeat" },
    { to: "/404", icon: "heart", label: "Favorite" },
  ] as const;

  return (
    <ul className={styles["question-menu"]}>
      {menuItems.map((item) => (
        <li key={item.label} className={styles["question-menu__item"]}>
          <Link to={item.to} className={styles["question-menu__link"]}>
            <Icon size={16} name={item.icon} />
            <span className={styles["question-menu__text"]}>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
