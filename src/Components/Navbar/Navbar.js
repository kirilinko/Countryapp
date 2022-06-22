import React from 'react';

class Navbar extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){  
    	return( 
        <div>
             <nav className="navbar bg-silver-dark" >
                <div className="container text-white">
                   <a className="navbar-brand text-white fw-bold" href="#" > Where in the world ?</a>
                    <div className="text-end">
                    </div>
                 
                </div>
            </nav>
     </div>)
    }

}
 
export default Navbar