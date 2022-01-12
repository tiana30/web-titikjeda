import React, {Fragment} from 'react';
import ImagesMentoring from '../../Images/img-mentoring.svg';

function ProofReading() {
  return (
<Fragment>
  <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">
  <div className="box col-span-3">
   <h1 className="text-black text-3xl font-bold"> Proof-Reading </h1>
  </div>

  <div className="box"> 
    <img src = {ImagesMentoring} alt="Gambar Layanan Proof Reading" />
  </div>

  <div className="box row-start-2 col-start-2 col-span-2">
    <h2> Siapkan dokumenmu sebaik mungkin dan raih mimpimu! </h2>
    <p> Titik Jeda bakal bantu kamu untuk proofread dokumen dengan paket yang dapat disesuaikan dan harga yang terjangkau. </p>
  </div>

  <div className="box col-start-2">
    <p> Paket Alpha </p>
    <p> Rp 39.000 </p>
    <p> Essay / Motivation Letter / Research Plan </p>
    <p> Max 500 kata </p> 
    <p> Pengerjaan max 3x24 jam </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pesan Lewat Whatsapp </button>
  </div>

  <div className="box col-start-3">
    <p> Paket Beta </p>
    <p> Rp 49.000 </p>
    <p> Essay / Motivation Letter / Research Plan </p>
    <p> Max 500 kata </p> 
    <p> Pengerjaan max 2x24 jam </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pesan Lewat Whatsapp </button>
  </div>

  <div className="box row-start-8 col-start-2">
    <p> Paket Gama </p>
    <p> Rp 69.000 </p>
    <p> Essay / Motivation Letter / Research Plan </p>
    <p> Max 500 kata </p> 
    <p> Pengerjaan max 3x24 jam </p>
    <p> 2x Kesempatan revisi sampai final </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pesan Lewat Whatsapp </button>
  </div>

  <div className="box col-start-3">
    <p> Paket Delta </p>
    <p> Rp 99.000 </p>
    <p> Essay / Motivation Letter / Research Plan </p>
    <p> 1x Zoom privat (1 on 1) </p>
    <p> Max 500 kata </p> 
    <p> Pengerjaan max 1x24 jam </p>
    <p> 2x Kesempatan revisi sampai final </p>
    <button className="bg-violet text-lightgray rounded-lg p-3"> Pesan Lewat Whatsapp </button>
  </div>
</div>
</Fragment>
  );
}

export default ProofReading;
