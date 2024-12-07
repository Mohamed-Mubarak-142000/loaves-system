import {
  Cookie,
  GalleryHorizontalEnd,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import OneCard from "./one-card";

const CardsInfo = () => {
  const { t } = useTranslation("home");
  const data = [
    {
      id: 1,
      title: t("cards_info.cards.title"),
      description: t("cards_info.cards.description"),
      icon: GalleryHorizontalEnd,
      number: t("cards_info.cards.number"),
      height: 50,
    },
    {
      id: 2,
      title: t("cards_info.breads.title"),
      description: t("cards_info.breads.description"),
      icon: Cookie,
      number: t("cards_info.breads.number"),
      height: 150,
    },
    {
      id: 3,
      title: t("cards_info.quality.title"),
      description: t("cards_info.quality.description"),
      icon: ShieldCheck,
      number: t("cards_info.quality.number"),
      height: -50,
    },
    {
      id: 4,
      title: t("cards_info.clients.title"),
      description: t("cards_info.clients.description"),
      icon: UsersRound,
      number: t("cards_info.clients.number"),
      height: 150,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16 w-full md:w-[90%] lg:w-[80%] mx-auto p-5">
      {data.map((item) => (
        <OneCard item={item} key={item.id} />
      ))}
    </div>
  );
};
// 1*.5==>.5
// 2*.5=>1
// 3*.5=>1.5
export default CardsInfo;
