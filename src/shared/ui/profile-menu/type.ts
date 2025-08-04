export interface IProfileMenuItem {
  id: string;
  title: string;
  icon: string;
  path?: string;
}

export interface IProfileMenuProps {
  profileMenuItems: IProfileMenuItem[];
}

export interface IProfileMenuItemProps {
  item: IProfileMenuItem;
  isActive: boolean;
  onClickItem: (id: string) => void;
}
