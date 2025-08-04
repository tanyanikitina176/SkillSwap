import type { Subcategory } from '@entities/Category/CategoryTypes'

export type User = {
	id: string
	name: string
	age: number
	gender: UserGender
	city: City
	wantToLearnSkills: Subcategory[]
	teachingSkills: Subcategory[]
	photo: string
	description: string
	likes: User[]
}

export type UserGender = 'male' | 'female'

export type City = {
	id: string
	name: string
}
