export type User = {
	id: string
	name: string
	age: number
	gender: UserGender
	cityId?: number
	wantToLearnSkills?: string[]
	teachingSkills?: string[]
	photo?: string
	description?: string
	likes?: string[]
}

export type UserGender = 'male' | 'female'
