import React from "react";
import type { DatePickerProps } from "antd";
import { ConfigProvider, DatePicker, Space } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import "./data-picker.css";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    //Тут можно добавить любое необходимое действие с датой, или получить ее из параметров
  console.log(date, dateString);
};

export const DataPicker: React.FC = () => (
  <ConfigProvider locale={ruRU}>
    <Space direction="vertical">
      <label className="label" id="dataPicker">
        <DatePicker
          onChange={onChange}
          placeholder="дд.мм.гггг"
          className="container"
          id="dataPicker"
        />
      </label>
    </Space>
  </ConfigProvider>
);
