import React from "react";
import Navbar from "../Components/Navbar";
import tick from "../images/tick.svg";
import BGHome from "../images/BGHome.svg";



const HomePage = () => {
  return (
    <header>
      <Navbar/>
      <div className="pt-[100px] pl-10 absolute">
        <div className="pl-20">
        <h1 className="text-5xl font-semibold ">Temukan Berita Terkini Tentang </h1>
        <h1 className="text-5xl font-semibold ">Startup Lingkungan.</h1>    
        </div>
        <p className="text-lg font-normal mt-10 pl-20">
          Treest adalah website yang menyediakan informasi terkini seputar
          perusahaan
        </p>
        <p className="text-lg font-normal pl-20">startup dengan tema lingkungan di seluruh dunia.</p>
      </div>

      <div className="pl-[1000px] pt-[50px] absolute">
        <img src={tick}></img>
      </div>

      <div className="pl-28 pt-96">
        <button className='px-24 py-4 mb-4 rounded-md bg-green-600 text-white text-3xl font-bold w-96 "'>
          mulai
        </button>
      </div>
      <div className="pl-[50px]  pt-[44px]">
        <img src={BGHome}></img>
      </div>
    </header>
  );
};

export default HomePage;
