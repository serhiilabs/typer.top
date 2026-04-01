import { Link as StaticLink } from "@keybr/widget";
import * as styles from "./Footer.module.less";

export function Footer() {
  return (
    <div className={styles.root}>
      <span className={styles.left}>
        typer.top - Open-source Ukrainian typing trainer
      </span>
      <span className={styles.right}>
        <StaticLink
          href="https://github.com/serhiilabs/keybr.com"
          target="github"
        >
          Github
        </StaticLink>
        <span>AGPL-3.0</span>
      </span>
    </div>
  );
}
