"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MyHeader() {
  const pathname = usePathname();

  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
      subpaths: ["/projects/alway", "/projects/awash", "/projects/exp", "/projects/farmguide", "/projects/farmguide_ads", "/projects/gizham", "/projects/pageup_onboarding", "/projects/rst", "/projects/shiraaz", "/projects/social_ads", "/projects/tomorrow_foundation"],
    },
    {
      title: "About Me",
      href: "/aboutme",
    },
    {
      title: "Contacts",
      href: "/contacts",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="text-gray-600 bg-white border rounded-lg shadow-l pt-1">
      <div className="container relative mx-auto px-5 min-h-10 flex gap-4 flex-row lg:grid lg:grid-cols-2 justify-between items-center">
        <div className="flex lg:justify-left">
          <Link href="/" passHref
            className="font-bold text-xl">Samir Ibrahim
          </Link>
        </div>

        <div className="gap-4 lg:flex hidden flex-row justify-end">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link
                    href={item.href}
                    passHref
                    className={`p-2 rounded-md font-medium text-sm ${
                      pathname === item.href || (item.subpaths && pathname && item.subpaths.includes(pathname))
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="lg:hidden flex items-center">
          <button name="line" 
            onClick={() => setOpen(!isOpen)}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gray-100 p-4 shadow">
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href} passHref
              
                className={`p-2 rounded-md w-full py-2 text-gray-700 ${
                  pathname === item.href ? "bg-blue-500 text-white" : ""
                }`}
              >
                {item.title}
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyHeader;