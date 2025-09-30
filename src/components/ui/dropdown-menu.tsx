import * as React from "react";

const DropdownMenu = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

const DropdownMenuTrigger = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

const DropdownMenuContent = ({ children, className = '', ...props }: any) => {
  return (
    <div
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = ({ children, className = '', ...props }: any) => {
  return (
    <div
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownMenuLabel = ({ children, className = '', ...props }: any) => {
  return (
    <div
      className={`px-2 py-1.5 text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const DropdownMenuSeparator = ({ className = '', ...props }: any) => {
  return (
    <div
      className={`-mx-1 my-1 h-px bg-muted ${className}`}
      {...props}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};