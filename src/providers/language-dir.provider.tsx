import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DirectionProvider } from "@radix-ui/react-direction";

export default function LanguageDirProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  const documentDir = i18n.dir();

  console.log(documentDir);

  useEffect(() => {
    document.documentElement.dir = documentDir;
  }, [documentDir]);

  return <DirectionProvider dir={documentDir}>{children}</DirectionProvider>;
}
