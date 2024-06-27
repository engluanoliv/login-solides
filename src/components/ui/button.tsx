interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <>
      <button
        className="flex h-[55px] my-3 items-center justify-center rounded-lg border border-custom-button-login bg-custom-button-login text-white text-[15px]"
        {...props}
      >
        {title}
      </button>
    </>
  );
}
