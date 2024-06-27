"use client";
import Link from "next/link";
import Button from "../ui/button";
import Input from "../ui/input";

interface LoginProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginProps) {
  function handleSubmitLogin(event: React.FormEvent) {
    event.preventDefault();
    onLogin();
  }
  return (
    <>
      <form
        onSubmit={handleSubmitLogin}
        className="flex flex-col flex-grow pb-10"
      >
        <Input type="email" placeholder="Your email address" required />
        <Input type="password" placeholder="Enter your password" required />
        <Button type="submit" title="Login" />
        <Link href={"/"} className="text-custom-button-login text-[13px]">
          Forgot Password
        </Link>
      </form>
    </>
  );
}
