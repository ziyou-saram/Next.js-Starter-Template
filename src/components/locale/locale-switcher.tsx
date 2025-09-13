import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      value={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "ru",
          label: t("ru"),
        },
      ]}
      label={t("label")}
    />
  );
}
