import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

export default forwardRef(function Select({ className, ...props }, ref) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-10 border w-full appearance-none truncate text-sm py-2 pl-3 pr-8 bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
    </div>
  );
});
