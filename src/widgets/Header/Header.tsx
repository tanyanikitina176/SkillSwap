import styles from "./Header.module.css";
import logo from "@assets/images/logo.svg";
import topic from "@assets/icons/moon.svg";
import chevronDown from "@assets/icons/chevron-down.svg";
import chevronUp from "@assets/icons/chevron-up.svg";
import { SearchInputUI } from "@shared/ui/search";
import { Button } from "@shared/ui/button/button";
import { CategoryDisplay } from "@widgets/SkillsPanel/SkillsPanel";
import { useRef, useState } from "react";
import clsx from "clsx";

export const AppHeaderUI = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.linksWrapper}>
          <span className={styles.text}>О проекте</span>

          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={clsx(styles.dropdownTrigger, styles.text)}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Все навыки
              <img
                src={isDropdownOpen ? chevronUp : chevronDown}
                alt="Стрелка вниз"
                className={styles.chevronDown}
              />
            </button>

            <div
              className={`${styles.dropdownContent} ${isDropdownOpen ? styles.active : ""}`}
              ref={dropdownRef}
            >
              <CategoryDisplay />
            </div>
          </div>
        </div>

        <SearchInputUI />

        <div className={styles.topic}>
          <button title="Темная тема" className={styles.topicButton}>
            <img src={topic} alt="Тема" className={styles.icon} />
          </button>
        </div>

        <div className={styles.buttonsWrapper}>
          <Button type="secondary">Войти</Button>
          <Button type="primary">Зарегистрироваться</Button>
        </div>
      </nav>
    </header>
  );
};
