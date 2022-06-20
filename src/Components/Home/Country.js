import React from 'react';
import image from './ballon.webp'; 
 
class Country extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return(<div> 
              <div className="card text-white img-country shadow-effet" >
  <img src={image} className="card-img-top" width="1px" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title font-800">Germany</h5>
    <div className="card-text font-14">
      <span className="font-14b">Population:</span> 81,985,896 <br/>
      <span className="font-14b">Region:</span> Europe <br/>
      <span className="font-14b">Capital:</span> Berlin <br/>
    </div>
     
  </div>
</div>





             </div>)
    }

}

export default Country