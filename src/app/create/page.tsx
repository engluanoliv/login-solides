"use client";
import CreateAccountForm from "@/components/CreateAccountForm";
import Modal from "@/components/Modal";
import SocialAccounts from "@/components/SocialAccounts";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  function handleCloseModal() {
    setShowModal((prevValue) => !prevValue);
    router.push("/login");
  }

  function handleShowModal() {
    setShowModal((prevValue) => !prevValue);
  }

  return (
    <main className="text-center flex flex-col h-full w-full max-w-[330px]">
      <div className="py-8 mt-4">
        <Link href={"/"}>
          <span className="flex items-start py-8 hover:cursor-pointer">
            <ArrowBack className="text-white rounded-full bg-custom-placeholder p-1 h-[30px] w-[30px]" />
          </span>
        </Link>
        <h2 className="flex text-2xl mb-6 text-start text-custom-label-input">
          Create Account
        </h2>
        <p className="flex text-sm text-start text-custom-placeholder font-normal">
          Enter your information below or continue <br /> with social media
          account
        </p>
      </div>
      <CreateAccountForm onCreate={handleShowModal} />
      <SocialAccounts />
      <p className="text-[13px] py-10 text-center text-custom-placeholder">
        Already have an account?{" "}
        <Link className="text-custom-button-login" href={"/login"}>
          Login Now
        </Link>
      </p>
      {showModal && (
        <Modal message="Account Created" onClose={handleCloseModal} />
      )}
    </main>
  );
}
