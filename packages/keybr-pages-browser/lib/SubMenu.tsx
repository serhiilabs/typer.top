import { useIntlDisplayNames, usePreferredLocale } from "@keybr/intl";
import { Pages } from "@keybr/pages-shared";
import { Link as StaticLink } from "@keybr/widget";
import { useIntl } from "react-intl";
import * as styles from "./SubMenu.module.less";

const availableLocales = ["uk", "en"] as const;

export function SubMenu({ currentPath }: { readonly currentPath: string }) {
  return (
    <div className={styles.root}>
      <GithubLink />
      <LocaleSwitcher currentPath={currentPath} />
    </div>
  );
}

function GithubLink() {
  const { formatMessage } = useIntl();
  return (
    <StaticLink
      href="https://github.com/serhiilabs/keybr.com"
      target="github"
      title={formatMessage({
        id: "footer.githubLink.description",
        defaultMessage: "The source code is available on Github.",
      })}
    >
      Github
    </StaticLink>
  );
}

function LocaleSwitcher({ currentPath }: { readonly currentPath: string }) {
  const { formatLocalLanguageName } = useIntlDisplayNames();
  const preferredLocale = usePreferredLocale();
  return (
    <>
      {availableLocales.map((locale) => (
        <StaticLink
          key={locale}
          className={styles.localeLink}
          href={Pages.intlPath(currentPath, locale)}
        >
          {formatLocalLanguageName(locale)}
        </StaticLink>
      ))}
    </>
  );
}
