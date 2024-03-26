"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white sm:hidden">
        Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 sm:hidden">
        <DropdownMenuItem className="gap-2">新規登録</DropdownMenuItem>
        <DropdownMenuItem className="gap-2">ログイン</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropdownMenu;
