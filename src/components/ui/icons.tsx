import * as React from "react";

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2L2 7L12 12L22 7L12 2Z"
      />
      <path
        fill="currentColor"
        d="M2 17L12 22L22 17"
      />
    </svg>
  ),
  gitHub: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12 0 17.31 3.435 21.795 8.205 23.385 8.805 23.49 9.03 23.13 9.03 22.815 9.03 22.53 9.015 21.585 9.015 20.475 6 21.135 5.22 19.845 4.98 19.17 4.845 18.825 4.26 18.525 3.735 18.285 3.18 18.12 2.535 18.18 1.935 18.465 1.56 18.93 1.56 19.695V21.795C1.56 22.11 1.785 22.47 2.385 22.365 7.155 20.775 10.56 16.29 10.56 11.985 10.56 5.37 5.19 0 12 0Z"
      />
    </svg>
  ),
  twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  chevronDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 9l6 6 6-6"
      />
    </svg>
  ),
  chevronLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 18l-6-6 6-6"
      />
    </svg>
  ),
  chevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 18l6-6-6-6"
      />
    </svg>
  ),
  menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12h18M3 6h18M3 18h18"
      />
    </svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6 6 18M6 6l12 12"
      />
    </svg>
  ),
  sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  moon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  ),
  star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon
        fill="currentColor"
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      />
    </svg>
  ),
  check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        points="20,6 9,17 4,12"
      />
    </svg>
  ),
};