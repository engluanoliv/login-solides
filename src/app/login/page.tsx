"use client";
import LoginForm from "@/components/LoginForm";
import Modal from "@/components/Modal";
import SocialAccounts from "@/components/SocialAccounts";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showModal, setShowModal] = useState<boolean>(false);
  function handleLogin() {
    setShowModal((prevValue) => !prevValue);
  }
  function handleCloseModal() {
    setShowModal((prevValue) => !prevValue);
  }
  return (
    <main className="text-center flex flex-col h-full w-full max-w-[330px]">
      <div className="py-8 mt-4">
        <Link href={"/"}>
          <span className="flex items-start hover:cursor-pointer py-8">
            <ArrowBack className="text-white rounded-full bg-custom-placeholder p-1 h-[30px] w-[30px]" />
          </span>
        </Link>
        <h2 className="flex text-2xl mb-6 text-start text-custom-label-input">
          Login
        </h2>
        <p className="flex text-sm text-start text-custom-placeholder font-normal">
          Welcome back! <br /> Please login to continue
        </p>
      </div>
      <LoginForm onLogin={handleLogin} />
      <SocialAccounts />
      <p className="text-[13px] py-10 text-center text-custom-placeholder">
        Dont have an account?{" "}
        <Link className="text-custom-button-login" href={"/create"}>
          Create Now
        </Link>
      </p>
      {showModal && (
        <Modal message="You are Logged in" onClose={handleCloseModal} />
      )}
    </main>
  );
}
