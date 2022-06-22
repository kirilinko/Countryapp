import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import { Link, useParams } from "react-router-dom";
import  '../../Ressources/Style.css';
class Nofound extends React.Component{

    render(){
    	return(
    		 <div className="bg-blue-dark text-white pb-4 font-body">
    		   <Navbar/>
    		      <div className="pb-4">
    		      	 <h4 className="text-center pt-4 mt-4">
    		      	   (404)!Ooups No found 		  
                     </h4>
    		      </div>
                  <div className="text-center">
                       <Link to="/" class="mt-4 btn btn btn-dark-silver shadow-effet mb-4 pl-4">
                           <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Go Back to Home
                       </Link>
                  </div>     
    	    </div>
    	   
    	   )}

}

export default Nofound;