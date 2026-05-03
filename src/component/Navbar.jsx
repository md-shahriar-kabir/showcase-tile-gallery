"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Tiles", path: "/all-tiles" },
    { name: "My Profile", path: "/profile" },
  ];
  const authItems = [
    { name: "Sign Up", path: "/signup" },
    { name: "Sign In", path: "/signin" },
  ];

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full py-2">
        {/* Logo */}
        <Link href="/">
          <div className="flex gap-1 items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="object-cover"
            />
            <h3 className="font-black text-[#1C1C1C] text-lg sm:text-xl">
              TILE<span className="text-[#D4AF37]"> LUX</span>
            </h3>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <Button
                    variant={isActive ? "solid" : "outline"}
                    className={`
                      font-semibold transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                          : "hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]"
                      }
                    `}
                  >
                    {item.name}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex gap-4 items-center">
          {!user &&
            authItems.map((item) => {
              const isActive = pathname.startsWith(item.path);

              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive ? "solid" : "outline"}
                    className={`
              font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                  : "hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:border-[#D4AF37]"
              }
            `}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}

          {user && (
            <div className="flex gap-3 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              {/* Sign Out (action, not route) */}
              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-red-500 text-white hover:bg-red-600 transition"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button isIconOnly variant="light" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-3 pb-4">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <Link key={item.path} href={item.path}>
                <Button
                  fullWidth
                  variant={isActive ? "solid" : "outline"}
                  className={`
                    ${
                      isActive
                        ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                        : "hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                    }
                  `}
                  onClick={() => setIsOpen(false)} // close menu after click
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}

          {!user &&
            authItems.map((item) => {
              const isActive = pathname.startsWith(item.path);

              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    fullWidth
                    variant={isActive ? "solid" : "outline"}
                    className={`
            ${
              isActive
                ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                : "hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            }
          `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}

          {user && (
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-red-500 text-white hover:bg-red-600"
                fullWidth
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
