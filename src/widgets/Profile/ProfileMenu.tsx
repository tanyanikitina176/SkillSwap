import { ProfileMenuUI } from "@shared/ui/profile-menu";
import { ProfileMenuItems } from "@shared/ui/profile-menu/profile-menu-data";
import type { FC } from "react";

export const ProfileMenu: FC = () => {
  return (
    <>
      <ProfileMenuUI profileMenuItems={ProfileMenuItems} />
    </>
  );
};
