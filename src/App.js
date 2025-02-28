import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  // Define state variables for contacts and appointments 
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Implement functions to add data to contacts and appointments
  const addContact = (name, phone, email) => {
    // New contact object
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    // Update contacts array with previous state and new contact
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    // New appointment object
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    };
    // Update appointments array with previous state and new appointment
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>

      {/* Add props to ContactsPage */}
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage
        contacts={contacts}
        addContact={addContact}
      /> }/>
      
      {/* Add props to AppointmentsPage */}
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage
        appointments={appointments}
        addAppointment={addAppointment}
        contacts={contacts}
      /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
