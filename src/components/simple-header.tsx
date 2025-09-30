"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/config/i18n-config";

// CSS-in-JS for transparent white background with blur

interface SimpleHeaderProps {
  lang: Locale;
}

export function SimpleHeader({ lang }: SimpleHeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Dynamic styles based on scroll state
  const getHeaderStyles = () => ({
    backgroundColor: isScrolled
      ? "rgba(255, 255, 255, 0.95)"
      : "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    color: "#111827",
    border: `1px solid ${isScrolled ? "rgba(229, 231, 235, 0.8)" : "rgba(229, 231, 235, 0.5)"}`,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`force-white-header fixed z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-lg shadow-xl shadow-black/10"
          : "backdrop-blur-sm shadow-md"
      } rounded-3xl`}
      style={{
        ...getHeaderStyles(),
        top: "1rem",
        left: "clamp(0.5rem, 2vw, 1.875rem)",
        right: "clamp(0.5rem, 2vw, 1.875rem)",
      }}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center ml-2 md:ml-0">
            <Link
              href={`/${lang}`}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Kolektt
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-2">
            <Link
              href={`/${lang}/bpm-collect`}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg"
            >
              BPM Collect
            </Link>
            <Link
              href={`/${lang}/hub`}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg"
            >
              Kolektt Hub
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link
              href={`/${lang}/bpm-collect`}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-all duration-200 rounded-lg"
            >
              Try Demo
            </Link>
            <Link
              href={`/${lang}/hub`}
              className="text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg px-4 py-2 text-base font-medium transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href={`/${lang}/hub`}
              className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md rounded-lg px-4 py-2 text-base font-medium transition-all duration-200 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200/50 mt-4 pt-4 pb-4">
            <div className="space-y-1">
              <Link
                href={`/${lang}/bpm-collect`}
                className="block text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                BPM Collect
              </Link>
              <Link
                href={`/${lang}/hub`}
                className="block text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Kolektt Hub
              </Link>
              <Link
                href={`/${lang}/about`}
                className="block text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
            <div className="mt-4 space-y-3 border-t border-gray-200/50 pt-4">
              <Link
                href={`/${lang}/bpm-collect`}
                className="block text-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Try Demo
              </Link>
              <Link
                href={`/${lang}/hub`}
                className="block text-center text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-lg mx-3 px-4 py-2 text-base font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={`/${lang}/hub`}
                className="block text-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg mx-3 px-4 py-2 text-base font-medium transition-all duration-200 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
