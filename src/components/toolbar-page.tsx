import { cn } from "@/lib/utils";
import { LampCeiling } from "lucide-react";

interface ToolbarPageProps {
  Icon?: React.ElementType;
  title: string;
  bgcolor?: string;
  renderButton?: React.ReactNode;
  subtitle?: string;
}
const ToolbarPage = ({
  Icon = LampCeiling,
  title,
  bgcolor = "bg-primary-20",
  renderButton,
  subtitle,
}: ToolbarPageProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-4 mb-3 mx-3 rounded-md ",
        bgcolor
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Icon />
          <h2 className="font-semibold text-2xl">{title}</h2>
        </div>

        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      {renderButton}
    </div>
  );
};

export default ToolbarPage;
