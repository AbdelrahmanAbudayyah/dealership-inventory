import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Dealerships.css";


const Dealerships = () => {
  const { DealershipName } = useParams();
  const [dealership, setDealership] = useState([]);
  const [conditionFilter, setConditionFilter] = useState("New");

  const navigate = useNavigate();

  useEffect(() => {

      const getAllDealershipInfo = async () => {
        try {

            const response = await axios.get("http://localhost:2000/Veichle/byCon/" + DealershipName +"/"+ conditionFilter);
            setDealership(response.data);

            console.log("data: " + response.data);
        } catch (err) {
            console.log("Error: " + err)
        }
    };
    getAllDealershipInfo();
  }, [DealershipName,conditionFilter]);

  const handleDelete = async (car) => {
    const deleteConfirmed = window.confirm('Are you sure about the deletion of this record permanently from the database?');
    if (deleteConfirmed) {
        try {
            await axios.delete("http://localhost:2000/Veichle/" + car.VIN);
            navigate("../");
        } catch (err) {
            console.log("Error:" + err);
        }
    } 
};

const handleAdd = async (car) => {
   
        try {
            const response = await axios.post("http://localhost:2000/Cart/" + car.VIN + "/"+car.Model+"/"+car.Price);
            console.log("data: " + response.data);
           // navigate("../");
        } catch (err) {
            console.log("Error:" + err);
        }

};

const handleConditionChange = (e) => {
    setConditionFilter(e.target.value);
  };

  const filterCarsByCondition = (car) => {
    if (conditionFilter === "All") {
      return true;
    } else {
      return car.Condition === conditionFilter;
    }
  };

  

  return (
    <>

<div id="outer-container">
	<div id="sidebar">
        <p id="a" >Categories</p>
     <div>
       Condition  
        <select
          value={conditionFilter}
          onChange={handleConditionChange}
          id="mySelect"
        >
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>



     </div>
   

    </div>
	<div id="content">

    <div className="container">
        
        <div className="row">
          <div className="container">
            <div className="row">
                
              <div className="col-md-12">
                
              <p>{DealershipName}</p>
              
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>VIN</th>
                      <th>Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealership
                      .filter(filterCarsByCondition).map((car, c) => {
                      return (
                        <tr key={c}>
                          <td>{car.VIN}</td>
                          <td>{car.Model}</td>
                          

                          <td>
                            <Link
                              to={`/Cars/${car.VIN}`}
                              className="btn btn-primary"
                            >
                              View
                            </Link>
                            &nbsp;&nbsp;
                            <Link onClick={()=>handleAdd(car)} className="btn btn-primary">Add to Favourite </Link>
                            <Link onClick={()=>handleDelete(car)} className="btn btn-danger">Delete</Link>

                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

       
        </div>
        <p><Link to="/Add" className="btn btn-success">Add Car</Link></p>
       
    
      </div>



    </div>
</div>
      

      
        
    </>
  );
};

export default Dealerships;
