import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const ErrorPage = ({ type = "error" }: { type?: "error" | "404" }) => {
  const { t } = useTranslation("common");
  const headerText =
    type === "error" ? t("error_page.error_title") : t("error_page.404.title");
  const messageTextLine1 =
    type === "error"
      ? t("error_page.error_message")
      : t("error_page.404.message");

  const messageTextLine2 =
    type === "error" ? t("error_page.try_again") : t("error_page.404.subtext");

  const buttonText =
    type === "error"
      ? t("error_page.retry_button")
      : t("error_page.404.button");

  const buttonOnClick = () => {
    if (type === "error") {
      window.location.reload();
    }
    if (type === "404") {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <ErrorIllustration />
      <p className="mt-8 mb-2 text-3xl font-bold text-neutral-50">
        {headerText}
      </p>
      <p className="text-neutral-50">{messageTextLine1}</p>
      <p className="text-neutral-50">{messageTextLine2}</p>
      <Button variant="default" className="w-3/12 mt-5" onClick={buttonOnClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ErrorPage;

const ErrorIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="341"
    height="159"
    fill="none"
    viewBox="0 0 341 159"
  >
    <path
      fill="#5D87FF"
      fillOpacity="0.06"
      fillRule="evenodd"
      d="M72.459 147.25H215.8c.811 0 1.602-.09 2.363-.262a10.71 10.71 0 002.363.262h81.91c6.089 0 11.026-5.093 11.026-11.375s-4.937-11.375-11.026-11.375h-9.451c-6.09 0-11.027-5.093-11.027-11.375s4.937-11.375 11.027-11.375h29.928c6.09 0 11.027-5.093 11.027-11.375S329.004 79 322.914 79H288.26c6.09 0 11.026-5.093 11.026-11.375S294.35 56.25 288.26 56.25H187.448c6.089 0 11.026-5.093 11.026-11.375S193.537 33.5 187.448 33.5H97.662c-6.09 0-11.027 5.093-11.027 11.375S91.572 56.25 97.662 56.25H34.654c-6.09 0-11.026 5.093-11.026 11.375S28.564 79 34.654 79h39.38c6.09 0 11.026 5.093 11.026 11.375s-4.936 11.375-11.026 11.375H11.026C4.936 101.75 0 106.843 0 113.125S4.937 124.5 11.026 124.5H72.46c-6.09 0-11.027 5.093-11.027 11.375S66.37 147.25 72.46 147.25zm256.756 0c6.09 0 11.026-5.093 11.026-11.375 0-6.283-4.936-11.375-11.026-11.375s-11.026 5.092-11.026 11.375c0 6.282 4.936 11.375 11.026 11.375z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#FEFEFE"
      fillRule="evenodd"
      d="M111.116 157c-19.744 0-35.75-15.642-35.75-34.938 0-19.295 16.006-34.937 35.75-34.937.84 0 1.673.028 2.498.084a55.61 55.61 0 01-.873-9.834c0-30.514 24.737-55.25 55.25-55.25 24.361 0 45.039 15.766 52.388 37.65a50.976 50.976 0 015.3-.275c27.372 0 49.562 21.826 49.562 48.75 0 25.578-20.027 46.682-45.5 48.715V157H111.116zm19.494 0h-11.318 11.318z"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#5D87FF"
      strokeLinecap="round"
      strokeWidth="2.5"
      d="M130.61 157h-11.318m-8.176 0c-19.744 0-35.75-15.642-35.75-34.938 0-19.295 16.006-34.937 35.75-34.937.84 0 1.673.028 2.498.084a55.61 55.61 0 01-.873-9.834c0-30.514 24.737-55.25 55.25-55.25 24.361 0 45.039 15.766 52.388 37.65a50.976 50.976 0 015.3-.275c27.372 0 49.562 21.826 49.562 48.75 0 25.578-20.027 46.682-45.5 48.715V157H111.116z"
    ></path>
    <path
      fill="#E8F0FE"
      fillRule="evenodd"
      d="M151.111 34.057c0 52.362 47.159 95.51 107.88 101.335-7.609 9.357-19.361 15.705-32.748 16.703v.03H117.199c-13.23 0-35.333-5.574-35.333-29.984 0-24.41 17.183-29.984 35.333-29.984.772 0 1.537.024 2.296.072-.527-2.739-.62-5.562-.802-8.44-1.233-19.44 7.248-43.94 32.448-51.914-.02.727-.03 1.453-.03 2.182zm17.069 81.925c-4.937 0-8.94 3.955-8.94 8.835 0 4.879 4.003 8.835 8.94 8.835 4.938 0 8.941-3.956 8.941-8.835 0-4.88-4.003-8.835-8.941-8.835z"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#5D87FF"
      strokeWidth="2.5"
      d="M168.804 134.25a8.937 8.937 0 008.937-8.938 8.937 8.937 0 00-8.937-8.937 8.938 8.938 0 100 17.875z"
    ></path>
    <path
      stroke="#5D87FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M143.616 106.625l11.375-8.926-11.375-8.498M193.991 106.625l-11.375-8.926 11.375-8.498"
    ></path>
    <path
      stroke="#5D87FF"
      strokeLinecap="round"
      strokeOpacity="0.7"
      strokeWidth="2.5"
      d="M184.241 38.375c10.577 2.8 18.929 11.07 21.841 21.601"
    ></path>
    <path
      stroke="#5D87FF"
      strokeOpacity="0.7"
      strokeWidth="2"
      d="M218.366 10.75a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z"
    ></path>
    <path
      fill="#5D87FF"
      fillOpacity="0.7"
      d="M268.741 36.75a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z"
    ></path>
    <path
      stroke="#5D87FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.7"
      strokeWidth="2.5"
      d="M230.972 23.355l13.582 13.583m.207-13.583l-13.582 13.583 13.582-13.583zM77.648 52.344l9.75 9.75m0-9.75l-9.75 9.75 9.75-9.75z"
    ></path>
    <path
      fill="#5D87FF"
      fillOpacity="0.7"
      d="M99.741 41.625a4.875 4.875 0 100-9.749 4.875 4.875 0 000 9.749z"
    ></path>
  </svg>
);
