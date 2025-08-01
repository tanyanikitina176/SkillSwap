import { BrowserRouter } from 'react-router-dom'
import { Filtres } from '@widgets/Filtres/Filtres'
import { Footer } from '@widgets/Footer/Footer'
import './App.css'
import { CategoryDisplay } from '@widgets/SkillsPanel/SkillsPanel'
import { UserCard } from '@widgets/UserCard/user-card'
import { demoUser as user } from '@entities/User/userHelper'
import { RegistrationStep3 } from '@widgets/RegistrationForm/RegistrationStep3/RegistrationStep3'
import {
	CATEGORIES,
	initializeCategories,
} from '@shared/lib/helpers/categoryHelpers'
import type { CategoryWithSubcategories } from '@entities/Category/CategoryTypes'
import { useState } from 'react'

function App() {
	const [categories, setCategories] = useState<CategoryWithSubcategories[]>([])
	initializeCategories().then(success => {
		if (success) {
			setCategories(CATEGORIES)
		}
	})

	const onLikeClick = (userId: string) => {
		console.log(`Like clicked for user with ID: ${userId}`)
	}
	const onButtonClick = (userId: string) => {
		console.log(`Button clicked for user with ID: ${userId}`)
	}
	return (
		<>
			<BrowserRouter>
				<Filtres />
				<Footer />
				<CategoryDisplay />
			</BrowserRouter>
			<p>Начинаем работу</p>
			<UserCard
				user={user}
				onLikeClick={onLikeClick}
				onButtonClick={onButtonClick}
			/>
			<RegistrationStep3
				onNextStep={function (): void {
					// throw new Error('Function not implemented.')
					console.log('Next step clicked')
				}}
				categories={categories}
				formData={{
					skillName: '',
					skillCategory: null,
					skillSubCategory: null,
					description: '',
					skillImage: '',
				}}
				setFormData={data => {
					console.log('Form data set:', data)
				}}
			/>
		</>
	)
}

export default App
