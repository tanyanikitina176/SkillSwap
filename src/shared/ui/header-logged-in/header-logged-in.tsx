import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Notification from '@assets/icons/notification.svg?react';
import Like from '@assets/icons/like.svg?react';
import defaultUserIcon from '@assets/icons/default-user-icon.png';
import theme from '@assets/icons/moon.svg';
import styles from './header-logged-in.module.css';

type Props = {
  name: string;
  avatar?: string;
};

export const HeaderLoggedIn: React.FC<Props> = ({ name, avatar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <button type="button" className={styles.button}>
          <img src={theme} alt="Тема." className={styles.icon} />
        </button>
        <button type="button" className={styles.button}>
          <Notification className={styles.icon} />
        </button>
        <NavLink to="/profile/favourites" className={styles.link} end>
          <button type="button" className={styles.button}>
            <Like className={styles.icon} />
          </button>
        </NavLink>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.button} ${styles.userInfoButton}`}
      >
        <span className={styles.userName}>{name}</span>
        <img
          src={avatar ?? defaultUserIcon}
          alt="Аватар пользователя."
          className={styles.userAvatar}
        />
      </button>
    </div>
  );
};
