import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

interface Notes {
  id: number;
  title: string;
}

interface SubscribeProps {
  title: string;
  notes: Notes[];
  valButton: string;
  onclick: () => void;
}

const Subscribe = ({ title, notes, valButton, onclick }: SubscribeProps) => {
  const { t } = useTranslation("home");
  return (
    <div className="bg-[#9a6819] p-5 rounded-xl w-full md:w-[400px]">
      <h1 className=" text-2xl font-bold capitalize my-2">{title}</h1>
      <ul>
        <h2 className="my-2 capitalize">
          {t("who_we_are_highlights.important_notes")}
        </h2>
        {notes?.map((item) => {
          return (
            <li key={item.id} style={{ listStyle: "inside", margin: "20px 0" }}>
              {item.title}
            </li>
          );
        })}
      </ul>

      <Button
        onClick={onclick}
        variant="default"
        className=" text-xl py-6 mt-5"
      >
        {valButton}
      </Button>
    </div>
  );
};

export default Subscribe;
