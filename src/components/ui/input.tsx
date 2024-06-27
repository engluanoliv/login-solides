"use client";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "@/utils/validation";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const inputIcons: { [key: string]: string } = {
  email: "/icons/mail.svg",
  password: "/icons/lock.svg",
  tel: "/icons/phone.svg",
};

export default function Input({ type, ...props }: InputProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const iconContent = inputIcons[type];
  const labelContent =
    type === "email"
      ? "Email Address"
      : type === "password"
      ? "Password"
      : "Mobile Number";

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevValue) => !prevValue);
  }

  async function validateInput(value: string | undefined) {
    if (value === undefined) {
      setError("Invalid input");
      return;
    }
    if (type === "email") {
      const { isValid, errorMsg } = await validateEmail(value);
      setError(errorMsg);
    }
    if (type === "password") {
      const { isValid, errorMsg } = await validatePassword(value);
      setError(errorMsg);
    }
    if (type === "tel") {
      const { isValid, errorMsg } = await validatePhoneNumber(value);
      setError(errorMsg);
    }
  }

  return (
    <>
      <div className="flex my-1 items-center h-[68px] rounded-lg border border-custom-input">
        <div className="px-4">
          <Image src={iconContent} alt={labelContent} width={24} height={24} />
        </div>

        <div className="flex flex-col flex-grow items-start">
          <label className="text-[13px] text-custom-label-input">
            {labelContent}
          </label>

          {type === "tel" ? (
            <PhoneInput
              className="placeholder:text-[13px] focus:outline-none placeholder:text-custom-placeholder"
              country="BR"
              {...props}
              value={value}
              onChange={(value) => validateInput(value)}
            />
          ) : (
            <input
              className="placeholder:text-[13px] focus:outline-none placeholder:text-custom-placeholder"
              type={type === "password" && isPasswordVisible ? "text" : type}
              {...props}
              onBlur={(e) => validateInput(e.target.value)}
            />
          )}
        </div>
        <div
          className="px-3 hover:cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {type === "password" && (
            <Image src="/icons/eye.svg" alt="Visible" width={24} height={24} />
          )}
        </div>
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </>
  );
}
