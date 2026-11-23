import { useState } from "react";
export default function RegistrationForm() {
  const favouriteBands = [
    "System of a down",
    "Type o Negative",
    "Radiohead",
    "The Smiths",
  ];
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    bands: [],
  });

  handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  handleBandChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      bands: checked
        ? [...prev.bands, value]
        : prev.bands.filter((band) => band !== value),
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <fieldset>
        <legend>Bands you like:</legend>
        {favouriteBands.map((band) => (
          <label key={band} style={{ display: "block" }}>
            <input
              type="checkbox"
              name="bands"
              value={band}
              checked={formData.bands.includes(band)}
              onChange={handleBandChange}
            />
            {band}
          </label>
        ))}
      </fieldset>

      <button type="submit">Send</button>
    </form>
  );
}
