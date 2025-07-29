import { useState, type FC, type ReactNode } from "react";
import style from "./form-input.module.css";
import eye from "../../../assets/icons/eye.svg";
import eyeSlash from "../../../assets/icons/eye-slash.svg";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number";
  helperText?: string;
  error?: boolean;
  children?: ReactNode;
}

export const FormInputUI: FC<InputProps> = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  type = "text",
  helperText = "",
  error = false,
  children,
  name = "",
}) => {
  const [innerValue, setInnerValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  // Если value передано, используем его, иначе используем внутреннее состояние
  const inputValue = value !== undefined ? value : innerValue;

  // Определяем value/onChange для контролируемого и неконтролируемого режима
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInnerValue(e.target.value);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.inputContainer}>
        {label && <label className={style.label}>{label}</label>}
        <input
          className={`${style.input} ${error ? style.error : ""}`}
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          name={name}
        />

        {isPasswordType && (
          <button
            type="button"
            className={style.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            <img
              src={showPassword ? eyeSlash : eye}
              alt={showPassword ? "Скрыть пароль" : "Показать пароль"}
              className={style.icon}
            />
          </button>
        )}
      </div>
      {helperText && (
        <span
          className={`${style.helperText} ${error ? style.errorText : ""}  `}
        >
          {helperText}
        </span>
      )}
      {children}
    </div>
  );
};
