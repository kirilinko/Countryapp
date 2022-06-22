import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import  '../../Ressources/Style.css';
class Loader extends React.Component{

    render(){
    	return(
    		 <div className="bg-blue-dark text-white pb-4 font-body">
    		   <Navbar/>
    		      <div className=" container pb-4">
    		      	 <h4 className="text-center pt-4 mt-4">
    		      	    Please, wait
    		      	    <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden"> Loading...</span>
                        </div>
                     </h4>
    		      </div>
    	    </div>
    	   
    	   )}

}

export default Loader;