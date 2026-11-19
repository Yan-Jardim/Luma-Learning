import { DemoMessageButton } from "@/components/DemoMessageButton/DemoMessageButton";
import type { LoginButtonProps } from "./LoginButton.types";

const message = "This is a demo. Sign-in is not available.";

export function LoginButton({ className, messageClassName }: LoginButtonProps) {
  return (
    <DemoMessageButton message={message} className={className} messageClassName={messageClassName}>
      Log in
    </DemoMessageButton>
  );
}
