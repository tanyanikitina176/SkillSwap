import { BrowserRouter } from 'react-router-dom'
import { Filtres } from '@widgets/Filtres/Filtres'
import { Footer } from '@widgets/Footer/Footer'
import './App.css'
import { CategoryDisplay } from '@widgets/SkillsPanel/SkillsPanel'
import { UserCard } from '@widgets/UserCard/user-card'
import { demoUser as user } from '@entities/User/userHelper'

function App() {
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
		</>
	)
}

export default App
