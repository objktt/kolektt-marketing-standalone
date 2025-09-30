import * as React from "react";

const Sheet = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

const SheetTrigger = ({ children, asChild, ...props }: any) => {
  if (asChild) {
    // If asChild is true, clone the child element with props
    return children;
  }
  return <div {...props}>{children}</div>;
};

const SheetContent = ({ children, className = '', side = 'right', ...props }: any) => {
  return (
    <div
      className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const SheetHeader = ({ children, className = '', ...props }: any) => {
  return (
    <div
      className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const SheetTitle = ({ children, className = '', ...props }: any) => {
  return (
    <h3
      className={`text-lg font-semibold text-foreground ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const SheetDescription = ({ children, className = '', ...props }: any) => {
  return (
    <p
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const SheetFooter = ({ children, className = '', ...props }: any) => {
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const SheetClose = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
};