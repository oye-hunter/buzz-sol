import React, { useState, useRef } from "react";
import axios from 'axios'; // Import Axios
import emailjs from "@emailjs/browser"; // Import emailjs
import CustomCalender from "../../components/CustomCalender/CustomCalender";
import "./BookAppointment.css";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import Footer from '../../components/Footer/Footer';
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
    serviceName: "", // Add serviceName for backend
    amount: "" // Add amount for backend
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

  // Send data to the backend
  const sendDataToBackend = async (appointmentData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', appointmentData);
      if (response.status === 201) {
        alert("Appointment successfully booked and saved to the database!");
      } else {
        alert("Failed to book the appointment. Please try again.");
      }
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert("Failed to book the appointment. Please try again.");
    }
  };

  // Send email function using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    // Appointment data for backend
    const appointmentData = {
      serviceName: formData.serviceName,
      name: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phone,
      note: formData.note,
      date: new Date(), // Assuming appointment is booked for the current date
      time: selectedTime,
      amount: formData.amount
    };

    // Specify the recipients (comma-separated)
    const recipients = `${formData.email},  hozefarauf@gmail.com`;

    // Data to send to EmailJS
    const templateParams = {
      serviceName: formData.serviceName,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      note: formData.note,
      date: new Date().toLocaleDateString(),
      time: selectedTime,
      amount: formData.amount,
      to_email: recipients
    };

    // Send email with EmailJS using the templateParams
    emailjs
      .send(
        "service_5jc9upo",
        "template_3qmiclr",  
        templateParams,
        "02XBjNAd_Wbg_mzrC"
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result);
          alert("Appointment successfully booked!");
          // Save the data to the backend after a successful email
          sendDataToBackend(appointmentData);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send the email. Please try again.");
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
    <>
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
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <TextField
                  className="w-[350px]"
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  className="w-[350px]"
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  className="w-[350px]"
                  label="Service Name"
                  name="serviceName"
                  variant="outlined"
                  value={formData.serviceName}
                  onChange={handleInputChange}
                />
                <TextField
                  className="w-[350px]"
                  label="Amount"
                  name="amount"
                  type="number"
                  variant="outlined"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
                <TextField
                  className="w-[350px]"
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
      <Footer />
    </>
  );
};

export default BookAppointment;
