import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../pages/HomePage/HomePage'
import { NotFound404 } from './../pages/page-404/page-404'
import { ConnetcError500 } from './../pages/page-500/page-500'
import { RegistrationPage } from './../pages/RegistrationPage/RegistrationPage'
import { ProfileMenu } from '@widgets/Profile/ProfileMenu'

// import { useEffect, useState } from 'react'
// import { fetchUsersData } from '@api/User/User-api'
// // import type { User } from '@entities/User/types'

function App() {
	// const [users, setUsers] = useState<User[]>([])
	// useEffect(() => {
	// 	fetchUsersData()
	// 		.then(users => {
	// 			console.log(users)
	// 			setUsers(users)
	// 		})
	// 		.catch(error => {
	// 			console.error('Ошибка при загрузке данных пользователей:', error)
	// 		})
	// }, [])
	return (
		<>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='*' element={<NotFound404 />} />
					<Route path='/500' element={<ConnetcError500 />} />
					<Route path='/reg' element={<RegistrationPage />} />
				</Routes>
	
		</>
	)
}

export default App
