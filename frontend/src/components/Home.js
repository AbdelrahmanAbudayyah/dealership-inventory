import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const Home = () => {

    const [dealerships, setDealerships] = useState([]);

    useEffect(() => {
        const getAllDealershipsInfo = async () => {
            try {
                const response = await axios.get("http://localhost:2000/Dealership", {
                });
                setDealerships(response.data);
            } catch (err) {
                console.log("Error: " + err)
            }
        };
        getAllDealershipsInfo();
    }, []);



    return (
      <>
       
        <div className="container">
            <div className="row">
                <div className='col-md-12'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Dealership</th>
                            </tr>
                        </thead>
                        <tbody>
                                 {

                                    dealerships.map((dealership, c) => {
                                        return (
                                            <tr key={c}>
                                                <td>{dealership.DealershipName}</td>
                                                <td>
                                                    <Link to={`/Dealerships/${dealership.DealershipName}`} className="btn btn-primary">View</Link>&nbsp;&nbsp;
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                
                                
                        
                        </tbody>
                    </table>
                </div>
            </div>

            <p><Link to="/Favourites" className="btn btn-success">Favourites</Link></p>

        </div>


        
      </>
    );
  }
  export default Home;
  