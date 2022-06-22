import React from 'react';
 
class Country extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return(<div className="d-flex justify-content-center"> 
              <div className="card text-white img-country shadow-effet" >
  <img src={`${this.props.data.flags.png}`} className="card-img-top" style={{height:130}} alt="..."/>
  <div className="card-body" >
    <h5 className="card-title font-800">{this.props.data.name.common}</h5>
    <div className="card-text font-14">
      <span className="font-14b">Population:</span> {this.props.data.population} <br/>
      <span className="font-14b">Region:</span> {this.props.data.region} <br/>
      <span className="font-14b">Capital:</span> {this.props.data.capital} <br/>
    </div>
     
  </div>
</div>





             </div>)
    }

}

export default Country