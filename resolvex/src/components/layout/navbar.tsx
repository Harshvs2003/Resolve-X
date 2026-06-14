import { Bell } from "lucide-react";

import { Avatar, AvatarFallback }
from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header
      className="
      h-16
      border-b
      bg-white
      px-6
      flex
      items-center
      justify-between
      "
    >
      <h2 className="font-semibold">
        ResolveX Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <Bell size={20} />

        <Avatar>
          <AvatarFallback>
            HS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}