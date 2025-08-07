import { useCallback, useEffect, useState, type FC } from "react";
import styles from "./profile-menu.module.css";
import { NavLink, useLocation } from "react-router-dom";
import type { IProfileMenuItemProps, IProfileMenuProps } from "./type";

const ProfileMenuItem = ({
  item,
  isActive,
  onClickItem,
}: IProfileMenuItemProps) => {
  const onClick = () => {
    onClickItem(item.id);
  };
  if (item.path) {
    return (
      <NavLink
        to={item.path}
        className={`${styles.sidebar_item} ${isActive ? styles.sidebar_item__active : ""}`}
        onClick={onClick}
      >
        <img src={item.icon} alt="icon"></img>
        <span className={styles.sidebar_item__title}>{item.title}</span>
      </NavLink>
    );
  } else {
    return (
      <li
        className={`${styles.sidebar_item} ${isActive ? styles.sidebar_item__active : ""}`}
        onClick={onClick}
      >
        <img src={item.icon} alt="icon"></img>
        <span className={styles.sidebar_item__title}>{item.title}</span>
      </li>
    );
  }
};

export const ProfileMenuUI: FC<IProfileMenuProps> = (
  profileMenuProps: IProfileMenuProps
) => {
  const location = useLocation();
  const { profileMenuItems } = profileMenuProps;
  const activeItem = profileMenuItems.find(
    (item) => item.path === location.pathname
  );
  const [currentId, setCurrentId] = useState<string | undefined>(
    activeItem?.id
  );

  const onClick = useCallback((id: string) => {
    setCurrentId(id);
  }, []);

  return (
    <>
      <aside className={styles.sidebar_cover}>
        {profileMenuItems.map((item) => {
          return (
            <ProfileMenuItem
              key={item.id}
              item={item}
              isActive={currentId === item.id}
              onClickItem={onClick}
            />
          );
        })}
      </aside>
    </>
  );
};
