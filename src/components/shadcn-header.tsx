"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

import { cn } from "@/components/ui";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/config/i18n-config";

interface ShadcnHeaderProps {
  lang: Locale;
}

export function ShadcnHeader({ lang }: ShadcnHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and language menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (isMobileMenuOpen) {
        if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-trigger')) {
          setIsMobileMenuOpen(false);
        }
      }
      
      if (isLanguageMenuOpen) {
        if (!target.closest('.language-menu') && !target.closest('.language-menu-trigger')) {
          setIsLanguageMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, isLanguageMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const closeLanguageMenu = () => {
    setIsLanguageMenuOpen(false);
  };

  const changeLanguage = (newLang: Locale) => {
    // Replace the current language in the pathname with the new language
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname);
    setIsLanguageMenuOpen(false);
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'ko': return 'KO';
      case 'en': return 'EN';
      case 'ja': return 'JA';
      case 'zh': return 'ZH';
      default: return locale.toUpperCase();
    }
  };

  const handleHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Force X button to be black */}
      <style jsx global>{`
        [data-radix-dialog-content] button[data-radix-dialog-close] {
          color: #111827 !important;
        }
        [data-radix-dialog-content] button[data-radix-dialog-close] svg {
          color: #111827 !important;
        }
      `}</style>
      <header className="fixed top-4 inset-x-0 z-50">
        <div>
          <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "rounded-2xl border transition-all duration-300 ease-in-out",
                isScrolled
                  ? "bg-white/[0.99] backdrop-blur-lg shadow-md border-gray-200/50"
                  : "bg-white/[0.99] backdrop-blur-md shadow-sm border-gray-200/40",
              )}
            >
              <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href={`/${lang}`} className="flex items-center space-x-2">
                  <span className="font-black text-2xl text-gray-900 hover:text-gray-700 transition-colors">
                    Kolektt
                  </span>
                </Link>

                {/* Desktop Navigation - Centered */}
                <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                  <Link
                    href={`/${lang}/bpm-collect`}
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all"
                  >
                    BPM Collect
                  </Link>

                  <div className="relative group">
                    <button
                      onClick={handleHubClick}
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all cursor-not-allowed"
                    >
                      Kolektt Hub
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                      {lang === "ko" ? "준비중입니다" : "Coming Soon"}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>

                  <Link
                    href={`/${lang}/about`}
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 text-base font-bold rounded-md transition-all"
                  >
                    About
                  </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="flex items-center space-x-3">
                  {/* Language Selector - Desktop */}
                  <div className="relative hidden md:block language-menu">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="language-menu-trigger text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 px-3 py-2 flex items-center"
                      onClick={toggleLanguageMenu}
                    >
                      <span className="text-sm font-semibold">{getLanguageLabel(lang)}</span>
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                    
                    {isLanguageMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                        <button
                          onClick={() => changeLanguage('ko')}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            lang === 'ko' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          한국어 (KO)
                        </button>
                        <button
                          onClick={() => changeLanguage('en')}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            lang === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          English (EN)
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="relative group hidden md:block">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm cursor-not-allowed"
                      onClick={handleHubClick}
                    >
                      Enter Kolektt Hub
                    </Button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                      {lang === "ko" ? "준비중입니다" : "Coming Soon"}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>

                  {/* Mobile Menu Trigger */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden ml-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 mobile-menu-trigger"
                    onClick={toggleMobileMenu}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden fixed top-20 inset-x-0 z-40">
            <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
              <div className="bg-white/[0.99] backdrop-blur-lg shadow-lg border border-gray-200/50 rounded-2xl p-6">
                <nav className="flex flex-col space-y-1">
                  <Link
                    href={`/${lang}/bpm-collect`}
                    className="text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-lg transition-all"
                    onClick={closeMobileMenu}
                  >
                    BPM Collect
                  </Link>
                  <div className="relative">
                    <button
                      onClick={(e) => { handleHubClick(e); closeMobileMenu(); }}
                      className="text-base font-medium text-gray-900 hover:bg-gray-50 px-3 py-3 rounded-lg transition-all text-left w-full flex items-center justify-between cursor-not-allowed"
                    >
                      <span>Kolektt Hub</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {lang === "ko" ? "준비중" : "Coming Soon"}
                      </span>
                    </button>
                  </div>
                  <Link
                    href={`/${lang}/about`}
                    className="text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 rounded-lg transition-all"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                  
                  {/* Language Selector - Mobile */}
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="flex items-center mb-3 px-3">
                      <Globe className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-600">Language</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => { changeLanguage('ko'); closeMobileMenu(); }}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          lang === 'ko' 
                            ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                            : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        한국어 (KO)
                      </button>
                      <button
                        onClick={() => { changeLanguage('en'); closeMobileMenu(); }}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          lang === 'en' 
                            ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                            : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        English (EN)
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="relative">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-not-allowed"
                        onClick={(e) => { handleHubClick(e); closeMobileMenu(); }}
                      >
                        Enter Kolektt Hub
                      </Button>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                        {lang === "ko" ? "준비중입니다" : "Coming Soon"}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
