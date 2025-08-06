import React, { useState, type ChangeEvent } from "react";

import schoolBoardIcon from "@assets/images/school-board.svg";

import { Button } from "@shared/ui/button/button";
import { FormInputUI } from "@shared/ui/form-input/form-input";
import { StepIndicator } from "@shared/ui/stepIndicator/stepIndicator";
import {
  validateDescription,
  validateFormStep3,
  validateSkillCategory,
  validateSkillImage,
  validateSkillName,
  validateSkillSubCategory,
} from "../utils/validation";
import styles from "./RegistrationForm3.module.css";
import { Dropdown } from "@shared/ui/dropdown/dropdown";
import type {
  Category,
  CategoryWithSubcategories,
  Subcategory,
} from "@entities/Category/CategoryTypes";
import { FormTextArea } from "@shared/ui/text-area/text-area";
import { DragAndDropUI } from "@shared/ui/drag-and-drop/drag-and-drop";

interface RegistrationStep3Props {
  onNextStep: () => void;
  onPrevStep: () => void;
  categories: CategoryWithSubcategories[];
  formData: {
    skillName: string;
    skillCategory: Category | null;
    skillSubCategory: Subcategory | null;
    description: string;
    skillImage: string;
  };
  setFormData: (data: {
    skillName: string;
    skillCategory: Category | null;
    skillSubCategory: Subcategory | null;
    description: string;
    skillImage: string;
  }) => void;
}

export const RegistrationStep3: React.FC<RegistrationStep3Props> = ({
  onNextStep,
  onPrevStep,
  formData,
  setFormData,
  categories,
}) => {
  const [errors, setErrors] = useState({
    skillName: "",
    skillCategory: "",
    skillSubCategory: "",
    description: "",
    skillImage: "",
  });

  const [values, setValues] = useState<{
    skillName: string;
    skillCategory: Category | null;
    skillSubCategory: Subcategory | null;
    description: string;
    skillImage: string;
  }>(formData);

  function getAllSubcategories(
    categoriesWithSubcategories: CategoryWithSubcategories[],
    categoryId?: string,
  ): Subcategory[] {
    const filteredCategories = categoryId
      ? categoriesWithSubcategories.filter((cat) => cat.id === categoryId)
      : categoriesWithSubcategories;

    return filteredCategories.flatMap((category) => category.subcategories);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setFormData({ ...values, [name]: value });
    if (name === "skillName") {
      console.log(`Validating skillName: ${value}`);
      const { message } = validateSkillName(value);
      setErrors((prev) => ({ ...prev, skillName: message || "" }));
    }
    if (name === "skillImage") {
      const { message } = validateSkillImage(value);
      setErrors((prev) => ({ ...prev, skillImage: message || "" }));
    }
  };

  const handleCategoryChange = (value: string | string[]) => {
    categories.find((category) => category.subcategories);
    const selectedCategory = categories.find(
      (category) => category.id === value,
    );
    setValues((prev) => ({
      ...prev,
      skillCategory: selectedCategory || null,
    }));
    setFormData({ ...values, skillCategory: selectedCategory || null });
    const { message } = validateSkillCategory(selectedCategory || null);
    setErrors((prev) => ({ ...prev, skillCategory: message || "" }));
  };

  const handleSubCategoryChange = (value: string | string[]) => {
    const selectedCategory = getAllSubcategories(
      categories,
      values.skillCategory?.id,
    );
    const selectedSubCategory = selectedCategory.find(
      (subcategory) => subcategory.id === value,
    );
    setValues((prev) => ({
      ...prev,
      skillSubCategory: selectedSubCategory || null,
    }));
    setFormData({ ...values, skillSubCategory: selectedSubCategory || null });

    const { message } = validateSkillSubCategory(selectedSubCategory || null);
    setErrors((prev) => ({ ...prev, skillSubCategory: message || "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateFormStep3(values);
    setErrors({
      skillName: validation.errors.skillName || "",
      skillCategory: validation.errors.skillCategory || "",
      skillSubCategory: validation.errors.skillSubCategory || "",
      description: validation.errors.description || "",
      skillImage: validation.errors.skillImage || "",
    });

    if (validation.isValid) {
      onNextStep();
    }
  };

  function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setFormData({ ...values, [name]: value });
    if (name === "description") {
      const { message } = validateDescription(value);
      setErrors((prev) => ({ ...prev, description: message || "" }));
    }
  }

  const handleFileChange = (file: File | null) => {
    const fileUrl = file ? URL.createObjectURL(file) : "";
    setValues((prev) => ({ ...prev, skillImage: fileUrl }));
    setFormData({ ...values, skillImage: fileUrl });
    const { message } = validateSkillImage(fileUrl);
    setErrors((prev) => ({ ...prev, skillImage: message || "" }));
  };

  const validationResult = validateFormStep3(values);
  const isFormValid = validationResult.isValid;

  return (
    <div className={styles.wrapper}>
      <div className={styles.stepIndicatorContainer}>
        <StepIndicator currentStep={3} totalSteps={3} />
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInputUI
              label="Название навыка"
              name="skillName"
              type="text"
              placeholder="Введите название навыка"
              value={values.skillName}
              onChange={handleInputChange}
              error={!!errors.skillName}
              helperText={errors.skillName}
            />

            <div className={styles.inputContainer}>
              <label className={styles.label}>Категория навыка</label>
              <Dropdown
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
                type="select"
                placeholder="Выберите категорию навыка"
                onChange={(value) => handleCategoryChange(value)}
              />
              {errors.skillCategory && (
                <span className={styles.errorText}>
                  {validateSkillCategory(values.skillCategory).message ||
                    "ERROR"}
                </span>
              )}
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.label}>Подкатегория навыка</label>
              <Dropdown
                options={
                  categories
                    .find(
                      (category) => category.id === values.skillCategory?.id,
                    )
                    ?.subcategories.map((subcategory) => ({
                      value: subcategory.id,
                      label: subcategory.name,
                    })) || []
                }
                type="select"
                placeholder="Выберите подкатегорию навыка"
                onChange={(value) => handleSubCategoryChange(value)}
              />
              {errors.skillSubCategory && (
                <span className={styles.errorText}>
                  {validateSkillSubCategory(values.skillSubCategory).message ||
                    "ERROR"}
                </span>
              )}
            </div>

            <FormTextArea
              label="Описание"
              name="description"
              placeholder="Коротко опишите, чему можете научить"
              value={values.description}
              onChange={handleTextAreaChange}
              error={!!errors.description}
              helperText={errors.description}
            />

            <DragAndDropUI 
              onFileChange={handleFileChange}
            />

            <div className={styles.buttonsContainer}>
              <Button
                type="secondary"
                htmlType="button"
                extraClass={styles.submitButton}
                onClick={onPrevStep}
              >
                Назад
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                extraClass={styles.submitButton}
                disabled={!isFormValid}
                onClick={onNextStep}
              >
                Продолжить
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.icon}>
            <img src={schoolBoardIcon} alt="Изображение анкеты" />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              <p>Укажите, чем вы готовы поделиться</p>
            </div>
            <div className={styles.description}>
              <p>
                Так другие люди смогут увидеть ваши предложения и предложить вам
                обмен!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
