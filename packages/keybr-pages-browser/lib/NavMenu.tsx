import {
  type AnyUser,
  type PageInfo,
  Pages,
  usePageData,
} from "@keybr/pages-shared";
import { Link as StaticLink } from "@keybr/widget";
import { clsx } from "clsx";
import { useIntl } from "react-intl";
import { NavLink } from "react-router";
import * as styles from "./NavMenu.module.less";
import { ThemeSwitcher } from "./themes/ThemeSwitcher.tsx";

export function NavMenu({ currentPath }: { readonly currentPath: string }) {
  const { publicUser } = usePageData();
  return (
    <nav className={styles.root}>
      <NavLink className={styles.logo} to={Pages.practice.path}>
        typer.top
      </NavLink>

      <MenuItemLink page={Pages.practice} />
      <MenuItemLink page={Pages.typingTest} />
      <MenuItemLink page={Pages.help} />

      <div className={styles.spacer} />

      <StaticLink
        className={styles.localeLink}
        href={Pages.intlPath(currentPath, "uk")}
      >
        UA
      </StaticLink>
      <StaticLink
        className={styles.localeLink}
        href={Pages.intlPath(currentPath, "en")}
      >
        EN
      </StaticLink>
      <ThemeSwitcher />
      <MenuItemLink page={Pages.profile} />
      <AccountLink user={publicUser} />
    </nav>
  );
}

function MenuItemLink({
  page: {
    path,
    link: { label, title },
  },
}: {
  readonly page: PageInfo;
}) {
  const { formatMessage } = useIntl();
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(styles.link, isActive && styles.isActive)
      }
      to={path}
      title={title && formatMessage(title)}
    >
      {formatMessage(label)}
    </NavLink>
  );
}

function AccountLink({ user }: { readonly user: AnyUser }) {
  const { formatMessage } = useIntl();
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(styles.accountLink, isActive && styles.isActive)
      }
      to={Pages.account.path}
    >
      {user.id != null
        ? user.name
        : formatMessage({
            id: "t_Sing_In",
            defaultMessage: "Sign-In",
          })}
    </NavLink>
  );
}
