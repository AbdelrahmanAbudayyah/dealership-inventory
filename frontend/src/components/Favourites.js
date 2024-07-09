import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Favourites = () => {

    const [car, setCars] = useState([]);
    useEffect(() => {

        const getFavouritesInfo = async () => {
          try {
              //console.log("data: " + conditionFilter);
  
              const response = await axios.get("http://localhost:2000/Cart");
              setCars(response.data);
  
              console.log("data: " + response.data);
          } catch (err) {
              console.log("Error: " + err)
          }
      };
      getFavouritesInfo();
    },[]);

    const navigate = useNavigate();




    const handleDelete = async (car) => {
        const deleteConfirmed = window.confirm('Are you sure about the deletion of this record permanently from the database?');
        if (deleteConfirmed) {
            try {
                await axios.delete("http://localhost:2000/Cart/" + car.VIN);
                navigate("../");
            } catch (err) {
                console.log("Error:" + err);
            }
        } 
    };



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <p>My Favourite Cars</p>

            <table className="table table-striped">
              <thead>
                <tr>
                <th>VIN</th>
                <th>Model</th>
                <th>Price</th>

                </tr>
              </thead>
              <tbody>
                {car.map((car, c) => {
                  return (
                    <tr key={c}>
                      <td>{car.VIN}</td>
                      <td>{car.Model}</td>
                      <td>{car.Price}</td>

                      <td>
                        <Link
                          to={`/Cars/${car.VIN}`}
                          className="btn btn-primary"
                        >
                          View
                        </Link>
                        &nbsp;&nbsp;
                        <Link
                          onClick={() => handleDelete(car)}
                          className="btn btn-danger"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
