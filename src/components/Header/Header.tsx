import { HeaderProps } from "../../types";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Header.module.css";

const Header: React.FC<HeaderProps> = ({ search }) => {
  return (
    <div>
      <header className={s.header}>
        <SearchBar search={search} />
      </header>
    </div>
  );
};

export default Header;
