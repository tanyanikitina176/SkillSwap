export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (!email) return { isValid: false, message: 'Email обязателен' };

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) return { isValid: false, message: 'Некорректный формат email' };

  if (email.length > 254) return { isValid: false, message: 'Email слишком длинный' };

  return { isValid: true };
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (!password) return { isValid: false, message: 'Пароль обязателен' };

  if (password.length < 8) return { isValid: false, message: 'Пароль должен содержать не менее 8 символов' };

  if (password.length > 64) return { isValid: false, message: 'Пароль должен содержать не более 64 символов' };

  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Добавьте хотя бы одну заглавную букву' };
  }

  if (!/\d/.test(password)) {
    return { isValid: false, message: 'Добавьте хотя бы одну цифру' };
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Добавьте хотя бы один спецсимвол' };
  }

  const weakPasswords = ['password', '12345678', 'qwertyui'];
  if (weakPasswords.includes(password.toLowerCase())) {
    return { isValid: false, message: 'Этот пароль слишком простой' };
  }

  return { isValid: true };
};

export const validateForm = (email: string, password: string) => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  return {
    isValid: emailValidation.isValid && passwordValidation.isValid,
    errors: {
      email: emailValidation.message,
      password: passwordValidation.message
    }
  };
};