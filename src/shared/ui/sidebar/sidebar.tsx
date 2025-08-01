import { useState, type FC } from "react";
import { type ISidebarItem } from "./sidebarData";
import styles from "./sidebar.module.css";

interface ISidebarProps {
  sidebarItems: ISidebarItem[];
}

interface ISidebarItemProps {
  item: ISidebarItem;
  isActive: boolean;
  onClickItem: (id: string) => void;
}

const SidebarItem = ({ item, isActive, onClickItem }: ISidebarItemProps) => {
  const onClick = () => {
    onClickItem(item.id);
  };
  return (
    <li
      className={`${styles.sidebar_item} ${isActive ? styles.sidebar_item__active : ""}`}
      onClick={onClick}
    >
      <img src={item.icon} alt="icon"></img>
      <span className={styles.sidebar_item__title}>{item.title}</span>
    </li>
  );
};

export const Sidebar: FC<ISidebarProps> = (sidebarProps: ISidebarProps) => {
  const { sidebarItems } = sidebarProps;
  const [currentId, setCurrentId] = useState<string>();
  const onClick = (id: string) => {
    setCurrentId(id);
  };
  return (
    <>
      <aside className={styles.sidebar_cover}>
        {sidebarItems.map((item) => {
          return (
            <SidebarItem
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
