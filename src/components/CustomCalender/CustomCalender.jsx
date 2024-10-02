import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns"; // Import the format function
import "react-day-picker/dist/style.css";
import "./CustomCalender.css";

const CustomCalender = () => {
  const [selected, setSelected] = useState(null); 

  const footer = selected 
    ? `Selected meeting timings for ${format(selected, "EEEE, MMMM do, yyyy")}`
    : "Pick a day for the meeting.";

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      disabled={{ dayOfWeek: [0, 6] }}
      footer={footer}
    />
  );
}

export default CustomCalender;
