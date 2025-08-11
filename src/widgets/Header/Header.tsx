import styles from "./Header.module.css";
import Logo from "@assets/images/logo.svg?react";
import Moon from "@assets/icons/moon.svg?react";
import ChevronDown from "@assets/icons/chevron-down.svg?react";
import ChevronUp from "@assets/icons/chevron-up.svg?react";
import { SearchInputUI } from "@shared/ui/search";
import { Button } from "@shared/ui/button/button";
import { CategoryDisplay } from "@widgets/SkillsPanel/SkillsPanel";
import { type FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { HeaderLoggedIn } from "@shared/ui/header-logged-in/header-logged-in";
import type { UserInLocalStorage } from "@entities/User/types";
import { EventEmitterWrapper } from "@shared/lib/event/EventEmitter";
import { getUserFromLocalStorage } from "@shared/lib/utils/getDataFromLocalStorage";


export const AppHeaderUI = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false)
	const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const userData = localStorage.getItem('user')
	let userName = ''
	let userAvatar = ''

	if (userData) {
		try {
			const user = JSON.parse(userData)
			userName = user.name
			userAvatar = user.avatar
		} catch (err) {
			console.error('Ошибка при получении user из localStorage:', err)
		}
	}


	const isAuth = !!userName

	const toggleProfileDropdown = (): void => {
		setProfileDropdownOpen(prevState => !prevState)
	}

	const closeDropdownProfile = (): void => {
		setProfileDropdownOpen(false)
	}


  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <NavLink to="/">
            <Logo className={styles.logo} />
          </NavLink>
        </div>

        <div className={styles.linksWrapper}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.text} ${isActive ? styles.text_active : ""} `
            }
          >
            <>О проекте</>
          </NavLink>


					<div className={styles.dropdownWrapper} ref={dropdownRef}>
						<button
							className={clsx(styles.dropdownTrigger, styles.text)}
							onClick={() => setDropdownOpen(!isDropdownOpen)}
						>
							Все навыки
							<img
								src={isDropdownOpen ? chevronUp : chevronDown}
								alt='Стрелка вниз'
								className={styles.chevronDown}
							/>
						</button>

						<div
							className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ''}`}
							ref={dropdownRef}
						>
							<CategoryDisplay />
						</div>
					</div>
				</div>

				<SearchInputUI />

				{isAuth ? (
					<div className={styles.wrapperDropdownProfile}>
						<HeaderLoggedIn
							name={userName}
							avatar={userAvatar}
							handleClick={toggleProfileDropdown}
						/>
						<ProfileDropdown
							isOpen={isProfileDropdownOpen}
							onClose={closeDropdownProfile}
							handleLogout={() => {
								localStorage.removeItem('user')
								window.location.reload()
							}}
						/>
					</div>
				) : (
					<>
						<div className={styles.topic}>
							<button title='Темная тема' className={styles.topicButton}>
								<img src={topic} alt='Тема' className={styles.icon} />
							</button>
						</div>

						<div className={styles.buttonsWrapper}>
							<NavLink to='/login'>
								<Button type='secondary'>Войти</Button>
							</NavLink>
							<NavLink to='/reg'>
								<Button type='primary'>Зарегистрироваться</Button>
							</NavLink>
						</div>
					</>
				)}
			</nav>
		</header>
	)
}
