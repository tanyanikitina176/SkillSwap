import React from "react";
import type { DatePickerProps } from "antd";
import { ConfigProvider, DatePicker, Space } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import "./data-picker.css";

interface DataPickerProps {
  onChange?: (dateString: string) => void;
}

export const DataPicker: React.FC<DataPickerProps> = ({ onChange }) => {
  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (onChange) {
      onChange(dateString as string);
    }
    console.log(date, dateString);
  };

  return (
    <ConfigProvider locale={ruRU}>
      <Space direction="vertical">
        <label className="label" id="dataPicker">
          <DatePicker
            onChange={handleChange}
            placeholder="дд.мм.гггг"
            className="container"
            id="dataPicker"
          />
        </label>
      </Space>
    </ConfigProvider>
  );
};