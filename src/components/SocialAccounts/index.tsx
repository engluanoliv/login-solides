import Image from "next/image";

export default function SocialAccounts() {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[13px] text-center text-custom-placeholder">
          Or Continue with Social Accounts
        </p>
        <div className="flex justify-between pt-6">
          <div className="flex items-center justify-center p-5 shadow-lg rounded-md bg-white hover:cursor-pointer">
            <Image
              src="/social-icons/google.svg"
              alt="google"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center justify-center p-5 shadow-lg rounded-md bg-white hover:cursor-pointer">
            <Image
              src="/social-icons/facebook.svg"
              alt="google"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center justify-center p-5 shadow-lg rounded-md bg-white hover:cursor-pointer">
            <Image
              src="/social-icons/apple.svg"
              alt="google"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center justify-center p-5 shadow-lg rounded-md bg-white hover:cursor-pointer">
            <Image
              src="/social-icons/twitter.svg"
              alt="google"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </>
  );
}
