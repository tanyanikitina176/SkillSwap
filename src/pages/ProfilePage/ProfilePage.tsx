import { ProfileMenu } from '../../widgets/Profile/ProfileMenu';
import { ProfileInfo } from '../../widgets/Profile/profile-info';
import styles from './ProfilePage.module.css';
import type { FC } from 'react';

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profile_page__container}>
      <ProfileMenu />
      <ProfileInfo />
    </div>
  );
}; 