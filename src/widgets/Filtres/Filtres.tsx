import { useState } from 'react'
import { GenderFilter } from './GenderFilter'
import { GeoFilter } from './GeoFilter'
import { SkillsFilter } from './SkillsFilter'
import { RoleFilter } from './RoleFilter'
import styles from './Filtres.module.css'
import closeIcon from '@assets/icons/cross.svg'

export const Filtres = () => {
	const [role, setRole] = useState('Всё')
	const [gender, setGender] = useState('Не имеет значения')
	const [cities, setCities] = useState<string[]>([])
	const [skills, setSkills] = useState<string[]>([])

	const resetFilters = () => {
		setRole('Всё')
		setGender('Не имеет значения')
		setCities([])
		setSkills([])
	}

	const activeFiltersCount = [
		role !== 'Всё',
		gender !== 'Не имеет значения',
		cities.length > 0,
		skills.length > 0,
	].filter(Boolean).length

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.mainTitle}>
					Фильтры
					{activeFiltersCount > 0 && (
						<span className={styles.filtersCount}> ({activeFiltersCount})</span>
					)}
				</h2>
				{activeFiltersCount > 0 && (
					<button className={styles.resetButton} onClick={resetFilters}>
						<span>Сбросить</span>
						<img
							src={closeIcon}
							alt='Сбросить фильтры'
							className={styles.closeIcon}
						/>
					</button>
				)}
			</div>

			<RoleFilter selectedRole={role} onChange={setRole} />
			<SkillsFilter selectedSkills={skills} onChange={setSkills} />
			<GenderFilter selectedGender={gender} onChange={setGender} />
			<GeoFilter selectedCities={cities} onChange={setCities} />
		</div>
	)
}
