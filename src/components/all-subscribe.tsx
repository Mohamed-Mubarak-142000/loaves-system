import { useTranslation } from "react-i18next";
import Subscribe from "./one-subscribe";

interface FristDataItem {
  id: number;
  title: string;
}

interface Subscription {
  title: string;
  frist_data: FristDataItem[];
  button: string;
}

const AllSubscribe = () => {
  const { t } = useTranslation("home");

  const data: {
    first_subscribe: Subscription;
    second_subscribe: Subscription;
  } = {
    first_subscribe: {
      title: t("who_we_are_highlights.first_subscribe"),
      frist_data: [
        { id: 1, title: t("who_we_are_highlights.convenient") },
        { id: 2, title: t("who_we_are_highlights.simple_subscrip") },
        { id: 3, title: t("who_we_are_highlights.easy_payment") },
        { id: 4, title: t("who_we_are_highlights.high_quality") },
        { id: 5, title: t("who_we_are_highlights.year_round") },
      ],
      button: t("who_we_are_highlights.first_subscribe_button"),
    },
    second_subscribe: {
      title: t("who_we_are_highlights.second_subscribe"),
      frist_data: [
        { id: 1, title: t("who_we_are_highlights.convenient") },
        { id: 2, title: t("who_we_are_highlights.simple_subscrip") },
        { id: 3, title: t("who_we_are_highlights.easy_payment") },
        { id: 4, title: t("who_we_are_highlights.high_quality") },
        { id: 5, title: t("who_we_are_highlights.year_round") },
      ],
      button: t("who_we_are_highlights.second_subscribe_button"),
    },
  };

  return (
    <div className="flex justify-center flex-wrap p-5 items-center gap-5 my-10">
      {Object.values(data).map((item, index) => (
        <Subscribe
          key={index}
          title={item.title}
          notes={item.frist_data}
          valButton={item.button}
          onclick={() => {}}
          index={index}
        />
      ))}
    </div>
  );
};

export default AllSubscribe;
