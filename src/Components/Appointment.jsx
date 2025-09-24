import React, { useState } from "react";
import supabase from "../config/SupabaseClient.jsx";
import Style from "../Css/Reservation.module.css";
import Testimonials from "../Pagesection/Testimonials.jsx";

const Reservation = () => {
  // State to manage form inputs

  const [reservation, setReservation] = useState({
    name: "",
    date: "",
    guests: "",
    occasion: "",
    email: "",
    phone: "",
    time: "",
  });

  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, date, guests, occasion, email, phone, time } = reservation;

    if (
      name === "" ||
      date === "" ||
      guests === "" ||
      occasion === "" ||
      email === "" ||
      phone === "" ||
      time === ""
    ) {
      setFormError("Please fill in all required fields.");
      return;
    }

    // supase APi call function

    const { data, error } = await supabase
      .from("top_notch_reservations") //  table name
      .insert([reservation]);

    // Checking for api request if it turns out error

    if (error) {
      setFormError(
        "An error occurred while submitting the form. Please try again."
      );
    } else {
      setFormError(null);
      alert("Reservation successful!");
      setReservation({
        name: "",
        date: "",
        guests: "",
        occasion: "",
        email: "",
        phone: "",
        time: "",
      });
    }
  };

  return (
    <>
      <section className={Style.container}>
        <div className={Style.header}>
          <img src="/ABOUTBODY.jpg" alt="Salon Header" />
        </div>

        <h4>BOOK APPOINTMENT</h4>

        <div className={Style.illustrationcontainer}>
          <form onSubmit={handleSubmit} role="form">
            <fieldset>
              <legend>Reservation Details</legend>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                value={reservation.name}
                onChange={(e) =>
                  setReservation({ ...reservation, name: e.target.value })
                }
              />

              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={reservation.date}
                onChange={(e) =>
                  setReservation({ ...reservation, date: e.target.value })
                }
              />

              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                required
                value={reservation.guests}
                onChange={(e) =>
                  setReservation({ ...reservation, guests: e.target.value })
                }
              />

              <label htmlFor="occasion">Occasion:</label>
              <select
                id="occasion"
                name="occasion"
                required
                value={reservation.occasion}
                onChange={(e) =>
                  setReservation({ ...reservation, occasion: e.target.value })
                }
              >
                <option value="" disabled>
                  -- Choose Occasion --
                </option>
                <option value="Trimming">Trimming</option>
                <option value="HairStyle">HairStyle</option>
                <option value="Facials">Facials</option>
                <option value="Hair coloring">Hair coloring</option>
              </select>

              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                min="10:00"
                max="22:00"
                value={reservation.time}
                onChange={(e) =>
                  setReservation({ ...reservation, time: e.target.value })
                }
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please select a time between 10:00 AM and 10:00 PM."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </fieldset>

            <fieldset>
              <legend>Contact Info</legend>

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                value={reservation.email}
                onChange={(e) =>
                  setReservation({ ...reservation, email: e.target.value })
                }
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Phone Number"
                pattern="[0-9]{10,15}"
                title="Enter a valid phone number"
                value={reservation.phone}
                onChange={(e) =>
                  setReservation({ ...reservation, phone: e.target.value })
                }
              />
            </fieldset>

            <button type="submit">Book Now</button>
            {formError && (
              <p style={{ color: "red", fontWeight: "bolder" }}>{formError}</p>
            )}
          </form>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Reservation;
