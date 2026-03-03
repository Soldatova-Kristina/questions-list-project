import { Link } from "react-router-dom";

import { Icon } from "@/shared/ui/Icon/Icon";

import styles from "./Error404Page.module.css";

export default function Error404Page() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__content}>
        <Icon name="404" />
        <h1 className={styles.errorPage__title}>Страница не найдена</h1>
        <Link to="/" className={styles.errorPage__button}>
          Вернуться назад
        </Link>
      </div>
    </div>
  );
}
