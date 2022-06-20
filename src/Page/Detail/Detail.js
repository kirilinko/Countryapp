import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar.js';
import image from './ballon.webp';
import  '../../Ressources/Style.css';
class Detail extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return( 
             <div className="bg-blue-dark pb-2 font-body">
               <Navbar/>
               <div className="pt-4 mb-4 pb-4 " >
                   <div className="container text-white ">
                       <Link to="/" class="mt-4 btn btn btn-dark-silver shadow-effet mb-4 pl-4">
                           <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back
                       </Link>
                       <div className="row mt-4 pb-4 ">
                           <div className="col-md-6">
                               <img src={image} className="img-fluid" style={{width:400}} atl="Contry image" />
                           </div>
                           <div className="col-md-6  mt-4 text-start">
                                
                               <h4 className="mt-4 font-800">NOM PAYS</h4>
                               
                               <div className="row mt-4 ml-4 font-16">
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="font-16b ">Native Name</span> : Dahomey <br/>
                                        <span className="font-16b">Population</span> : 26,152,230 <br/>
                                        <span className="font-16b">Region</span> : Africa <br/>
                                        <span className="font-16b">Sub Region</span> : West Africa <br/>
                                        <span className="font-16b">Capital</span> : Porto-Novo <br/>
                                    </div>
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="font-16b">Top Level Domain</span> : .bj <br/>
                                        <span className="font-16b">Currencies</span> : Franc(XOF) <br/>
                                        <span className="font-16b">Language</span> : French, Englihs <br/>
                                    </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-4">
                                       <h5>Border Countries: </h5>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="row">
                                           <div className=" col-sm mb-2 text-center shadow-effet bg-silver-dark border-contry">
                                               France
                                           </div>
                                           <div className=" col-sm mb-2 text-center shadow-effet bg-silver-dark border-contry">
                                               Germanie
                                           </div>
                                           <div className=" col-sm mb-2 text-center shadow-effet bg-silver-dark border-contry">
                                               Neterlande
                                           </div>

                                       </div>
                                   </div>

                               </div>

                           </div>

                       </div>
                   </div>
               </div>


               </div>)
    }

}
 
export default Detail