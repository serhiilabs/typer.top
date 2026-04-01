import { PortalContainer, Toaster } from "@keybr/widget";
import { type ReactNode } from "react";
import { Footer } from "./Footer.tsx";
import { NavMenu } from "./NavMenu.tsx";
import * as styles from "./Template.module.less";

export function Template({
  path,
  children,
}: {
  readonly path: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <NavMenu currentPath={path} />
      </header>
      <main className={styles.main}>
        {children}
        <PortalContainer />
        <Toaster />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
