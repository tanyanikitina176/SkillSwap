import React, { type FC } from "react";
import style from "./search-input.module.css";
import icon from "../../../assets/icons/search.svg";
import button from "../../../assets/icons/cross.svg";

interface SearchInputUIProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInputUI: FC<SearchInputUIProps> = ({value, onChange}) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
        <button className={style.button} onClick={() => onChange("")}>
          <img src={button} alt="Крестик" className={style.icon} />
        </button>
      )}
    </div>
  );
};
