import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePickerModal = ({ isVisible, onConfirm, onCancel }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    onConfirm(date);
  };
  
return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode="date"
      date={selectedDate}
      onConfirm={handleDateConfirm}
      onCancel={onCancel}
  
    />
  );
};

export default DatePickerModal;