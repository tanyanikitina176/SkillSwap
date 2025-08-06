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
import {
  validateDateOfBirth,
  validateDescription,
  validateDropdown,
  validateEmail,
  validateInput,
  validatePassword,
} from "@widgets/RegistrationForm/utils/validation";
import isEqual from "lodash/isEqual";
import EditIcon from "@assets/icons/edit.svg?react";

const testUser: TProfileInfoUser = {
  name: "test",
  email: "test@test.ru",
  password: "123",
  dateOfBirth: new Date().getTime(),
  gender: "2", //Женский
  city: "1", //Москва
  myAvatar: "../../../db/users-photo/viktoria.jpg",
  description: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  password: "",
  gender: "",
  city: "",
  description: "",
  dateOfBirth: "",
};

export type TProfileInfoUser = {
  name: string;
  email: string;
  password: string;
  dateOfBirth: number | null;
  gender: string;
  city: string;
  myAvatar: string;
  description: string;
};

export const ProfileInfo: FC = () => {
  const user: TProfileInfoUser = testUser;
  const [showPasswordField, setShowPasswordField] = useState(false);

  const [formValue, setFormValue] = useState<TProfileInfoUser>({
    name: "",
    email: "",
    password: "",
    dateOfBirth: null,
    gender: "",
    city: "",
    myAvatar: "",
    description: "",
  });

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  useEffect(() => {
    if (user) {
      setFormValue({ ...user });
    }
  }, [user]);

  useEffect(() => {
    const isDisabled =
      isEqual(user, formValue) || !isEqual(INITIAL_ERRORS, errors);
    setIsDisabledButton(isDisabled);
  }, [user, formValue, errors]);

  const handleInputChange =
    (field: keyof TProfileInfoUser) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { message } = validateInput(e.target.value);
      setErrors((prev) => ({ ...prev, [field]: message || "" }));
      setData(field, e.target.value);
    };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { message } = validateEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: message || "" }));
    setData("email", e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { message } = validatePassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: message || "" }));
    setData("password", e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { message } = validateDescription(e.target.value);
    setErrors((prev) => ({ ...prev, description: message || "" }));
    setData("description", e.target.value);
  };

  const handleGenderChange = (value: string | string[]) => {
    if (typeof value === "string") {
      const { message } = validateDropdown(value);
      setErrors((prev) => ({ ...prev, gender: message || "" }));
      setData("gender", value);
    }
  };

  const handleCityChange = (value: string | string[]) => {
    if (typeof value === "string") {
      const { message } = validateDropdown(value);
      setErrors((prev) => ({ ...prev, city: message || "" }));
      setData("city", value);
    }
  };

  const setData = <K extends keyof TProfileInfoUser>(
    field: K,
    value: TProfileInfoUser[K],
  ) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleShowPasswordField = () => {
    setShowPasswordField((showPasswordField) => !showPasswordField);
  };

  const hadleChangeDate = (date: number | null) => {
    const { message } = validateDateOfBirth(date);
    setErrors((prev) => ({ ...prev, dateOfBirth: message || "" }));
    setData("dateOfBirth", date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.profile_info__container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInputUI
          label="Почта"
          name="email"
          type="email"
          placeholder="Введите email"
          value={formValue.email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
          icon={<EditIcon />}
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
            onChange={handlePasswordChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        )}

        <FormInputUI
          label="Имя"
          name="name"
          type="text"
          placeholder="Введите имя"
          value={formValue.name}
          onChange={handleInputChange("name")}
          error={!!errors.name}
          helperText={errors.name}
          icon={<EditIcon />}
        />
        <div className={styles.birth_gender_block}>
          <div className={styles.birth_block}>
            <label className={styles.label}>Дата рождения</label>
            <DatePicker
              onChange={hadleChangeDate}
              date={formValue.dateOfBirth}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth}
            />
          </div>
          <div className={styles.gender_block}>
            <label className={styles.label}>Пол</label>
            <Dropdown
              options={genderOptions}
              type="input"
              placeholder="Не выбран"
              value={formValue.gender}
              onChange={handleGenderChange}
              error={!!errors.gender}
              helperText={errors.gender}
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
            onChange={handleCityChange}
            error={!!errors.city}
            helperText={errors.city}
          />
        </div>
        <FormTextArea
          label="О себе"
          placeholder="Расскажите немного о себе"
          value={formValue.description}
          onChange={handleDescriptionChange}
          helperText={errors.description}
          error={!!errors.description}
          withIcon={true}
        />
        <Button
          type="primary"
          extraClass={styles.button_save}
          htmlType="submit"
          disabled={isDisabledButton}
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
