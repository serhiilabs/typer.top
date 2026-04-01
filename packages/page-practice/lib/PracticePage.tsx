import { KeyboardOptions, Language, Layout } from "@keybr/keyboard";
import { getPageData } from "@keybr/pages-shared";
import { Settings } from "@keybr/settings";
import { ViewSwitch } from "@keybr/widget";
import { views } from "./views.tsx";

const localeToLayout: Record<string, { language: Language; layout: Layout }> = {
  uk: { language: Language.UK, layout: Layout.UK_UA },
  en: { language: Language.EN, layout: Layout.EN_US },
};

const { locale } = getPageData() ?? { locale: "uk" };
const { language, layout } = localeToLayout[locale] ?? localeToLayout["uk"];

Settings.addDefaults(
  KeyboardOptions.default()
    .withLanguage(language)
    .withLayout(layout)
    .save(new Settings()),
);

export function PracticePage() {
  return <ViewSwitch views={views} />;
}
