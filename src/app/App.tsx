import { BrowserRouter } from 'react-router-dom'
import { Filtres } from '../widgets/Filtres/Filtres'
import { Footer } from '../widgets/Footer/Footer'
import './App.css'
import { CategoryDisplay } from '../widgets/SkillsPanel/SkillsPanel'
import { UserCard } from '../widgets/UserCard/user-card'
import type { User } from '../entities/User/types'

function App() {
	const user: User = {
		id: '11',
		name: 'Елена',
		age: 40,
		gender: 'female',
		cityId: '9',
		wantToLearnSkills: ['22', '23'],
		teachingSkills: ['20', '38'],
		photo: '../db/users-photo/elena.jpg',
		description:
			'Нутрициолог и инструктор по йоге. Помогаю людям находить баланс между телом и разумом через правильное питание и практики йоги. Интересуюсь вопросами сна и альтернативной медициной. Научу составлять здоровое меню и освоить базовые асаны йоги.',
		likes: ['2', '3', '7', '9'],
	}

	return (
		<>
			<BrowserRouter>
				<Filtres />
				<Footer />
				<CategoryDisplay />
			</BrowserRouter>
			<p>Начинаем работу</p>
			<UserCard {...user} />
		</>
	)
}

export default App
