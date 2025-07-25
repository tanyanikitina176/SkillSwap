import messageIcon from "../../../assets/icons/user.svg";
import requectIcon from "../../../assets/icons/request.svg";
import idea from "../../../assets/icons/idea.svg";
import like from "../../../assets/icons/like.svg";
import message from "../../../assets/icons/message-text.svg";

export interface ISidebarItem {
  id: string;
  title: string;
  icon: string;
  path: string;
}

export const SidebarItems: ISidebarItem[] = [
  {
    id: "request",
    title: "Заявки",
    path: "/",
    icon: requectIcon,
  },
  {
    id: "message",
    title: "Мои обмены",
    path: "/",
    icon: message,
  },
  {
    id: "like",
    title: "Избранное",
    path: "/",
    icon: like,
  },
  {
    id: "idea",
    title: "Мои навыки",
    path: "/",
    icon: idea,
  },
  {
    id: "myData",
    title: "Личные данные",
    path: "/",
    icon: messageIcon,
  },
];
