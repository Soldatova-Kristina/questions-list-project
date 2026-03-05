import { Button } from "@/shared/ui/Button";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Icon } from "@/shared/ui/Icon";
import { Link } from "@/shared/ui/Link";
import { Logo } from "@/shared/ui/Logo";

import { BurgerMenu } from "./BurgerMenu";
import styles from "./Header.module.css";

export default function Header() {
  const navLinks = [
    { to: "/questions", label: "База вопросов" },
    { to: "/trainer", label: "Тренажер" },
    { to: "/materials", label: "Материалы" },
    { to: "/skills", label: "Навыки(hh)" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles["header__nav-links"]}>
        <Logo variant="header" />
        <nav className={styles["header__nav"]}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles["header__nav-link"]}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles["header__menu-toggle"]}>
        <Dropdown
          trigger={
            <button className={styles.menuButton}>
              <Icon name="burger_btn" />
            </button>
          }
        >
          <BurgerMenu />
        </Dropdown>
      </div>
      <div className={styles.header__auth}>
        <Link to="/404">
          <Button variant="text">Вход</Button>
        </Link>

        <Link to="/login">
          <Button variant="primary">Регистрация</Button>
        </Link>
      </div>
    </header>
  );
}
