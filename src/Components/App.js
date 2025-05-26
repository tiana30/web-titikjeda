import React, {Fragment} from 'react';
import Home from './Home/Home';
import Services from './Services/Services';
import ProofReading from './ProofReading/ProofReading';
import Podcast from './Podcast/Podcast';
import NavBar from './Layout/NavBar';
import FooterBar from './Layout/FooterBar';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>

   
     <NavBar />
     <Routes>
      {/* Home Route */}
      <Route path='/' element={<Home />} />

      {/* Services Route */}
      <Route path='/services' element={<Services />} />

      {/* ProofReading Route */}
      <Route path='/proofreading' element={<ProofReading />} />

      {/* Podcast Route */}
      <Route path='/Podcast' element={<Podcast />} />

      {/* You can also add a catch-all route for 404 pages */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
      
        <FooterBar />
    
 </Fragment>
  
  );
}

export default App;