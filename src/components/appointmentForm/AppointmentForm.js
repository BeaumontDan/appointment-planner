import React from "react";
import { useMemo } from "react";

//import ContactPicker
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  setTitle,
  name,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  // Render Appointment Form

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name)
  }, [contacts]);

  return (
    <>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Appointment Title"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
            required
            aria-label="Appointment Title"
          />
        </label>

        <br />

        <label>
          Contact:
          <ContactPicker
            name="contact"
            contacts={contactNames}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>

        <br />

        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="Choose Date"
            value={date}
            min={getTodayString()}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-label="Appointment Date"
          />
        </label>

        <br />

        <label>
          Time:
          <input
            type="time"
            name="time"
            placeholder="Choose Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-label="Appointment Time"
          />
        </label>

        <br />

        <input
          type="submit"
          value="Add Appointment"
          aria-label="Add Appointment"
        />

      </form>

    </>
  );
};
