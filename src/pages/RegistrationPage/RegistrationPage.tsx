import React, { useState } from "react";
import { RegistrationStep1 } from "@widgets/RegistrationForm/RegistrationForm1/RegistrationForm1";
import { RegistrationStep2 } from "@widgets/RegistrationForm/RegistrationForm2/RegistrationForm2";
import { RegistrationStep3 } from "@widgets/RegistrationForm/RegistrationForm3/RegistrationForm3";
import { categories as rawCategories } from "@public/db/skills_categories.json";
import { subcategories as rawSubcategories } from "@public/db/skills_subcategories.json";
import type {
  Category,
  CategoryWithSubcategories,
  Subcategory,
} from "@entities/Category/CategoryTypes";
import { useNavigate } from "react-router-dom";
import logo from "@assets/images/logo.svg";
import Cross from "@assets/icons/cross.svg?react";
import styles from "./RegistrationForm.module.css";
import { Button } from "@shared/ui/button/button";
import { convertFileToBase64 } from "@shared/lib/utils/convertFileToBase64";

const prepareCategories = (): CategoryWithSubcategories[] => {
  return rawCategories.map((category) => {
    const categorySubcategories = rawSubcategories
      .filter((sub) => sub.categoryId === category.id)
      .map((sub) => ({
        id: sub.id,
        name: sub.name,
        category: {
          id: category.id,
          name: category.name,
          color: category.color,
          icon: category.icon,
        },
      }));

    return {
      ...category,
      subcategories: categorySubcategories,
    };
  });
};

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    birthDate: 0 as number,
    gender: "",
    city: "",
    categories: [] as string[],
    subcategories: [] as string[],
    avatar: undefined as File | undefined,
    skillName: "",
    skillCategory: null as Category | null,
    skillSubCategory: null as Subcategory | null,
    description: "",
    skillImage: "",
  });

  const categoriesWithSubcategories = React.useMemo(prepareCategories, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormDataChange = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmitAll = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!formData.email || !formData.password || !formData.name) {
        throw new Error("Заполните обязательные поля");
      }

      const userData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        birthDate: formData.birthDate,
        gender: formData.gender,
        city: formData.city,
        categories: formData.categories,
        subcategories: formData.subcategories,
        skills: {
          name: formData.skillName,
          category: formData.skillCategory,
          subcategory: formData.skillSubCategory,
          description: formData.description,
        },
        avatar: formData.avatar ? await convertFileToBase64(formData.avatar) : null,
        skillImage: formData.skillImage,
        description: formData.description
      };

      // Сохранение в localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // Перенаправление на главную
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка регистрации");
      // Возвращаем на первый шаг при ошибке
      setStep(1);
    } finally {
      setIsLoading(false);
    }
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
              <Cross className={styles.closeIcon} />
            }
            extraClass={styles.closeButton}
          >
            Закрыть
          </Button>
        </div>
      </header>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.content}>
        {isLoading ? (
          <div className={styles.loader}>Загрузка...</div>
        ) : (
          <>
            {step === 1 && (
              <RegistrationStep1
                onNextStep={nextStep}
                formData={{
                  email: formData.email,
                  password: formData.password,
                }}
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
          </>
        )}
      </div>
    </div>
  );
};
