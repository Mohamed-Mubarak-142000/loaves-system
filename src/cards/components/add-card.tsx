import ToolbarPage from "@/components/toolbar-page";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormAddCard from "./form-add-card";
import { Link } from "react-router-dom";
import { ArrowRightFromLine } from "lucide-react";
import { useTranslation } from "react-i18next";

const AddCard = () => {
  const { t } = useTranslation("add-card");
  return (
    <ScrollArea className="h-[90vh]">
      <ToolbarPage
        title={t("add_form.title")}
        subtitle={t("add_form.subtitle")}
        renderButton={
          <div className="flex bg-primary-70 px-5 py-3 rounded gap-2 items-center justify-center">
            <Link className="text-lg" to="/cards">
              {t("add_form.all_cards")}
            </Link>

            <ArrowRightFromLine className="text-md text-gray-500" />
          </div>
        }
      />
      <FormAddCard />
    </ScrollArea>
  );
};

export default AddCard;
