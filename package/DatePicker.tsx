// /package/DatePicker.tsx
import React, { useState } from "react";

interface DatePickerProps {
  format?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ format = "MM/DD/YYYY" }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate || ""}
        onChange={handleChange}
        placeholder={format}
      />
    </div>
  );
};

export default DatePicker;
