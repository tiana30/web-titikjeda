import React, {Fragment} from 'react';
import IconMentoring from '../../Images/p2.png';
import Icon1 from '../../Images/icon1.svg';
import Icon2 from '../../Images/icon2.svg';
import Icon3 from '../../Images/icon3.svg';

function Description() {
  return (
<Fragment>
  <div className="flex flex-col flex-wrap gap-7 p-7 place-items-center bg-lightgray">
  <span className="ml-28 place-self-start">
  <h1 className="text-black text-3xl font-bold"> Kenapa Harus Titik Jeda ? </h1>
  <p className="text-darkgray"> Tetap update dengan informasi event, beasiswa, diskon dan lainnya</p>
  </span>
  <div className="flex flex-row ">
    <div className="flex-0">
    <img src = {IconMentoring} alt="Gambar Icon" />
    </div>
    <div className="flex-2 gap-10 p-5">
    <div className="flex flex-row gap-x-3 gap-y-10">
      <img src={Icon1} alt="Icon Informasi" />
      <span className="text-darkgray self-center">
      <p> Informasi beasiswa </p>
      <p>Dapatkan informasi terkini dan yang akan datang</p>
      </span>
      </div>
      <div className="flex flex-row gap-x-3 gap-y-10">
      <img src={Icon2} alt="Icon Mentor" />
      <span className="text-darkgray self-center">
      <p> Mentor Berpengalaman </p>
      <p>Mentor memiliki pengalaman sesuai beasiswa yang kamu impikan</p>
      </span>
      </div>
      <div className="flex flex-row gap-x-3 gap-y-10">
      <img src={Icon3} alt="Icon Biaya" />
      <span className="text-darkgray self-center">
      <p> Pilih Layanan </p>
      <p>Sesuai Budget Tentukan pilihanmu sesuai budget yang kamu tentukan</p>
      </span>
      </div> 
    </div>
  </div>
  
  </div>


	
</Fragment>
  );
}

export default Description;
