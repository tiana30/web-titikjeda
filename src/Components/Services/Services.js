import React, {Fragment} from 'react';
import ImagesMentoring from '../../Images/img-mentoring.svg';
import ImagesProofReading from '../../Images/img-proofreading.svg';

function Services(){
  return (
<Fragment>
  <div className="flex flex-col flex-wrap gap-7 items-center justify-center">
  <span className="ml-28 ">
  <h1 className="text-black text-3xl font-bold"> Pilih Layanan </h1>
  <p className="text-darkgray"> Layanan apa yang kamu inginkan? </p>
  </span>
  <div className="flex flex-row items-center justify-center">
    <div className="flex-0 ">
    <img src = {ImagesMentoring} alt="Gambar Layanan Proof Reading" />
    <span className = "flex flex-col items-center justify-center p-5 gap-3">
    <h2 className="font-bold"> Proof Reading </h2>
    <p> Cek Essay, Motivation Letter, dan Reasearch Plan </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Detail Layanan </button>
    </span>
    </div>
    <div className="flex-0 flex-col p-7">
      <img src = {ImagesProofReading} alt="Gambar Layanan Intensive mentoring" />
       <span className = "flex flex-col items-center justify-center p-5 gap-3">
      <h2 className="font-bold"> Intensive Mentoring </h2>
      <p> Paket Lengkap Diskusi Bersama Mentor </p>
      <button className="bg-violet text-lightgray rounded-lg p-3"> Detail Layanan </button>
      </span>
    </div>
  </div>
  
  </div>      
</Fragment>
  );
}

export default Services;
