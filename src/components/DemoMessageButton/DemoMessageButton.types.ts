import type { ReactNode } from "react";

export type DemoMessageButtonProps = {
  message: string;
  children: ReactNode;
  ariaLabel?: string;
  className: string;
  messageClassName: string;
  wrapperClassName?: string;
  closeOnFocusOut?: boolean;
};
