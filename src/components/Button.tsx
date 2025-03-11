import { cn } from "@/lib/utils";

interface Button {
  theme: ThemeType;
  type: "button" | "reset" | "submit";
  children?: React.ReactNode;
}

export default function Button({ theme = "dark", type = "submit", children = "Submit" }: Button) {
  return (
    <button
      className={cn(
        "rounded-medium btn-shadow inline-flex items-center gap-1 bg-linear-to-b px-4 py-2 text-lg font-semibold text-nowrap transition focus:outline-0 active:to-neutral-500",
        theme === "dark"
          ? "to-neutral-000 from-neutral-300 text-neutral-900"
          : "text-neutral-000 from-neutral-900 to-neutral-600",
      )}
      type={type}
    >
      {children}
    </button>
  );
}
