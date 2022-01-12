import React, {Fragment} from 'react';
import LeftIcon from '../../Images/left-icon.svg';
import RightIcon from '../../Images/right-icon.svg';
import Img1 from '../../Images/news-1.png';
import Img2 from '../../Images/news-2.png';
import Img3 from '../../Images/news-3.png';

function Carousel() {
  return (
<Fragment>
  <div className="flex flex-col flex-wrap gap-7 pt-7 place-items-center">
  <span className="ml-28 place-self-start">
  <h1 className="text-black text-3xl font-bold"> Informasi Terbaru </h1>
  <p className="text-darkgray"> Tetap update dengan informasi event, beasiswa, diskon dan lainnya</p>
  </span>
  <div className="grid grid-flow-col gap-4 auto-cols-max space-5">
    <img className="self-center" src = {LeftIcon} alt="left icon" />
    <img src={Img1} alt="Berita Seminar" />
    <img src={Img2} alt="Berita Mentoring" />
    <img src={Img3} alt="Berita Pengumuman" />
    <img className="self-center"  src={RightIcon} alt="right icon" />
  </div>
  
  </div>
	
</Fragment>
  );
}

export default Carousel;
