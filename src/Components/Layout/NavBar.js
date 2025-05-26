import React, {Fragment} from 'react';
import { Link} from 'react-router-dom';
import TitikJedaLogo from '../../Images/logo.svg';

function NavBar(){
  return (
<Fragment>
	<nav className="flex flex-row items-center justify-between flex-wrap bg-orange p-4">
	 <div className="flex items-center w-logo flex-shrink-0 mr-96">
		<img className="scale-55" src={TitikJedaLogo} alt="Logo Titik Jeda" />
  	 </div>
  	 <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-items-center">
    	<ul className="text-sm lg:flex-grow space-x-5 ">
      <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white ">
        
      <Link to="/">Home</Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white ">
       Informasi Beasiswa
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white ">
        
         <Link to="/services">Services</Link>
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white ">
        
         <Link to="/podcast">Podcast</Link>
      </li>
      </ul>
    </div>
</nav>
</Fragment>
  );
}

export default NavBar;
