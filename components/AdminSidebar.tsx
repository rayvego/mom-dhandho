"use client";

import { Home, Package, Plus, Grid, Info, Mail, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Home Page", icon: Home, href: "/homePage" },
  { title: "All Products", icon: Package, href: "/products" },
  { title: "New Product", icon: Plus, href: "/products/new" },
  { title: "Categories", icon: Grid, href: "/categories" },
  { title: "About Us", icon: Info, href: "/about" },
  { title: "Privacy Policy", icon: Shield, href: "/privacy" },
  { title: "Contact Us", icon: Mail, href: "/contact" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" className="border-r">
      <SidebarHeader className="border-b px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">👘 VASTRAM</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
