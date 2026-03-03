import clsx from "clsx";

import { Icon } from "@/shared/ui/Icon";

import styles from "./SocialLinks.module.css";
import type { SocialLinksProps } from "./SocialLinks.types";

const SOCIALS = [
  { name: "Figma", icon: "figma", url: "https://figma.com/@yeahub" },
  { name: "Telegram", icon: "telegram", url: "https://t.me/yeahub_frontend" },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@reactify-it" },
  { name: "TikTok", icon: "tiktok", url: "https://tiktok.com/@yeahub" },
  { name: "GitHub", icon: "github", url: "https://github.com/YeaHubTeam/yeahub-platfor" },
] as const;

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={clsx(styles.links, className)}>
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={styles.link}
        >
          <Icon name={social.icon} />
        </a>
      ))}
    </div>
  );
}
