import React, { useState, useMemo } from 'react';
import { Button } from '@shared/ui/button/button';
import { FormInputUI } from '@shared/ui/form-input/form-input';
import { DataPicker } from '@shared/ui/data-picker/data-picker';
import { Dropdown } from '@shared/ui/dropdown/dropdown';
import { StepIndicator } from '@shared/ui/stepIndicator/stepIndicator';
import userIcon from '@assets/images/user info.svg';
import iconAdd from '@assets/icons/Icon+Add.svg';
import styles from './RegistrationForm2.module.css';
import { genderOptions, cityOptions } from '@shared/ui/dropdown/dropdownConstants';
import { categories } from '../../../../public/db/skills_categories.json';
import { subcategories } from '../../../../public/db/skills_subcategories.json';
import { validateFormInfo, type FormErrors } from '../utils/validation';

interface RegistrationStep2Props {
  onNextStep: () => void;
  onPrevStep: () => void;
  formData: {
    name: string;
    birthDate: string;
    gender: string;
    city: string;
    categories: string[];
    subcategories: string[];
    avatar?: File;
  };
  setFormData: (data: any) => void;
}

export const RegistrationStep2: React.FC<RegistrationStep2Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData
}) => {
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    birthDate: '',
    gender: '',
    city: '',
    categories: '',
    subcategories: ''
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const subcategoriesOptions = useMemo(() => {
    if (selectedCategories.length === 0) return [];
    
    return subcategories
      .filter(subcategory => selectedCategories.includes(subcategory.categoryId))
      .map(subcategory => ({
        value: subcategory.id,
        label: subcategory.name
      }));
  }, [selectedCategories]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleDateChange = (dateString: string) => {
    setFormData({ ...formData, birthDate: dateString });
    
    const now = new Date();
    const date = new Date(dateString);
    setErrors(prev => ({
      ...prev,
      birthDate: date > now ? 'Дата рождения не может быть в будущем' : ''
    }));
  };

  const handleGenderChange = (value: string | string[]) => {
    const genderValue = Array.isArray(value) ? value[0] : value;
    setFormData({ ...formData, gender: genderValue });
    validateField('gender', genderValue);
  };

  const handleCityChange = (value: string | string[]) => {
    const cityValue = Array.isArray(value) ? value[0] : value;
    setFormData({ ...formData, city: cityValue });
    validateField('city', cityValue);
  };

  const handleCategoriesChange = (value: string | string[]) => {
    const categoriesValue = Array.isArray(value) ? value : [value];
    setSelectedCategories(categoriesValue);
    setFormData({ ...formData, categories: categoriesValue });
    setSelectedSubcategories([]);
    setFormData((prev: any) => ({ ...prev, subcategories: [] }));
    validateField('categories', categoriesValue);
  };

  const handleSubcategoriesChange = (value: string | string[]) => {
    const subcategoriesValue = Array.isArray(value) ? value : [value];
    setSelectedSubcategories(subcategoriesValue);
    setFormData({ ...formData, subcategories: subcategoriesValue });
    validateField('subcategories', subcategoriesValue);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        avatar: file
      });
    }
  };

  const validateField = (name: string, value: any) => {
    const tempFormData = { ...formData, [name]: value };
    const { errors: newErrors } = validateFormInfo(tempFormData);
    setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const validateForm = () => {
    const { isValid, errors: newErrors } = validateFormInfo(formData);
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const now = new Date();
  const birthDate = formData.birthDate ? new Date(formData.birthDate) : null;
  
  if (birthDate && birthDate > now) {
    setErrors(prev => ({
      ...prev,
      birthDate: 'Дата рождения не может быть в будущем'
    }));
    return;
  }

  if (validateForm()) {
    onNextStep();
  }
};

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.name
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.stepIndicatorContainer}>
        <StepIndicator currentStep={2} totalSteps={3} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.avatarContainer}>
              <label htmlFor="avatar" className={styles.avatarLabel}>
                <img
                  src={formData.avatar ? URL.createObjectURL(formData.avatar) : iconAdd}
                  alt="Загрузить аватар"
                  className={styles.avatarImage}
                />
              </label>
              <input
                type="file"
                id="avatar"
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>

            <FormInputUI
              label="Имя"
              name="name"
              type="text"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <div className={styles.row}>
              <div className={styles.column}>
                <label className={styles.label}>Дата рождения</label>
                <DataPicker onChange={(dateString: string) => handleDateChange(dateString)} />
                {errors.birthDate && <div className={styles.errorText}>{errors.birthDate}</div>}
              </div>
              <div className={styles.column}>
                <label className={styles.label}>Пол</label>
                <Dropdown
                  type="select"
                  options={genderOptions}
                  value={formData.gender}
                  onChange={handleGenderChange}
                  placeholder="Не указан"
                />
                {errors.gender && <div className={styles.errorText}>{errors.gender}</div>}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Город</label>
              <Dropdown
                type="input"
                options={cityOptions}
                value={formData.city}
                onChange={handleCityChange}
                placeholder="Не указан"
              />
              {errors.city && <div className={styles.errorText}>{errors.city}</div>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Категория навыка, которому хотите научиться</label>
              <Dropdown
                type="multiselect"
                options={categoryOptions}
                value={selectedCategories}
                onChange={handleCategoriesChange}
                placeholder="Выберите категорию"
              />
              {errors.categories && <div className={styles.errorText}>{errors.categories}</div>}
            </div>

            
              <div className={styles.inputGroup}>
                <label className={styles.label}>Подкатегория навыка, которому хотите научиться</label>
                <Dropdown
                  type="multiselect"
                  options={subcategoriesOptions}
                  value={selectedSubcategories}
                  onChange={handleSubcategoriesChange}
                  placeholder="Выберите подкатегорию"
                />
                {errors.subcategories && <div className={styles.errorText}>{errors.subcategories}</div>}
              </div>

            <div className={styles.buttonsContainer}>
              <Button
                type="secondary"
                onClick={onPrevStep}
                extraClass={styles.backButton}
              >
                Назад
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                extraClass={styles.submitButton}
              >
                Продолжить
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.icon}>
            <img src={userIcon} alt="Пользователь" />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              <p>Расскажите немного о себе</p>
            </div>
            <div className={styles.description}>
              <p>Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};