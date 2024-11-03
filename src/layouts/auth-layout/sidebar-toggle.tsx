import { MenuSquareIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarToggle({
  isCollapsed,
}: //   setCollapsed,
//   setExpanded,
{
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
        // isCollapsed ? setExpanded() : setCollapsed();
      }}
    >
      {isCollapsed ? (
        <MenuSquareIcon size={20} />
      ) : (
        <X size={20} className="!text-error-100" />
      )}
    </Button>
  );
}
