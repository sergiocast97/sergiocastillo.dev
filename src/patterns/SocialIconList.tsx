import { cn } from "@/lib/utils";

import Link from "next/link";

export default function SocialIconList() {
  // List of Socials, Icons and URLs
  const socials = [
    { icon: <InstagramIcon />, name: "Instagram", href: "#" },
    { icon: <BlueSkyIcon />, name: "BlueSky", href: "#" },
    { icon: <LinkedinIcon />, name: "LinkedIn", href: "#" },
    { icon: <TwitchIcon />, name: "Twitch", href: "#" },
  ];

  return (
    <div className="flex gap-6">
      {socials.map((item) => (
        <Link key={item.name} href={item.href} className="text-light-darkest dark:text-dark-white">
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

interface IconProps {
  className?: string;
}

const BlueSkyIcon: React.FC<React.SVGProps<SVGElement>> = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-6 w-auto", className)}
    fill="none"
    viewBox="0 0 27 25"
  >
    <g clipPath="url(#bsky)">
      <path
        fill="currentColor"
        d="M5.853 2.494c3.095 2.33 6.424 7.055 7.647 9.59 1.223-2.535 4.552-7.26 7.647-9.59C23.381.813 27-.488 27 3.651c0 .827-.473 6.945-.75 7.938-.964 3.454-4.476 4.334-7.6 3.801 5.46.932 6.85 4.019 3.85 7.105-5.698 5.862-8.19-1.47-8.827-3.35-.117-.344-.172-.505-.173-.368 0-.137-.056.024-.173.368-.638 1.88-3.13 9.212-8.827 3.35-3-3.086-1.61-6.173 3.85-7.105-3.124.533-6.636-.348-7.6-3.8C.473 10.596 0 4.477 0 3.65 0-.489 3.619.813 5.853 2.494"
      ></path>
    </g>
    <defs>
      <clipPath id="bsky">
        <path fill="currentColor" d="M0 .97h27v23.837H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGElement>> = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className, "h-6 w-auto")}
    fill="none"
    viewBox="0 0 24 25"
  >
    <g clipPath="url(#linkedin)">
      <path
        fill="currentColor"
        d="M20.45 21.338h-3.557V15.77c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.447-2.135 2.94v5.666H9.352V9.886h3.414v1.565h.048a3.74 3.74 0 0 1 3.368-1.85c3.604 0 4.269 2.37 4.269 5.455zM5.34 8.32a2.064 2.064 0 1 1-.001-4.127 2.064 2.064 0 0 1 0 4.127m1.778 13.018h-3.56V9.886h3.56zM22.222.891H1.77A1.75 1.75 0 0 0 0 2.62v20.536a1.753 1.753 0 0 0 1.77 1.732h20.452A1.757 1.757 0 0 0 24 23.157V2.619a1.755 1.755 0 0 0-1.778-1.73"
      ></path>
    </g>
    <defs>
      <clipPath id="linkedin">
        <path fill="currentColor" d="M0 .889h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const TwitchIcon: React.FC<React.SVGProps<SVGElement>> = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className, "h-6 w-auto")}
    fill="none"
    viewBox="0 0 21 26"
  >
    <g fill="currentColor" clipPath="url(#twitch)">
      <path d="M4.375.444 0 4.89v16h5.25v4.444l4.375-4.444h3.5l7.875-8V.444zM19.25 12l-3.5 3.556h-3.5l-3.062 3.11v-3.11H5.25V2.222h14z"></path>
      <path d="M14.875 5.333h1.75v5.334h-1.75zm-4.812 0h1.75v5.334h-1.75z"></path>
    </g>
    <defs>
      <clipPath id="twitch">
        <path fill="currentColor" d="M0 .444h21v24.89H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGElement>> = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className, "h-6 w-auto")}
    fill="none"
    viewBox="0 0 24 25"
  >
    <g clipPath="url(#twitch)">
      <path
        fill="currentColor"
        d="M12 3.051c3.204 0 3.584.012 4.849.07 1.17.053 1.805.249 2.228.413.56.218.96.478 1.38.898s.68.82.898 1.38c.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228-.218.56-.478.96-.898 1.38s-.82.68-1.38.898c-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.805-.25-2.228-.413a3.7 3.7 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.85 0-3.203.012-3.583.07-4.848.054-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38s.82-.68 1.38-.898c.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07M12 .89c-3.259 0-3.668.014-4.948.072-1.277.058-2.15.261-2.912.558a5.9 5.9 0 0 0-2.126 1.384A5.9 5.9 0 0 0 .63 5.028c-.297.764-.5 1.636-.558 2.913C.014 9.221 0 9.63 0 12.89s.014 3.668.072 4.948c.059 1.277.261 2.15.558 2.912a5.9 5.9 0 0 0 1.384 2.126 5.9 5.9 0 0 0 2.126 1.384c.763.297 1.635.5 2.912.558 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.277-.059 2.15-.261 2.912-.558a5.9 5.9 0 0 0 2.126-1.384 5.9 5.9 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.69.072-4.948 0-3.26-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.9 5.9 0 0 0-1.384-2.126 5.9 5.9 0 0 0-2.126-1.384c-.763-.297-1.635-.5-2.912-.558C15.668.903 15.259.89 12 .89m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324m0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0"
      ></path>
    </g>
    <defs>
      <clipPath id="twitch">
        <path fill="currentColor" d="M0 .889h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
