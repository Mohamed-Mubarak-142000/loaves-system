import LanguageSwitcher from "@/ui/langauge-switcher";
import Logo from "@/ui/Logo";
// import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import image from "@/assets/login.png";
import thumbsUp from "@/assets/thumbs-up.png";
import { ReactNode } from "react";

const NonAuthLayout = ({
  children,
  paddingPassword = false,
}: {
  children?: ReactNode;
  paddingPassword?: boolean;
}) => {
  //   const { t } = useTranslation("common");

  return (
    <div className="flex flex-col justify-center bg-basic-white items-center md:flex-row md:justify-start md:items-start">
      <main className="bg-neutral-10 h-screen flex justify-center items-center px-6  w-full ">
        <div
          className={`relative px-6 min-w-[100%] md:min-w-[80%] xl:min-w-[75%] 2xl:min-w-[60%] lg:px-20 ${
            paddingPassword ? "py-0" : "py-24"
          }  rounded-lg`}
        >
          <div className=" mb-28">
            <div className="absolute top-[24px] ltr:right-[60px] rtl:left-[60px]">
              <LanguageSwitcher />
            </div>
            <div>
              <Logo />
            </div>
          </div>
          <section>
            {/* <h1 className="mb-2 text-4xl  font-bold">{t("signInForm.header")}</h1> */}
            {/* <p className="text-sm">{t("signInForm.subTitle")}</p> */}
            <Outlet />
            {children}
          </section>
        </div>
      </main>
      <div
        className="w-full md:w-3/6 items-center h-screen   hidden md:flex md:items-end p-10  "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="login-background    py-4  md:px-6 lg:px-10 w-full  flex flex-col items-center md:items-start rounded-xl">
          <h1 className="px-4 py-2 flex flex-col lg:flex-row items-center  gap-x-4 lg:gap-x-2  bg-primary-1 w-fit text-base   whitespace-nowrap  rounded-md text-basic-white lg:text-xl mb-6 mt-2">
            {" "}
            <span>
              <img src={thumbsUp} />
            </span>
            {/* {t("signInForm.images_text.title_head")} */}
            sign in to your account to get started
          </h1>

          <p className=" text-base lg:text-xl text-basic-white leading-[2rem]  line-clamp-4">
            {/* {t("signInForm.images_text.subtext")} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NonAuthLayout;
