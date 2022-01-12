import React, {Fragment} from 'react';
import TitikJedaLogo from '../../Images/logo.svg';

function FooterBar(){
  return (
<Fragment>
    <div className="ml-28 grid overflow-hidden grid-cols-3 grid-rows-2 gap-3 self-center text-gray space-7 p-7">
        <div className="box row-span-2">
        <img className="scale-55" src={TitikJedaLogo} alt="Logo Titik Jeda" />
        <p > Website untuk mencari informasi, jasa proof-reading, dan intensif mentoring beasiswa dengan mentor yang berpengalaman </p>
        </div>
        <div className="box col-start-2">
          <h3> Layanan </h3>
          <p> Proof-Reading </p>
          <p> Intensif Mentoring </p></div>
        <div className="box col-start-3">
          <h3> Explore </h3>
          <p> About us </p>
          <p> Podcast </p>
          </div>
        <div className="box col-start-2">
          <h3> Hubungi Kami </h3>
          <p> Instagram </p>
          <p> Whatsapp </p>
          <p> Email </p>
        </div>
        <div className="box row-start-8 row-end-4 col-start-auto col-span-3 justify-center">
          <p> &copy; 2021 Titik Jeda </p>
        </div>    
        </div>
</Fragment>
  );
}

export default FooterBar;
