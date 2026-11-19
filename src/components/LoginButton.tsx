import { DemoMessageButton } from "./DemoMessageButton";

// Approved behavior (D-24): no authentication, network request or new page.
const message = "This is a demo. Sign-in is not available.";

type LoginButtonProps = {
  className?: string;
  messageClassName?: string;
};

export function LoginButton({ className = "", messageClassName = "" }: LoginButtonProps) {
  return (
    <DemoMessageButton message={message} className={className} messageClassName={messageClassName}>
      Log in
    </DemoMessageButton>
  );
}
