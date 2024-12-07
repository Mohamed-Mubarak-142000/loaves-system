import { MenuIcon } from "@/assets/icons";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarToggle({
  isCollapsed,
  setCollapsed,
  setExpanded,
}: {
  isCollapsed: boolean;
  setCollapsed: () => void;
  setExpanded: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full ms-1"
      onClick={() => {
        if (isCollapsed) {
          setExpanded();
        } else {
          setCollapsed();
        }
      }}
    >
      {isCollapsed ? (
        <MenuIcon size={20} />
      ) : (
        <X size={20} className="!text-error-100" />
      )}
    </Button>
  );
}
