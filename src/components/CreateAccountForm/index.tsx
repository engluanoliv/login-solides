"use client";
import { redirect } from "next/navigation";
import Button from "../ui/button";
import Input from "../ui/input";

interface CreacteAccountFormProps {
  onCreate: () => void;
}

export default function CreateAccountForm({
  onCreate,
}: CreacteAccountFormProps) {
  function handleSubmitCreate(event: React.FormEvent) {
    event.preventDefault();
    onCreate();
  }
  return (
    <>
      <form
        onSubmit={handleSubmitCreate}
        className="flex flex-col flex-grow pb-10"
      >
        <Input type="email" placeholder="Your email address" required />
        <Input
          type="tel"
          pattern="+55\(?\d{2}\)?\d{1}?\d{4}-?\d{4}"
          placeholder="Your mobile number"
          required
        />
        <Input type="password" placeholder="Create password" required />
        <Button title="Create Account" />
      </form>
    </>
  );
}
