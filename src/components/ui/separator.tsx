/*************  ✨ Windsurf Command ⭐  *************/
import { cn } from "@/lib/utils";

export interface Separator {
  className?: string;
}

export const Separator = ({ className }: Separator) => (
  <hr
    className={cn(
      "h-px bg-gray-300 border-0 dark:bg-gray-600",
      className
    )}
  />
);

export default Separator;