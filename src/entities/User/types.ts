export type User = {
	id: string
	name: string
	age: number
	gender: UserGender
	cityId: string
	wantToLearnSkills: string[]
	teachingSkills: string[]
	photo: string
	description: string
	likes: string[]
}

export type UserGender = 'male' | 'female'
