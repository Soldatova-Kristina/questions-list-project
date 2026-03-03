import { Link } from "@/shared/ui/Link";

import styles from "./BurgerMenu.module.css";

export function BurgerMenu() {
  const menuItems = [
    { to: "/404", label: "База вопросов" },
    { to: "/404", label: "Тренажер" },
    { to: "/404", label: "Материалы" },
    { to: "/404", label: "Навыки(hh)" },
    { to: "/404", label: "Вход" },
    { to: "/404", label: "Регистрация" },
  ] as const;

  return (
    <ul className={styles["burger-menu"]}>
      {menuItems.map((item) => (
        <li key={item.label} className={styles["burger-menu__item"]}>
          <Link to={item.to} className={styles["burger-menu__link"]}>
            <span className={styles["burger-menu__text"]}>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
