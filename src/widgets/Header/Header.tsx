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

interface AppHeaderUIProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const AppHeaderUI: FC<AppHeaderUIProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [userName, setUserName] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<string | undefined>("");

  useEffect(() => {
    const updateUserState = (user: UserInLocalStorage | null) => {
      if (user) {
        setUserName(user.name);
        setUserAvatar(user.avatar as string);
      }
    };

    const user = getUserFromLocalStorage();
    updateUserState(user);

    EventEmitterWrapper.subcribeUserUpdate(updateUserState);

    return () => EventEmitterWrapper.unsubcribeUserUpdate(updateUserState);
  }, []);

  const isAuth = !!userName;

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
              {isDropdownOpen ? (
                <ChevronUp className={styles.chevronIcon} />
              ) : (
                <ChevronDown className={styles.chevronIcon} />
              )}
            </button>

            <div
              className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ""}`}
              ref={dropdownRef}
            >
              <CategoryDisplay />
            </div>
          </div>
        </div>

        <SearchInputUI value={searchQuery} onChange={onSearchChange} />

        {isAuth ? (
          <HeaderLoggedIn name={userName} avatar={userAvatar} />
        ) : (
          <>
            <div className={styles.topic}>
              <button title="Темная тема" className={styles.topicButton}>
                <Moon className={styles.icon} />
              </button>
            </div>

            <div className={styles.buttonsWrapper}>
              <NavLink to="/login">
                <Button type="secondary">Войти</Button>
              </NavLink>
              <NavLink to="/reg">
                <Button type="primary">Зарегистрироваться</Button>
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
