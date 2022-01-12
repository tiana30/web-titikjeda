import React, {Fragment} from 'react';
import User1 from '../../Images/man-1.svg';
import User2 from '../../Images/man-2.svg';
import User3 from '../../Images/woman-1.svg';
import Rating from '../../Images/rating.svg';

function Testimonial() {
  return (
<Fragment>
  <div className="bg-lightgray flex flex-col p-7 justify-center">
  <div className="ml-28 flex-1 space-y-7">
  <span className="ml-28 place-self-start">
    <h1 className="text-black text-3xl font-bold"> Kisah Sukses</h1>
    <p className="text-darkgray"> Mereka sudah membuktikannya, selanjutnya giliran kamu </p>
  </span>
    <button className="border-solid border-2 border-violet text-violet rounded-lg p-3"> Lihat Kisah Lainnya </button>
    </div>
    <div className="ml-28 flex-1 space-y-7 self-center ">
    <div className="flex flex-row w-3/4 space-x-7 p-7">
      <div className="bg-milky flex-0 space-y-2 p-7">
        <img className="self-center mb-2" src={User1} alt="Gambar Orang" />
        <span>
        <h2> Muhammad Soleh </h2>
        <h3 className="text-gray"> LPDP Awardee </h3> 
        </span>
        <p> Saya mendapatkan support yang baik dan sampai akhirnya saya lolos LPDP dan keterima di Monash University. </p>
        <img src={Rating} alt="Gambar Bintang" />
      </div>
      <div className="bg-milky flex-0 space-y-2 p-7">
        <img className="self-center mb-2" src={User2} alt="Gambar Orang" />
        <span>
        <h2> Arif Purwanto </h2>
        <h3 className="text-gray"> LPDP Awardee </h3>
        </span>
        <p> Terimakasih Titik Jeda sudah memberikan layanan proofread terjagkau, saya akhirnya lolos LPDP non LOA. </p>
        <img src={Rating} alt="Gambar Bintang" />
      </div>
      <div className="bg-milky flex-0 space-y-2 p-7">
        <img className="self-center mb-2" src={User3} alt="Gambar Orang" />
        <span>
        <h2> Putri Rahayu </h2>
        <h3 className="text-gray"> LPDP Awardee </h3>
        </span>
        <p> Simulasi Interview sangat membantu, tidak hanya diajak latihan dan diberikan feedback, tapi juga motivasi. </p>
        <img src={Rating} alt="Gambar Bintang" />
      </div>
    </div>
    </div>
    <div className="flex-1 space-y-7 self-center ">
    <span className="ml-28 place-self-start">
    <h1 className="text-black text-3xl font-bold"> Siap Mendapatkan Beasiswa Impianmu?</h1>
    <p className="text-darkgray"> Yuk, persiapkan semua dokumen beasiswamu dan diskusikan dengan mentor pilihanmu </p>
    </span>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pilih Layanan </button>
    </div>
  </div>
	
</Fragment>
  );
}

export default Testimonial;
