import React from "react";
import InicioSidebar from "./InicioSidebar";
import InicioMainSection from "./InicioMainSection";

const InicioContainer: React.FC = () => (
  <div id="Inicio" className="flex flex-1 bg-white min-h-screen">
    <InicioMainSection />
  </div>
);

export default InicioContainer;