import Logo from "@/components/Logo";
import NavItems from "@/patterns/NavItems";
import MobileNav from "@/patterns/MobileNav";

export default function NavigationOne() {
  return (
    <>
      <section>
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container py-6 lg:pt-12">
            <div className="max-w-container-large mx-auto flex items-center justify-between gap-8">
              <Logo />
              <div className="hidden items-baseline justify-end gap-8 lg:flex lg:gap-12">
                <NavItems />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
