import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import image from './ballon.webp';
class Detail extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return( 
             <div>
               <Navbar/>
               <div className="pt-4 mb-4" style={{background:"hsl(207, 26%, 17%)"}} >
                   <div className="container text-white ">
                       <button class="mt-4 btn btn-dark mb-4 pl-4 pr-4" style={{boxShadow:"0 0 10px rgb(20, 29, 36)",background:"hsl(209, 23%, 22%)",borderColor:"hsl(209, 23%, 22%)"}}>
                           <i className="fa fa-long-arrow-left ml-4" aria-hidden="true"></i> 
                           Back
                       </button>
                       <div className="row mt-4 ">
                           <div className="col-md-6">
                               <img src={image} className="img-fluid" style={{width:400}} atl="Contry image" />
                           </div>
                           <div className="col-md-6  mt-4 text-start">
                                
                               <h3 className="mt-4">NOM PAYS</h3>
                               
                               <div className="row mt-4 ml-4">
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="fw-bold ">Native Name</span> : Dahomey <br/>
                                        <span className="fw-bold">Population</span> : 26,152,230 <br/>
                                        <span className="fw-bold">Region</span> : Africa <br/>
                                        <span className="fw-bold">Sub Region</span> : West Africa <br/>
                                        <span className="fw-bold">Capital</span> : Porto-Novo <br/>
                                    </div>
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="fw-bold">Top Level Domain</span> : .bj <br/>
                                        <span className="fw-bold">Currencies</span> : Franc(XOF) <br/>
                                        <span className="fw-bold">Language</span> : French, Englihs <br/>
                                    </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-4">
                                       <h5>Border Countries: </h5>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="row">
                                           <div className=" col-sm mb-2 text-center" style={{background:"hsl(209, 23%, 22%)",marginRight:"2%", width:"100px",borderRadius:2,boxShadow:"0 0 10px rgb(20, 29, 36)"}}>
                                               France
                                           </div>
                                           <div className=" col-sm mb-2 text-center" style={{background:"hsl(209, 23%, 22%)",marginRight:"2%", width:"100px"}}>
                                               Germanie
                                           </div>
                                           <div className=" col-sm mb-2 text-center" style={{background:"hsl(209, 23%, 22%)",marginRight:"2%", width:"100px"}}>
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