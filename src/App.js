import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home.js';
import Detail from './Page/Detail/Detail.js';
import Nofound from './Page/Nofound/Nofound.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="Detail/:id" element={<Detail/>} /> 
       <Route path='*' element={<Nofound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
