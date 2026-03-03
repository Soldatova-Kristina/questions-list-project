import { Logo } from "@/shared/ui/Logo";
import { SocialLinks } from "@/shared/ui/SocialLinks/SocialLinks";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__logo}>
          <Logo variant="footer" />
        </div>

        <div className={styles.footer__text}>
          <p className={styles.footer__slogan}>Выбери, каким будет IT завтра, вместе с нами</p>
          <p className={styles.footer__description}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT‑сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
          </p>
        </div>
      </div>

      <hr className={styles.footer__divider} />

      <div className={styles.footer__bottom}>
        <div className={styles.footer__meta}>
          <span>© 2024 YeaHub</span>
          <button className={styles.footer__link} type="button">
            Документы
          </button>
        </div>

        <div className={styles.footer__socials}>
          <span className={styles["footer__socials-title"]}>
            Ищите нас и в других соцсетях @yeahub_it
          </span>

          <SocialLinks className={styles.socialsIcons} />
        </div>
      </div>
    </footer>
  );
}
