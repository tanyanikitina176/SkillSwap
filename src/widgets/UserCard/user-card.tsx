import type { FC } from 'react'
import styles from './user-card.module.css'
import { Tag } from '../../shared/ui/tag/tag'
import { Button } from '../../shared/ui/button/button'
import type { UserCardProps } from './type'

export const UserCard: FC<UserCardProps> = ({
	user,
	onLikeClick,
	onButtonClick,
}) => (
	<div className={styles.card}>
		<button
			type='button'
			className={styles.card__like_button}
			onClick={() => onLikeClick?.(user.id)}
		></button>
		<div className={styles.card__header}>
			<img
				src={props.photo}
				alt='Аватар пользователя'
				className={styles.card__avatar}
			/>
			<div className={styles.card__title}>
				<span className={styles.card__user_name_title}>{props.name}</span>
				<span className={styles.card__user_description}>
					{props.cityId}, {props.age} года
				</span>
			</div>
		</div>
		<div>
			<div className={styles.card__skills}>
				<span className={styles.card__skills_title}>Может научить:</span>
				<div className={styles.card__skills_list}>
					{user.teachingSkills.map(skill => (
						<Tag key={skill} label={skill} backgroundColor={'#E0F7FA'} />
					))}
				</div>
			</div>
			<div className={styles.card__skills}>
				<span className={styles.card__skills_title}>Хочет научиться:</span>
				<div className={styles.card__skills_list}>
					{user.wantToLearnSkills.map(skill => (
						<Tag key={skill} label={skill} backgroundColor={'#E0F7FA'} />
					))}
				</div>
			</div>
		</div>
		<Button
			type='primary'
			htmlType='button'
			onClick={() => onButtonClick?.(user.id)}
			extraClass={styles.card__button}
		>
			Подробнее
		</Button>
	</div>
)
