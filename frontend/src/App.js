import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Add from "./components/Add";
import Title from "./components/Title";
import Edit from "./components/Edit";
import Favourites from "./components/Favourites";



import Dealerships from "./components/Dealerships";



function App() {
  return (
  
    <>
    <Title />
      <br />
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dealerships/:DealershipName" element={<Dealerships />} />
        <Route path="/Cars/:carVin" element={<Cars />} />
        <Route path="/Edit/:carVin" element={<Edit />} />

        <Route path="/Add" element={<Add />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Title" element={<Title />} />





        </Routes>
      </BrowserRouter>
      </>

      
  );
}

export default App;
