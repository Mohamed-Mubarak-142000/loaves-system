import { useTranslation } from "react-i18next";

const LoginInfo = () => {
  const { t } = useTranslation("auth");
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#C4841D] capitalize">
        {t("login.title")}
      </h1>
      <p className="text-lg mt-5 md:mt-10">{t("login.subtitle")} </p>
    </div>
  );
};

export default LoginInfo;
