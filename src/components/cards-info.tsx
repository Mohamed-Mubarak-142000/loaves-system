import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Cookie,
  GalleryHorizontalEnd,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const CardsInfo = () => {
  const { t } = useTranslation("home");
  const data = [
    {
      id: 1,
      title: t("cards_info.cards.title"),
      description: t("cards_info.cards.description"),
      icon: GalleryHorizontalEnd,
      number: t("cards_info.cards.number"),
    },
    {
      id: 2,
      title: t("cards_info.breads.title"),
      description: t("cards_info.breads.description"),
      icon: Cookie,
      number: t("cards_info.breads.number"),
    },
    {
      id: 3,
      title: t("cards_info.quality.title"),
      description: t("cards_info.quality.description"),
      icon: ShieldCheck,
      number: t("cards_info.quality.number"),
    },
    {
      id: 4,
      title: t("cards_info.clients.title"),
      description: t("cards_info.clients.description"),
      icon: UsersRound,
      number: t("cards_info.clients.number"),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16 w-full md:w-[90%] lg:w-[80%] mx-auto p-5">
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle className="text-center text-2xl text-[#C4841D]">
              {item.number}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex justify-around items-center">
              <h1 className="text-xl uppercase">{item.title}</h1>
              <item.icon size={80} color="#C4841D" />
            </CardDescription>
          </CardContent>
          <CardFooter className="text-center flex justify-center">
            <h1 className="text-lg">{item.description}</h1>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsInfo;
