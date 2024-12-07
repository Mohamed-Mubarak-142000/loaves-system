import { LANGUAGES } from "../lib/i18next/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ARFlag from "@/assets/ar-flag.jpg";
import ENFlag from "@/assets/en-flag.jpg";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LanguageIcon = ({
  className,
  alt,
  src,
  fallback = "EN",
}: {
  className?: string;
  alt: string;
  src: string | null;
  fallback?: keyof typeof LANGUAGES;
}) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src || ""} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

const languages: {
  lang: LANGUAGES;
  title: string;
  flagSrc: string;
  alt: string;
  fallback: keyof typeof LANGUAGES;
}[] = [
  {
    lang: LANGUAGES.EN,
    title: "English",
    alt: "en",
    flagSrc: ENFlag,
    fallback: "EN",
  },
  {
    lang: LANGUAGES.AR,
    title: "العربية",
    alt: "ar",
    flagSrc: ARFlag,
    fallback: "AR",
  },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation("common");

  const changeLanguage = (language: string) => {
    if (i18n.language !== language) {
      localStorage.setItem("i18nextLng", language);
      window.location.reload();
    }
  };

  const selectedLanguage =
    languages.find((language) => language.lang === i18n.language) ||
    languages[0];

  //if no language is selected, default to english
  useEffect(() => {
    if (i18n.language !== LANGUAGES.AR && i18n.language !== LANGUAGES.EN) {
      changeLanguage(LANGUAGES.AR);
    }
  }, [i18n.language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full w-7 h-7"
        >
          {selectedLanguage ? (
            <LanguageIcon
              className="w-6 h-6 rounded-full"
              alt={selectedLanguage.alt}
              src={null}
              fallback={selectedLanguage.fallback}
            />
          ) : (
            <LanguageIcon
              className="w-6 h-6 rounded-full"
              alt={languages[0].alt}
              src={null}
              fallback={languages[0].fallback}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 me-4">
        <DropdownMenuLabel>
          <h6 className="text-sm font-medium leading-6">
            {t("language_switcher.select_language")}
          </h6>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedLanguage?.lang || LANGUAGES.EN}
          onValueChange={(lang) => {
            changeLanguage(lang as LANGUAGES);
          }}
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem
              disabled={i18n.language === language.lang}
              key={language.lang}
              value={language.lang}
              className="flex items-center cursor-pointer"
            >
              <span className="ms-3">{language.title}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
