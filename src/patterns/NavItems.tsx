import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavItems({ className = "" }: { className?: string }) {
  const items = [
    { name: "Projects", url: "#" },
    { name: "About", url: "#" },
    { name: "Yaps", url: "#" },
    { name: "Uses", url: "#" },
  ];
  return (
    <nav className={cn("flex flex-wrap gap-x-6 gap-y-4 md:gap-x-8", className)}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          className="text-light-darkest dark:text-dark-white text-base font-semibold md:text-lg"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
