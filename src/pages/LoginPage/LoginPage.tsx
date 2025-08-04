import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegistrationStep1} from "@widgets/RegistrationForm/RegistrationForm1/RegistrationForm1.tsx";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    // логика входа
    console.log('Logging in with:', formData);
    navigate('/'); // переход после нажатия на клавишу вход
  };

  return (
    <RegistrationStep1
      onNextStep={handleLogin}
      formData={formData}
      setFormData={setFormData}
      mode="login"
    />
  );
}