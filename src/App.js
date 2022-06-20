import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home.js';
import Detail from './Page/Detail/Detail.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="Detail/:countryId" element={<Detail/>} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
