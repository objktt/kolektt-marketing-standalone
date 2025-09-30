"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { User } from "@saasfly/auth";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/components/ui";
import { Button } from "@/components/ui/button";

import { MainNav } from "./main-nav";
import { LocaleChange } from "@/components/locale-change";
import { GitHubStar } from "@/components/github-star";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { UserAccountNav } from "./user-account-nav";

import useScroll from "@/hooks/use-scroll";
import type { MainNavItem } from "~/types";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Record<string, string | object>;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  const segment = useSelectedLayoutSegment();

  // 개발 모드 체크 - 하이드레이션 오류 방지
  const [isDev, setIsDev] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDev(process.env.NODE_ENV === "development");
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav
          items={items}
          params={{ lang: `${lang}` }}
          marketing={marketing}
        >
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={
                    item.disabled
                      ? "#"
                      : item.href.startsWith("http")
                        ? item.href
                        : `/${lang}${item.href}`
                  }
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-blue-500 font-semibold"
                      : "",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="w-[1px] h-8 bg-accent"></div>

          {rightElements}

          <div className="hidden md:flex lg:flex xl:flex">
            <GitHubStar />
          </div>
          <LocaleChange url={"/"} />
          {!user && isClient && !isDev ? (
            <Link href={`/${lang}/login-clerk`}>
              <Button variant="outline" size="sm">
                {typeof marketing.login === "string"
                  ? marketing.login
                  : "Default Login Text"}
              </Button>
            </Link>
          ) : null}

          {user ? (
            <UserAccountNav
              user={user}
              params={{ lang: `${lang}` }}
              dict={dropdown}
            />
          ) : !isClient ? (
            // 서버 렌더링 시 기본 버튼
            <Button className="px-3" variant="default" size="sm" disabled>
              Loading...
            </Button>
          ) : !isDev ? (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
            >
              {typeof marketing.signup === "string"
                ? marketing.signup
                : "Default Signup Text"}
            </Button>
          ) : (
            // 개발 모드에서는 더미 버튼 표시
            <Button className="px-3" variant="outline" size="sm" disabled>
              Dev Mode
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
