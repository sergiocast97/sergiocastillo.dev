"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import NavItems from "./NavItems";
import Logo from "@/components/Logo";

export default function MobileNav() {
  const [mobileNav, setmobileNav] = useState(false);

  return (
    <>
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setmobileNav(true)}
          type="button"
          className="-m-2.5 rounded-md p-2.5"
        >
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="text-light-darkest dark:text-dark-white h-6" />
        </button>

        <Dialog open={mobileNav} onClose={setmobileNav} className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-black/75" />
          <DialogPanel className="bg-light-white dark:bg-dark-darkest md:max-w-container-small md:ring-light-light dark:md:ring-dark-medium fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 md:px-8 md:ring-1">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setmobileNav(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="text-light-darkest dark:text-dark-white h-6"
                />
              </button>
            </div>
            <div className="mt-12 space-y-12">
              <NavItems className="flex-col items-start gap-y-6" />
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </>
  );
}
