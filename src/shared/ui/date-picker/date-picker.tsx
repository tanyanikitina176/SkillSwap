import React from "react";
import type { DatePickerProps as AntdDatePickerProps} from "antd";
import { ConfigProvider, DatePicker as AntdDatePicker, Space } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import "./date-picker.css";
import dayjs from "dayjs";

interface DatePickerProps {
  date?: number | null;
  onChange?: (date: number) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ onChange,  date}) => {
  const handleChange: AntdDatePickerProps["onChange"] = (date) => {
    if (!!onChange) {
      onChange(date.valueOf());
    }
  };

  return (
    <ConfigProvider locale={ruRU}>
      <Space direction="vertical">
        <label className="label" id="dataPicker">
          <AntdDatePicker
            defaultValue={dayjs(date)}
            onChange={handleChange}
            placeholder="дд.мм.гггг"
            className="container"
            id="dataPicker"
            format={"DD-MM-YYYY"}
          />
        </label>
      </Space>
    </ConfigProvider>
  );
};