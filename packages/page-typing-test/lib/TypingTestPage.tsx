import { Language } from "@keybr/keyboard";
import { getPageData } from "@keybr/pages-shared";
import { Settings } from "@keybr/settings";
import { ViewSwitch } from "@keybr/widget";
import { typingTestProps } from "./settings.ts";
import { views } from "./views.tsx";

const localeToLanguage: Record<string, Language> = {
  uk: Language.UK,
  en: Language.EN,
};

const { locale } = getPageData() ?? { locale: "uk" };
const language = localeToLanguage[locale] ?? Language.UK;

Settings.addDefaults(new Settings().set(typingTestProps.language, language));

export function TypingTestPage() {
  return <ViewSwitch views={views} />;
}
