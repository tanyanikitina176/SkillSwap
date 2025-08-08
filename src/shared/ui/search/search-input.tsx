import { useState, type FC } from "react";
import style from "./search-input.module.css";
import Search from "@assets/icons/search.svg?react";
import Cross from "@assets/icons/cross.svg?react";

export const SearchInputUI: FC = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <Search className={style.icon} />
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
          <Cross className={style.icon} />
        </button>
      )}
    </div>
  );
};
