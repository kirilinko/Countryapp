import React from 'react';

class Navbar extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){  
    	return( 
             <div>
             <nav className="navbar" style={{background:"hsl(209, 23%, 22%)"}}>
                <div className="container text-white">
                       
                           <a className="navbar-brand text-white" href="#" > Where in the world ?</a>
                       
                      <div className="text-end">
                           Button tog
                      </div>
                 
              </div>
            </nav>
</div>)
    }

}
 
export default Navbar