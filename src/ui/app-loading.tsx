import { Loader2 } from "lucide-react";

export default function AppLoading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Loader2 className="animate-spin h-12 w-12 text-primary-1" />
    </div>
  );
}
