import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Cars = () => {
  
    const { carVin } = useParams();
    const [ car, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getCarInfo = async () => {
            console.log("VIN:" + carVin);

          try {
              const response = await axios.get("http://localhost:2000/Veichle/byVIN/" + carVin);
              setCars(response.data[0]);  
              console.log("VIN " + carVin);

              console.log("data: " + response.data);
          } catch (err) {
              console.log("Error: " + err)
          }
      };
      getCarInfo();
    }, [carVin]);
  


    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Car Details</h3>
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <th>Vin</th>
                                <td>{car.VIN}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{car.Model}</td>
                            </tr>
                            <tr>
                                <th>Trim</th>
                                <td>{car.Trim}</td>
                            </tr>
                            <tr>
                                <th>Color</th>
                                <td>{car.Color}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{car.Price}</td>
                            </tr>                           
                            <tr>
                                <th>Dealership Name</th>
                                <td>{car.DealershipName}</td>
                            </tr>
                            <tr>
                                <th>Condition</th>
                                <td>{car.Condition}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
               <p> <Link to={`/Edit/${car.VIN}`} className="btn btn-info">Edit</Link>&nbsp;&nbsp;
               </p>
                      
            </div>
        </div >
    );
};

export default Cars;