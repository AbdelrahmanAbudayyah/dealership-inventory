import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    const { carVin } = useParams();
    const [cars, setCar] = useState({
        VIN: "",
        Model: "",
        Trim: "",
        Color: "",
        Price: "",
        DealershipName: "",
        Condition: ""
       
      });  
    const navigate = useNavigate();

    useEffect(() => {
        const getCarInfo = async () => {
            try {
                const response = await axios.get("http://localhost:2000/Veichle/byVIN/"+carVin);
                setCar(response.data[0]);
                console.log("data: " + response.data);
                console.log("VIN: " +carVin );


            } catch (err) {
                console.log("Error: " + err)
            }
        };
        getCarInfo();
    }, []);

    const handleChange = (e) => {
        setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(cars);
            const response = await axios.put(decodeURI("http://localhost:2000/Veichle/"+ carVin), cars);
            navigate("/");
          } catch (err) {
            console.log("Error: " + err);
          }
    };
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Edit car Detail</h3>
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
                value={cars.VIN}
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
                value={cars.Model}
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
                value={cars.Trim}
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
                value={cars.Color}
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
                value={cars.Price}

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
              Edit Car
            </button>
          </form>
        </div>
            </div>
        </div>

    );
}

export default Edit;