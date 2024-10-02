import React from "react";
import CustomCalender from "../../components/CustomCalender/CustomCalender";
import "./BookAppointment.css";
import Button from 'react-bootstrap/Button';

const BookAppointment = () => {
  return (
    <div className="book-apointment-container">
      <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center font-semibold m-5">
        Book <span style={{ color: "rgb(199,47,72)" }}>Appointment</span>
      </h3>
      <div className="flex items-center">
        <CustomCalender />
        <div className="time-buttons-container flex flex-col">
        <Button className="time-button" variant="outline-primary">11 PM (UTC+5)</Button>{' '}
        <Button className="time-button" variant="outline-primary">12 AM (UTC+5)</Button>{' '}
        <Button className="time-button" variant="outline-primary">01 AM (UTC+5)</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
