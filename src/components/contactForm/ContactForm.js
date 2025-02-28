import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>

      <form
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Contact Name"
          />
        </label>

        <br />

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="^(((\+44\s?|0044\s?)?|(\(?0))((2[03489]\)?\s?\d{4}\s?\d{4})|(1[23456789]1\)?\s?\d{3}\s?\d{4})|(1[23456789][234578][0234679]\)?\s?\d{6})|(1[2579][0245][0467]\)?\s?\d{5})|(11[345678]\)?\s?\d{3}\s?\d{4})|(1[35679][234689]\s?[46789][234567]\)?\s?\d{4,5})|([389]\d{2}\s?\d{3}\s?\d{4})|([57][0-9]\s?\d{4}\s?\d{4})|(500\s?\d{6})|(7[456789]\d{2}\s?\d{6})))$"
            aria-label="Contact Phone Number"
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Contact Email Address"
          />
        </label>

        <br />

        <input
          type="submit"
          value="Add Contact"
          aria-label="Add Contact Button"
        />

      </form>

    </>
  );
};

