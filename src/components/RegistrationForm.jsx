import { useState } from "react";

const favouriteBands = [
  { id: "system-of-a-down", band: "System of a down" },
  { id: "type-o-negative", band: "Type o Negative" },
  { id: "radiohead", band: "Radiohead" },
  { id: "the-smiths", band: "The Smiths" },
];

const arrSelect = [
  { id: "odessa", city: "Odessa" },
  { id: "lviv", city: "Lviv" },
  { id: "kyiv", city: "Kyiv" },
  { id: "rivne", city: "Rivne" },
];

const arrRadio = [
  { id: "csharp", lang: "C#" },
  { id: "cpp", lang: "C++" },
  { id: "javascript", lang: "JS" },
  { id: "java", lang: "Java" },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    bands: [],
    city: arrSelect[0].city,
    lang: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleBandChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.target.checked) {
      setFormData((prev) => ({
        ...(prev || {}),
        [name]: [...(prev[name] || []), value],
      }));
    } else {
      setFormData((prev) => ({
        ...(prev || {}),
        [name]: (prev[name] || []).filter((item) => item !== value),
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
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

      <div>
        <p>Choose bands:</p>
        {favouriteBands.map(({ id, band }) => (
          <label key={id}>
            <input
              type="checkbox"
              name="bands"
              value={band}
              checked={formData.bands.includes(band)}
              onChange={handleBandChange}
            ></input>
            {band}
          </label>
        ))}
      </div>

      <div>
        <p>Choose city</p>
        <select name="city" value={formData.city} onChange={handleChange}>
          {arrSelect.map((item) => (
            <option key={item.id} value={item.city}>
              {item.city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>Choose language:</p>
        {arrRadio.map(({ id, lang }) => (
          <label key={id}>
            <input
              type="radio"
              name="lang"
              value={lang}
              checked={formData.lang === lang}
              onChange={handleChange}
            ></input>
            {lang}
          </label>
        ))}
      </div>

      <button type="submit">Send</button>

      {submittedData && (
        <div>
          <h3>Submitted data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Message: {submittedData.message}</p>
          <p>Bands: {submittedData.bands.join(", ") || "None"}</p>
          <p>City: {submittedData.city}</p>
          <p>Language: {submittedData.lang || "None"}</p>
        </div>
      )}
    </form>
  );
}
