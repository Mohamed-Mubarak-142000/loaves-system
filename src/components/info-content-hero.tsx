import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const InfoContentHero = () => {
  const { t } = useTranslation("home");
  return (
    <div className="flex items-center justify-center flex-col  px-5 gap-5 w-full md:w-1/2">
      <h1 className="text-4xl text-gray-200 font-bold capitalize">
        {t("home.welcome_title")}
        <span className="text-[#C4841D]">{t("home.title")}</span>
      </h1>
      <p className="text-md font-semibold text-gray-300 ">
        {t("home.subtitle")}
      </p>

      <Button className="bg-[#C4841D] hover:bg-[#7c5b25] text-xl py-6">
        {t("home.get_started_button")}
      </Button>
    </div>
  );
};

export default InfoContentHero;
