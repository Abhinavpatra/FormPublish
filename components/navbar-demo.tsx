"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Download } from "lucide-react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "How to use",
      link: "/how-to-use",
    },
    {
      name: "Benefits",
      link: "/benefits",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed!">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="hidden md:flex items-center gap-4">
          <a href="/extension.zip" download>
            <NavbarButton variant="primary" className="gap-2">
              <Download className="w-4 h-4" />
              Download Extension
            </NavbarButton>
          </a>
        </div>
        
        {/* Mobile Toggle (visible only on mobile) */}
        <div className="md:hidden">
             <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <a href="/extension.zip" download className="w-full">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full gap-2"
              >
                <Download className="w-4 h-4" />
                Download Extension
              </NavbarButton>
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
