import { cn } from "@/lib/utils";

import SocialIconList from "@/patterns/SocialIconList";

export default function FooterBottom({
  accent = false,
  className = "",
}: {
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(accent ? "bg-dark-dark" : "bg-dark-darkest", "text-dark-white")}>
      <div
        className={cn(
          "container flex flex-col justify-between gap-6 py-8 md:flex-row md:items-center md:gap-8 md:py-12",
          className,
        )}
      >
        <p className="text-dark-lightest text-base font-semibold">
          © Copyright {new Date().getFullYear()} - Sergio Castillo
        </p>
        <SocialIconList />
      </div>
    </div>
  );
}
