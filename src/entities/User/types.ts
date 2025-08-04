import type { EnrichedSkill } from '@api/User/User-api'

export type User = {
	id: string
	name: string
	age: number
	gender: UserGender
	city: City
	wantToLearnSkills: EnrichedSkill[]
	teachingSkills: EnrichedSkill[]
	photo: string
	description: string
	likes: User[]
}

export type UserGender = 'male' | 'female'

export type City = {
	id: string
	name: string
}
