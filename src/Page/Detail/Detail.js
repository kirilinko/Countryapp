import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar.js';
import image from './ballon.webp';
import  '../../Ressources/Style.css';
import axios from 'axios';
const Detail=()=> {

    const [datacountry,setDatacountry]=useState([]);
    const {id}=useParams();
    useEffect( ()=>{
       axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
           .then(response => {setDatacountry(response.data[0])});       


    })
           
       if(datacountry.flags) {

    	return( 
             <div className="bg-blue-dark pb-4 font-body">
               <Navbar/>
               <div className="pt-4 mb-4 pb-4 " >
                   <div className="container text-white pb-4 ">
                       <Link to="/" class="mt-4 btn btn btn-dark-silver shadow-effet mb-4 pl-4">
                           <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back
                       </Link>
                       <div className="row mt-4 pb-4 ">
                           <div className="col-md-6">
                               <img src={`${datacountry.flags.png}`} className="img-fluid" style={{width:420}} atl="Contry image" />
                           </div>
                           <div className="col-md-6 pb-4 mt-4 text-start">
                                
                               <h4 className="mt-4 font-800">{datacountry.name.common}</h4>
                               
                               <div className="row mt-4 ml-4 font-16">
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="font-16b">Native Name</span> : {Object.values(datacountry.name.nativeName).map((names) => {return names.common+" " } ) } <br/>
                                        <span className="font-16b">Population</span>  : {datacountry.population} <br/>
                                        <span className="font-16b">Region</span>      : {datacountry.region} <br/>
                                        <span className="font-16b">Sub Region</span>  : {datacountry.subregion} <br/>
                                        <span className="font-16b">Capital</span>     : {Object.values(datacountry.capital).map((capitals) => {return capitals+" " } ) } <br/>
                                    </div>
                                    <div className="col-md-6 mb-4 text-start">
                                        <span className="font-16b">Top Level Domain</span> : { Object.values(datacountry.tld).map((tlds) => {return tlds+" " } ) } <br/>
                                        <span className="font-16b">Currencies</span>       : { Object.values(datacountry.currencies).map((currencie) => {return currencie.name+" " } ) } <br/>
                                        <span className="font-16b">Language</span>         : { Object.values(datacountry.languages).map((language) => {return language+" " } ) } <br/>
                                    </div>
                               </div>
                               <div className="row pb-4">
                                   <div className="col-md-4">
                                       <h5>Border Countries: </h5>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="row">
                                           { Object.values(datacountry.borders).map((border) => {return( 
                                           <div className=" col-sm mb-2 text-center shadow-effet bg-silver-dark border-contry">
                                              {border}
                                           </div>
                                           ) } ) }

                                       </div>
                                   </div>

                               </div>

                           </div>

                       </div>
                   </div>
               </div>


               </div>)
    }

   

    else{
        return (<div>En cours</div>)
    }
 }
export default Detail