import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <p className="font-bold text-white">Shariq</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-gray-300 hover:text-red-400 transition-colors data-[active=true]:text-red-400 data-[active=true]:font-medium"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button
            isIconOnly
            as={Link}
            href="https://github.com"
            variant="light"
            className="text-gray-300 hover:text-red-400"
          >
            <GithubIcon className="text-default-500" />
          </Button>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            href="/contact"
            color="danger"
            variant="flat"
            radius="full"
            size="sm"
          >
            Get In Touch
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-gray-300 hover:text-red-400"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
