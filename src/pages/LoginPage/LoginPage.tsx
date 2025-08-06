import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RegistrationStep1 } from "@widgets/RegistrationForm/RegistrationForm1/RegistrationForm1.tsx";
import styles from "../RegistrationPage/RegistrationForm.module.css";
import logo from "@assets/images/logo.svg";
import { Button } from "@shared/ui/button/button.tsx";
import closeIcon from "@assets/icons/cross.svg";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    navigate("/"); // переход после нажатия на клавишу вход
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="SkillSwap Logo" className={styles.logo} />
          <Button
            type="secondary"
            onClick={handleClose}
            endIcon={
              <img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />
            }
            extraClass={styles.closeButton}
          >
            Закрыть
          </Button>
        </div>
      </header>
      <RegistrationStep1
        onNextStep={handleLogin}
        formData={formData}
        setFormData={setFormData}
        mode="login"
      />
    </div>
  );
};
