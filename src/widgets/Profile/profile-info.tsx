import styles from "./profile-info.module.css";
import { FormInputUI } from "@shared/ui/form-input";
import { FormTextArea } from "@shared/ui/text-area/text-area";
import { Button } from "@shared/ui/button/button";
import { Dropdown } from "@shared/ui/dropdown/dropdown";
import {
  cityOptions,
  genderOptions,
} from "@shared/ui/dropdown/dropdownConstants";
import { DatePicker } from "@shared/ui/date-picker/date-picker";
import { useEffect, useState, type FC } from "react";
import editIcon from "@assets/icons/gallery-edit.svg";

const testUser = {
  name: "test",
  email: "test@test.ru",
  password: "123",
  dateOfBirth: new Date().getTime(),
  gender: "2", //Женский
  city: "1", //Москва
  aboutMe: "",
  myAvatar: "../../../db/users-photo/viktoria.jpg",
  description: "",
};

export const ProfileInfo: FC = () => {
  const user = testUser;
  const [showPasswordField, setShowPasswordField] = useState(false);

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: new Date().getTime(),
    gender: "",
    city: "",
    aboutMe: "",
    myAvatar: "",
    description: "",
  });

  useEffect(() => {
    if (user) {
      setFormValue({ ...user });
    }
  }, [user]);

  const handleInputChange = (
    field: keyof typeof formValue,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData(field, e.target.value);
  };

  const setData = <T,>(field: keyof typeof formValue, value: T) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleShowPasswordField = () => {
    setShowPasswordField((showPasswordField) => !showPasswordField);
  };

  const changeDate = (date: number) => {
    setData("dateOfBirth", date);
  };

  return (
    <div className={styles.profile_info__container}>
      <form className={styles.form}>
        <FormInputUI
          label="Почта"
          name="email"
          type="email"
          placeholder="Введите email"
          value={formValue.email}
          onChange={(e) => handleInputChange("email", e)}
          error={false}
          helperText=""
        />
        <span
          className={styles.change_password_block}
          onClick={handleToggleShowPasswordField}
        >
          Изменить пароль
        </span>
        {showPasswordField && (
          <FormInputUI
            label="Пароль"
            name="password"
            type="password"
            placeholder="Введите ваш пароль"
            value={formValue.password}
            onChange={(e) => handleInputChange("password", e)}
            error={false}
            helperText="Пароль должен содержать не менее 8 символов"
          />
        )}

        <FormInputUI
          label="Имя"
          name="name"
          type="text"
          placeholder="Введите имя"
          value={formValue.name}
          onChange={(e) => handleInputChange("name", e)}
          error={false}
        />
        <div className={styles.birth_gender_block}>
          <div className={styles.birth_block}>
            <label className={styles.label}>Дата рождения</label>
            <DatePicker onChange={changeDate} date={formValue.dateOfBirth} />
          </div>
          <div className={styles.gender_block}>
            <label className={styles.label}>Пол</label>
            <Dropdown
              options={genderOptions}
              type="input"
              placeholder="Не выбран"
              value={formValue.gender}
              onChange={() => {}}
            />
          </div>
        </div>
        <div>
          <label className={styles.label}>Город</label>
          <Dropdown
            options={cityOptions}
            type="input"
            placeholder="Не указан"
            value={formValue.city}
            onChange={() => {}}
          />
        </div>
        <FormTextArea
          label="О себе"
          placeholder="Расскажите немного о себе"
          value={formValue.description}
          onChange={(e) => handleInputChange("description", e)}
        />
        <Button
          type="primary"
          extraClass={styles.button_save}
          onClick={() => {}}
          htmlType="submit"
        >
          Сохранить
        </Button>
      </form>
      <div className={styles.card_wrapper}>
        <img
          src={formValue.myAvatar}
          className={styles.card__avatar}
          alt="Аватар пользователя"
        />
        <img
          src={editIcon}
          alt="Иконка редактирования"
          className={styles.edit_icon}
        />
      </div>
    </div>
  );
};
