"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Building2,
  Settings,
} from "lucide-react";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Complaints",
    href: "/dashboard/complaints",
    icon: ClipboardList,
  },
  {
    label: "Rooms",
    href: "/dashboard/rooms",
    icon: Building2,
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="font-bold text-xl">
          ResolveX
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
              flex items-center gap-3
              rounded-lg
              px-4 py-3
              hover:bg-slate-100
              "
            >
              <Icon size={18} />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}