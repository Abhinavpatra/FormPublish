"use client";
import { ReactNode }  from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X,  } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md transition-all dark:border-neutral-800 dark:bg-neutral-950/80",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </nav>
  );
};

export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex h-16 items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className={cn("flex items-center gap-2 font-bold text-xl text-neutral-900 dark:text-white", className)}>
      <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center text-white dark:bg-white dark:text-black">
        F
      </div>
      <span>Form Filler</span>
    </a>
  );
};

export const NavItems = ({ items }: { items: { name: string; link: string }[] }) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition-all dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const NavbarButton = ({ children, variant = "primary", className, ...props }: NavbarButtonProps) => {
  const variants = {
    primary: "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    secondary: "bg-transparent text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between py-4">{children}</div>;
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col gap-4 p-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
