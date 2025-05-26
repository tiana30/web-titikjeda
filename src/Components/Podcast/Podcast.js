import React, {Fragment} from 'react';
import ApplePodcast from '../../Images/apple-podcast.svg';
import Spotify from '../../Images/spotify.svg'

function Podcast() {
  return (
<Fragment>
  <div>
    <h1 className="ml-6 mr-6 md:text-center text-5xl font-bold">Podcast</h1>  
    <p className="ml-6 mr-6 md:text-center font-normal">Yuk, dengerin podcast pengalaman dan perjalanan awardee mendapatkan beasiswa</p>
      <div className="flex justify-evenly">
          <div className="md:flex">
        <div className="p-6">
            <img src={Spotify} alt="Spotify Titik Jeda" />           
            <button className="text-[#8F259F] font-bold py-3 w-full border border-[#8F259F] rounded-lg">
            <a href="https://open.spotify.com/show/10QONIQfaOTHI1BGdpwXJw" target="_blank" rel="noopener noreferrer">Listen on Spotify</a> 
            </button>
        </div>
        <div className="p-6">
            <img src={ApplePodcast} alt="Apple Podcast Titik Jeda" />   
            <button className="text-[#8F259F] font-bold py-3 w-full border border-[#8F259F] rounded-lg">
            <a href="https://podcasts.apple.com/us/podcast/titik-jeda/id1523230998" target="_blank" rel="noopener noreferrer">Listen on Apple Podcast</a> 
            </button>
        </div>
     </div>
      </div>
    </div>
</Fragment>
  );
}

export default Podcast;
