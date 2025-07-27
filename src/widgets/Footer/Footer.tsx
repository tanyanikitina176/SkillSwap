import type { FC } from "react";
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Link to="/" className={styles.logo}>
      <img src="../../assets/images/logo.svg" alt="SkillSwap Logo" />
    </Link>
  </footer>
)