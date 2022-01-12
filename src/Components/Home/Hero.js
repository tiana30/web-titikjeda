import React, {Fragment} from 'react';
import HeroImg from '../../Images/hero-img.svg';

function Hero() {
  return (
<Fragment>
  <div className="bg-milky flex flex-row p-7">
  <div className="hero-left flex-1 w-64 space-y-7">
    <h1 className="text-darkgray text-3xl"> Buat mimpimu kuliah diluar negeri menjadi kenyataan</h1>
    <p className="text-gray"> Cari informasi beasiswa dan persiapan dokumen bersama mentor berpengalaman </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pilih Layanan </button>
    </div>
    <div className="hero-right flex-1 w-64">
    <img src={HeroImg} alt="gambar hero" />
    </div>
  </div>
	
</Fragment>
  );
}

export default Hero;
