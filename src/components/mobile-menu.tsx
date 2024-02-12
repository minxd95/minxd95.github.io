import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigate } from "gatsby";
import { Menu } from "lucide-react";
import React from "react";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            navigate("posts");
          }}
        >
          Posts
        </DropdownMenuItem>
        <DropdownMenuItem>Tags</DropdownMenuItem>
        <DropdownMenuItem>Search</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
