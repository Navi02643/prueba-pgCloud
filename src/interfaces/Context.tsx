import { IUser } from "./Interfaces"

export interface GlobalContextType {
  user: IUser;
  handleUser: (user: IUser) => void;
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
}
