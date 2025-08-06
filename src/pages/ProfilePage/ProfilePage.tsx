import { ProfileMenu } from '../../widgets/Profile/ProfileMenu';
import { ProfileInfo } from '../../widgets/Profile/profile-info';
import { AppHeaderUI } from '../../widgets/Header/Header';
import { Footer } from '../../widgets/Footer/Footer';
import styles from './ProfilePage.module.css';
import type { FC } from 'react';

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profile_page__wrapper}>
      <AppHeaderUI />
      <main className={styles.profile_page__container}>
        <ProfileMenu />
        <ProfileInfo />
      </main>
      <Footer />
    </div>
  );
}; 