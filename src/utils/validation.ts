interface ValidationProps {
  isValid: boolean;
  errorMsg: string | null;
}

export function validateEmail(email: string): ValidationProps {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, errorMsg: "Please enter a valid email address." };
  }
  return { isValid: true, errorMsg: null };
}

export function validatePassword(password: string): ValidationProps {
  if (password.length < 8) {
    return {
      isValid: false,
      errorMsg: "Password must be at least 8 characters long.",
    };
  } else {
    return { isValid: true, errorMsg: null };
  }
}

export function validatePhoneNumber(
  phoneNumber: string | undefined
): ValidationProps {
  console.log(phoneNumber?.length);
  if (!phoneNumber || phoneNumber.length !== 14) {
    return {
      isValid: false,
      errorMsg: "Please enter a valid phone number.",
    };
  } else {
    return { isValid: true, errorMsg: null };
  }
}
