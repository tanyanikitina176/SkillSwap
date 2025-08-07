import { useState, type FC } from "react";
import style from "./search-input.module.css";
import icon from "../../../assets/icons/search.svg";
import button from "../../../assets/icons/cross.svg";
interface SearchInputUIProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInputUI: FC<SearchInputUIProps> = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <img src={icon} aria-label="Лупа" className={style.icon} />
        <input
          type="search"
          placeholder="Искать навык"
          value={value}
          onChange={handleOnChange}
          className={style.input}
        />
      </div>

      {value && (
        <button className={style.button} onClick={() => setValue("")}>
          <img src={button} alt="Крестик" className={style.icon} />
        </button>
      )}
    </div>
  );
};
