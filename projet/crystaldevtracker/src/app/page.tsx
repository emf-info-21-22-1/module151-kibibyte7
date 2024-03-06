import React from "react";
import Navbar from "../components/Navbar";

export default function Home(){
return (
    <div className="Home h-screen flex items-center justify-center">
      {/* Menu */}
      <Navbar/>
      {/* Nom du projet */}
      <div className="justify-center items-center flex">
        <h1 className="text-pink-400 font-semibold text-8xl no-select">CrystalDevTracker_</h1>
      </div>      
    </div>
);
}