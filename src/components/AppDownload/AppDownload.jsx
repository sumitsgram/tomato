import React from 'react';
import "../AppDownload/AppDownload.css";
import { assets } from '../../assets/assets';

const AppDownload = () => {

  return (
    <div className="app-download" id="app-downlaod">
      <p>
        For better experience Downlaod <br /> Tomato App
      </p>
      <div className="app-downlaod-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload
