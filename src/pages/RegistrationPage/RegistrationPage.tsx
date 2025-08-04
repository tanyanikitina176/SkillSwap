import React, { useState } from 'react';
import { RegistrationStep1 } from '../../widgets/RegistrationForm/RegistrationForm1/RegistrationForm1';
import { RegistrationStep2 } from '../../widgets/RegistrationForm/RegistrationForm2/RegistrationForm2';
import { RegistrationStep3 } from '../../widgets/RegistrationForm/RegistrationForm3/RegistrationForm3';
import { categories as rawCategories } from '../../../public/db/skills_categories.json';
import { subcategories as rawSubcategories } from '../../../public/db/skills_subcategories.json';
import type {
  Category,
  CategoryWithSubcategories,
  Subcategory,
} from '@entities/Category/CategoryTypes';
import { useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo.svg';
import closeIcon from '@assets/icons/cross.svg';
import styles from './RegistrationForm.module.css';
import { Button } from "@shared/ui/button/button";

const prepareCategories = (): CategoryWithSubcategories[] => {
  return rawCategories.map(category => {
    const categorySubcategories = rawSubcategories
      .filter(sub => sub.categoryId === category.id)
      .map(sub => ({
        id: sub.id,
        name: sub.name,
        category: {
          id: category.id,
          name: category.name,
          color: category.color,
          icon: category.icon
        }
      }));

    return {
      ...category,
      subcategories: categorySubcategories
    };
  });
};

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    birthDate: '',
    gender: '',
    city: '',
    categories: [] as string[],
    subcategories: [] as string[],
    avatar: undefined as File | undefined,
    skillName: '',
    skillCategory: null as Category | null,
    skillSubCategory: null as Subcategory | null,
    description: '',
    skillImage: '',
  });

  const categoriesWithSubcategories = React.useMemo(prepareCategories, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormDataChange = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmitAll = () => {
    // После успешной регистрации перенаправляем на главную (после реализовать модальные окна)
    console.log('Final form data:', formData);
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={logo} alt="SkillSwap Logo" className={styles.logo} />
          <Button 
            type="secondary" 
            onClick={handleClose}
            endIcon={<img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />}
            extraClass={styles.closeButton}
          >
            Закрыть
          </Button>
        </div>
      </header>

      <div className={styles.content}>
        {step === 1 && (
          <RegistrationStep1
            onNextStep={nextStep}
            formData={{ email: formData.email, password: formData.password }}
            setFormData={handleFormDataChange}
          />
        )}

        {step === 2 && (
          <RegistrationStep2
            onNextStep={nextStep}
            onPrevStep={prevStep}
            formData={{
              name: formData.name,
              birthDate: formData.birthDate,
              gender: formData.gender,
              city: formData.city,
              categories: formData.categories,
              subcategories: formData.subcategories,
              avatar: formData.avatar,
            }}
            setFormData={handleFormDataChange}
          />
        )}

        {step === 3 && (
          <RegistrationStep3
            onNextStep={handleSubmitAll}
            onPrevStep={prevStep}
            categories={categoriesWithSubcategories}
            formData={{
              skillName: formData.skillName,
              skillCategory: formData.skillCategory,
              skillSubCategory: formData.skillSubCategory,
              description: formData.description,
              skillImage: formData.skillImage,
            }}
            setFormData={handleFormDataChange}
          />
        )}
      </div>
    </div>
  );
};