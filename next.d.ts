declare module "next/link" {
  import React from "react";

  interface LinkProps {
    href: string;
    children?: React.ReactNode;
    className?: string;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    legacyBehavior?: boolean;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onClick?: (e: React.MouseEvent) => void;
  }

  const Link: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  export default Link;
}
