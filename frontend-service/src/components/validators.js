export const emailValidator = value => {
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
      return "Invalid email address";
    return false;
  };

export const phoneValidator = value => {
  if (!/^\d{10}$/.test(value))
    return "Phone number must be exactly 10 digits";
  return false;
};

export const passwordValidator = value => {
    if (value.length < 0) return "Password must be a characters long";
    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain at least one number";
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value)) return "Password must contain at least one special character";
    return false;
};
