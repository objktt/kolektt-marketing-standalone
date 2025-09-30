"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "@saasfly/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserAvatar } from "@/components/user-avatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
  params: {
    lang: string;
  };
  dict: Record<string, string>;
}

export function UserAccountNav({
  user,
  params: { lang },
  dict,
}: UserAccountNavProps) {
  const [isDev, setIsDev] = useState(true); // Default to dev mode for SSR
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDev(
      process.env.NODE_ENV === "development" || process.env.IS_DEBUG === "true",
    );
  }, []);

  // Simple logout function that doesn't rely on Clerk in dev mode
  const handleLogout = () => {
    if (isDev) {
      // In dev mode, just redirect to login page
      window.location.href = `/${lang}/login-clerk`;
    } else {
      // In production, we would need to handle Clerk logout
      // For now, just redirect (this should be updated when Clerk is properly configured)
      window.location.href = `/${lang}/login-clerk`;
    }
  };

  if (!isClient) {
    // Server-side rendering fallback
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.name ?? null, image: user.image ?? null }}
          className="h-8 w-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/dashboard`}>{dict.dashboard}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/dashboard/billing`}>{dict.billing}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/dashboard/settings`}>{dict.settings}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            handleLogout();
          }}
        >
          {dict.sign_out}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
