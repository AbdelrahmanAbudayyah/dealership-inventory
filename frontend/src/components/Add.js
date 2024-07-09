import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [cars, setCar] = useState({
    VIN: "",
    Model: "",
    Trim: "",
    Color: "",
    Price: "",
    DealershipName: "",
    Condition: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/Veichle", cars);
      console.log(response.data);

      navigate("../");
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Add Car Detail</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label>VIN:</label>
              <input
                type="text"
                className="form-control"
                placeholder="VIN"
                name="VIN"
                minLength="10"
                maxLength="10"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Model:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Model"
                name="Model"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label>Trim:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Trim"
                name="Trim"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label>Color:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Color"
                name="Color"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 mt-3">
              <label>Price:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                name="Price"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 mt-3">
              <select
                className="form-select"
                name="DealershipName"
                onChange={handleChange}
                required
              >
                <option value="">Select Dealership</option>
                <option value="DodgeOfSeattle">DodgeOfSeattle</option>
                <option value="DodgeOfTacoma">DodgeOfTacoma</option>
                <option value="DodgeOfchicago">DodgeOfChicago</option>
              </select>
            </div>

            <div className="mb-3 mt-3">
              <select
                className="form-select"
                name="Condition"
                onChange={handleChange}
                required
              >
                <option value="">Select a Condition</option>
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Add Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
