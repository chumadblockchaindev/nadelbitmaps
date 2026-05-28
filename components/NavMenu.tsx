"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowUpRight } from "lucide-react";

interface NavItemsType {
  category: string;
  slug: string;
  imgurl: string;
  description: string;
  items: Array<{ name: string; href: string; desc: string }>;
}

function ListItem({
  title,
  children,
  href,
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-xl border border-slate-200/10 bg-slate-100 p-4 transition-all duration-200 hover:bg-[#D4A853]/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-[#DA1C21]">{title}</div>
              <div className="text-xs leading-5 text-black/60">{children}</div>
            </div>
            <ArrowUpRight size={14} className="shrink-0 text-[#DA1C21]" />
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const NavMenu = ({ category, slug, imgurl, description, items }: NavItemsType) => {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-full bg-transparent px-4 py-2 text-sm font-bold text-slate-900/80 transition-colors hover:bg-slate-100 hover:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-[#DA1C21]">
            {category}
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="w-[760px] rounded-3xl">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-100">
                  <div className="relative h-full min-h-[260px]">
                    <Image
                      src={imgurl}
                      alt={category}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="pt-2 col-span-8">
                  <ul className="grid gap-3 md:grid-cols-2">
                    {items.map((item) => (
                      <ListItem key={item.href} title={item.name} href={item.href}>
                        {item.desc}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;