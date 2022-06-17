import React from 'react';
import image from './ballon.webp'; 
 
class Country extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return(<div> 
              <div className="card text-white" style={{width:"14rem", background:"hsl(209, 23%, 22%)", borderColor:"hsl(209, 23%, 22%)"}}>
  <img src={image} className="card-img-top" width="1px" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
  </div>
</div>





             </div>)
    }

}

export default Country