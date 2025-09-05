import React, { useState } from "react";
import axios from "axios";
import config from "./config"; // still works if you want to keep it

export default function AddArt() {
  const [artname, setArtname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: loading ? "#6c757d" : "#007bff",
    color: "white",
    fontWeight: "bold",
    cursor: loading ? "not-allowed" : "pointer",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!artname || !price || !category) {
      setMessage("All fields are required");
      setIsError(true);
      return;
    }
    if (isNaN(price) || price <= 0) {
      setMessage("Please enter a valid positive price");
      setIsError(true);
      return;
    }

    const art = { artname, price: parseInt(price), category };

    try {
      setLoading(true);
      const res = await axios.post(`${config.url}/art/add`, art);

      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Art added successfully!");
        setIsError(false);
        setArtname("");
        setPrice("");
        setCategory("");
      } else {
        setMessage("❌ Failed to add art");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error: " + (error.response?.data || error.message));
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Art</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Art Name"
          value={artname}
          onChange={(e) => setArtname(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? "Adding..." : "Add Art"}
        </button>
      </form>
      {message && (
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: isError ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
