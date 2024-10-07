import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // Import emailjs
import CustomCalender from "../../components/CustomCalender/CustomCalender";
import "./BookAppointment.css";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const BookAppointment = () => {
  // Array for time slots from 10 PM to 3 AM (UTC+5)
  const timeSlots = [
    "10 PM (UTC+5)",
    "11 PM (UTC+5)",
    "12 AM (UTC+5)",
    "1 AM (UTC+5)",
    "2 AM (UTC+5)",
    "3 AM (UTC+5)",
  ];

  // State to track form input values
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    note: "",
  });

  // Ref for the form
  const formRef = useRef();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle time selection
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Send email function using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email with the form data and selected time
    emailjs
      .sendForm(
        "service_l8i0w1a",
        "template_3aowuds",
        formRef.current,
        "SaZBak-sC_CfhsPe_"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Appointment successfully booked!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to book the appointment. Please try again.");
        }
      );
  };

  // Custom theme with the color rgb(199, 47, 72)
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(199, 47, 72)",
      },
    },
  });

  return (
    <div className="book-apointment-container">
      <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold mt-5 mb-4">
        Book An <span style={{ color: "rgb(199,47,72)" }}>Appointment</span>
      </h3>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="flex items-center justify-center column-gap-5 row-gap-3 flex-col-reverse lg:flex-row">
          <ThemeProvider theme={theme}>
            <div className="flex flex-col row-gap-2">
              <TextField
                className="w-[350px]"
                id="outlined-basic"
                label="Full Name"
                name="fullName"
                variant="outlined"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <TextField
                className="w-[350px]"
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                className="w-[350px]"
                id="outlined-basic"
                label="Phone"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleInputChange}
              />

              {/* Note field with Font Awesome Info icon on the right side */}
              <TextField
                className="w-[350px]"
                id="outlined-note"
                label="Note"
                name="note"
                variant="outlined"
                value={formData.note}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title="Notes To Help Us Prepare For The Meeting?"
                        arrow
                      >
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{
                            color: "rgb(199, 47, 72)",
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
              {/* Hidden field to include selected time */}
              <input
                type="hidden"
                name="selected_time"
                value={selectedTime || ""}
              />
            </div>
          </ThemeProvider>

          <div className="flex items-center justify-center flex-col md:flex-row row-gap-3">
            <CustomCalender />
            {/* Display the time buttons */}
            <div className="time-buttons-container flex flex-col row-gap-2">
              <h4 className="text-lg text-center font-semibold text-[#C72F48]">
                Select Time
              </h4>
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  className={`time-button ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  variant="outline-primary"
                  onClick={() => handleTimeClick(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <Button
            className="bg-[#C72F48] hover:bg-[#a92339] border-[#C72F48] hover:border-[#a92339] w-[350px] text-2xl mb-2"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
