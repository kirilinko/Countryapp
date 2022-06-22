import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar.js';
import Country from '../../Components/Home/Country.js';
import Loader from '../Loader/Loader.js'; 
import  '../../Ressources/Style.css'; 
const Home=()=> {

    const [data,setData]=useState([]);
    const [datashow,setDatashow]=useState("");
    const [searchcountry,setSearchcountry]=useState('');
    const [searchContinent,setSearchContinent]=useState('');
    const [searchStatus,setsearchStatus]=useState('');
    const [regiondata,setRegiondata]=useState([
                                        {'value':'africa'},
                                        {'value':'americas'},
                                        {'value':'asia'},
                                        {'value':'europe'},
                                        {'value':'oceania'},
                                     ]);

    useEffect( ()=>{
       axios.get('https://restcountries.com/v3.1/all')
           .then(response => {setData(response.data);setDatashow(response.data)});       

    }, []);

 
  if(datashow!=""){
    	return(<div className="bg-blue-dark pb-4 font-body"> 
            <Navbar/>
             <div className="pt-4 pb-4" >
                <div className="container pb-4" >
                    <div className="row text-white mb-4 pb-1">
                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text input-blue-dark" >
                                       <i class="fa fa-search mb-1 mt-1" aria-hidden="true"></i>
                                  </span>
                              </div>
                              <input type="text" className="form-control input-blue-dark" onChange={e=> { setSearchcountry(e.target.value) ; setsearchStatus('Country') } } id="searchCountry" placeholder="Search for a country" />
                           </div>
                       </div>
                       <div className="col-4"> </div>
                       <div className="col-md-3">
                           <select className="form-select input-blue-dark font-14" id="searchContinent" onChange={e=> { setSearchContinent(e.target.value) ; setsearchStatus('Continent') } }  style={{width:"85%"}}>
                              <option value="">Filter by Region</option>
                              {Object.values(regiondata).map((region) => {
                                return <option value={region.value}>{region.value}</option>} ) }
                           </select>
                       </div>
                   </div>
                   <div className="row pb-4 ">
                     {datashow.filter((val)=>{
                        if(searchStatus=="Country"){
                               if(searchcountry == ""){ return val }
                                     else if(val.name.common.toLowerCase().includes(searchcountry.toLowerCase())) 
                                         { return val; }
                         }
                           else if(searchStatus=="Continent" || searchStatus==""){
                                      if(searchContinent == ""){ return val }
                                          else if(val.region.toLowerCase().includes(searchContinent.toLowerCase()))
                                              { return val; }
                           } }).map((val,key)=>{
                                          return <div className="col-md-3 mb-4 ">
                                                    <Link to={`Detail/${val.ccn3}`} className="no-decation" >
                                                        <Country data={val}/>
                                                    </Link>
                                                 </div>
                                            })}
                   </div>
               </div>
            </div>
        </div>
            )
        }
        else{ return<div><Loader/></div>}
  

}

export default Home