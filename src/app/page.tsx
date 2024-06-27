import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <Link href={"/login"}>
        <p className="hover:text-custom-button-login text-lg p-2 mx-3 hover:cursor-pointer rounded-lg border border-custom-label-input hover:border-custom-button-login">
          Login
        </p>
      </Link>
      <Link href={"/create"}>
        <p className="hover:text-custom-button-login text-lg p-2 mx-3 hover:cursor-pointer rounded-lg border border-custom-label-input  hover:border-custom-button-login">
          Create Account
        </p>
      </Link>
    </main>
  );
}
