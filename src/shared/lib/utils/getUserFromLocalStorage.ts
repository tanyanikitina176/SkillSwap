import type { UserInLocalStorage } from "@entities/User/types";

export const getUserFromLocalStorage = (): UserInLocalStorage | null => {
    try {
      const userJSON = localStorage.getItem("user") as string;
      if (!userJSON) {
        console.log("Нет данных пользователя в localStorage");
        return null;
      }
      const parsedUser: UserInLocalStorage = JSON.parse(userJSON);
      return parsedUser;
    } catch (error) {
      console.log("Ошибка при парсинге пользователя из localStorage:", error);
      return null;
    }
  };