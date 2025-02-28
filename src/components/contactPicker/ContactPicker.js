import React from "react";

export const ContactPicker = ({contacts, onChange, value, name }) => {
  return (
    <>
    
      <select
        onChange={onChange}
        value={value}
        name={name}
        aria-label="Choose Contact"
      >
        <option
          key={-1}
          value={""}
        >
          None Selected
        </option>
        {contacts.map((contact) => {
          return (
            <option
              key={contact}
              value={contact}
            >
              {contact}
            </option>
          );
        })}

      </select>

    </>
  );
};
