import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  lang?: string;
}

const defaultSections = [
  {
    title: "Links",
    links: [
      { name: "BPM Collect", href: "/bpm-collect" },
      { name: "Kolektt Hub", href: "/hub" },
      { name: "About", href: "/about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "hello@kolektt.kr", href: "mailto:hello@kolektt.kr" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/images/logo/kolektt-logo.svg",
    alt: "Kolektt Logo",
    title: "Kolektt",
  },
  sections = defaultSections,
  description = "Smart platform for analog collectors. Easily collect, manage, and trade your collection with camera-based automatic recognition, metadata collection, and investment insights.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Objktt Studio. All rights reserved.",
  legalLinks = defaultLegalLinks,
  lang = "en",
}: Footer7Props) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href={`/${lang}`}>
                <span className="text-2xl font-black text-white hover:text-gray-300 transition-colors">
                  {logo.title}
                </span>
              </Link>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              {description}
            </p>

            {/* Newsletter Signup */}
            <div className="w-full max-w-sm">
              <h4 className="text-sm font-semibold text-white mb-3">
                Subscribe to our Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <ul className="flex items-center space-x-4 text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-white transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.href.startsWith("mailto:") ||
                      link.href.startsWith("http") ||
                      link.href === "#" ? (
                        <a
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={`/${lang}${link.href}`}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-700 pt-8 text-sm text-gray-400 md:flex-row md:items-center">
          <p>{copyright}</p>
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
