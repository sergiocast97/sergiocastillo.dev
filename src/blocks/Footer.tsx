import Logo from "@/components/Logo";
import FooterBottom from "@/patterns/FooterBottom";
import NavItems from "@/patterns/NavItems";

export default function FooterOne() {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-darkest text-dark-white">
        <div className="container flex flex-col justify-between gap-8 pt-12 md:flex-row md:items-center">
          <Logo theme="dark" />
          <NavItems />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}
