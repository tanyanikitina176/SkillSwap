import React, { useState, type ChangeEvent } from 'react'

import schoolBoardIcon from '@assets/images/school-board.svg'

import { Button } from '@shared/ui/button/button'
import { FormInputUI } from '@shared/ui/form-input/form-input'
import { StepIndicator } from '@shared/ui/stepIndicator/stepIndicator'
import {
	validateDescription,
	validateFormStep3,
	validateSkillCategory,
	validateSkillImage,
	validateSkillName,
	validateSkillSubCategory,
} from '../utils/validation'
import styles from './RegistrationForm3.module.css'
import { Dropdown } from '@shared/ui/dropdown/dropdown'
import type {
	Category,
	CategoryWithSubcategories,
	Subcategory,
} from '@entities/Category/CategoryTypes'
import { FormTextArea } from '@shared/ui/text-area/text-area'

interface RegistrationStep3Props {
	onNextStep: () => void
	categories: CategoryWithSubcategories[]
	formData: {
		skillName: string
		skillCategory: Category | null
		skillSubCategory: Subcategory | null
		description: string
		skillImage: string
	}
	setFormData: (data: {
		skillName: string
		skillCategory: Category | null
		skillSubCategory: Subcategory | null
		description: string
		skillImage: string
	}) => void
}

export const RegistrationStep3: React.FC<RegistrationStep3Props> = ({
	onNextStep,
	formData,
	setFormData,
	categories,
}) => {
	const [errors, setErrors] = useState({
		skillName: '',
		skillCategory: '',
		skillSubCategory: '',
		description: '',
		skillImage: '',
	})

	const [values, setValues] = useState<{
		skillName: string
		skillCategory: Category | null
		skillSubCategory: Subcategory | null
		description: string
		skillImage: string
	}>(formData)

	function getAllSubcategories(
		categoriesWithSubcategories: CategoryWithSubcategories[],
		categoryId?: string
	): Subcategory[] {
		const filteredCategories = categoryId
			? categoriesWithSubcategories.filter(cat => cat.id === categoryId)
			: categoriesWithSubcategories

		return filteredCategories.flatMap(category => category.subcategories)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
		setFormData({ ...values, [name]: value })
		if (name === 'skillName') {
			console.log(`Validating skillName: ${value}`)
			const { message } = validateSkillName(value)
			setErrors(prev => ({ ...prev, skillName: message || '' }))
		}
		if (name === 'skillImage') {
			const { message } = validateSkillImage(value)
			setErrors(prev => ({ ...prev, skillImage: message || '' }))
		}
	}

	const handleCategoryChange = (value: string | string[]) => {
		categories.find(category => category.subcategories)
		const selectedCategory = categories.find(category => category.id === value)
		setValues(prev => ({
			...prev,
			skillCategory: selectedCategory || null,
		}))
		setFormData({ ...values, skillCategory: selectedCategory || null })
		const { message } = validateSkillCategory(selectedCategory)
		setErrors(prev => ({ ...prev, skillCategory: message || '' }))
	}

	const handleSubCategoryChange = (value: string | string[]) => {
		const selectedCategory = getAllSubcategories(
			categories,
			values.skillCategory?.id
		)
		const selectedSubCategory = selectedCategory.find(
			subcategory => subcategory.id === value
		)
		setValues(prev => ({
			...prev,
			skillSubCategory: selectedSubCategory || null,
		}))
		setFormData({ ...values, skillSubCategory: selectedSubCategory || null })
		const { message } = validateSkillSubCategory(selectedSubCategory)
		setErrors(prev => ({ ...prev, skillSubCategory: message || '' }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const validation = validateFormStep3(
			values.skillName,
			values.skillCategory,
			values.skillSubCategory,
			values.description,
			values.skillImage
		)
		setErrors({
			skillName: validation.errors.skillName || '',
			skillCategory: validation.errors.skillCategory || '',
			skillSubCategory: validation.errors.skillSubCategory || '',
			description: validation.errors.description || '',
			skillImage: validation.errors.skillImage || '',
		})

		if (validation.isValid) {
			onNextStep()
		}
	}

	function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
		setFormData({ ...values, [name]: value })
		if (name === 'description') {
			const { message } = validateDescription(value)
			setErrors(prev => ({ ...prev, description: message || '' }))
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.stepIndicatorContainer}>
				<StepIndicator currentStep={3} totalSteps={3} />
			</div>

			<div className={styles.content}>
				<div className={styles.imageContainer}>
					<img src={schoolBoardIcon} alt='Изображение анкеты' />
				</div>
				<div className={styles.formContainer}>
					<form onSubmit={handleSubmit} className={styles.form}>
						<FormInputUI
							label='Название навыка'
							name='skillName'
							type='text'
							placeholder='Введите название навыка'
							value={values.skillName}
							onChange={handleInputChange}
							error={!!errors.skillName}
							helperText={errors.skillName}
						/>

						<div className={styles.inputContainer}>
							<label className={styles.label}>Категория навыка</label>
							<Dropdown
								options={categories.map(category => ({
									value: category.id,
									label: category.name,
								}))}
								type='select'
								placeholder='Выберите категорию навыка'
								onChange={value => handleCategoryChange(value)}
							/>
						</div>

						<div className={styles.inputContainer}>
							<label className={styles.label}>Подкатегория навыка</label>
							<Dropdown
								options={
									categories
										.find(category => category.id === values.skillCategory?.id)
										?.subcategories.map(subcategory => ({
											value: subcategory.id,
											label: subcategory.name,
										})) || []
								}
								type='select'
								placeholder='Выберите подкатегорию навыка'
								onChange={value => handleSubCategoryChange(value)}
							/>
						</div>

						<FormTextArea
							label='Описание'
							name='description'
							placeholder='Коротко опишите, чему можете научить'
							value={values.description}
							onChange={handleTextAreaChange}
							error={!!errors.description}
							helperText={errors.description}
						/>

						<div className={styles.buttonsContainer}>
							<Button
								type='secondary'
								htmlType='button'
								extraClass={styles.submitButton}
							>
								Назад
							</Button>

							<Button
								type='primary'
								htmlType='submit'
								extraClass={styles.submitButton}
							>
								Далее
							</Button>
						</div>
					</form>
				</div>

				<div className={styles.descriptionContainer}>
					<div className={styles.icon}>
						<img src={schoolBoardIcon} alt='Изображение анкеты' />
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
	)
}
