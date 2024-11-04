import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { MessageSquareIcon } from "lucide-react";
import GoogleIcon from "@mui/icons-material/Google";
import SocialMediaIcon from "./one-social-media-icon";
import { useTranslation } from "react-i18next";

const SocialMediaIcons = () => {
  const { t } = useTranslation("auth");
  const data = [
    {
      id: 1,
      icon: FacebookIcon,
      title: t("social_media.facebook"),
      color: "#3b5998",
    },
    {
      id: 2,
      icon: WhatsAppIcon,
      title: t("social_media.whatsapp"),
      color: "#25D366",
    },
    {
      id: 3,
      icon: InstagramIcon,
      title: t("social_media.instagram"),
      color: "#E4405F",
    },
    {
      id: 4,
      icon: MessageSquareIcon,
      title: t("social_media.message"),
      color: "#0084FF",
    },
    {
      id: 5,
      icon: GoogleIcon,
      title: t("social_media.google"),
      color: "#DB4437",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {data.map((item, index) => (
        <SocialMediaIcon
          key={item.id}
          index={index}
          icon={item.icon}
          color={item.color}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
