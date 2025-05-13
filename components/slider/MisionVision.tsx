import React from 'react';
import PingPongList from '../components/PingPongList';

const MisionVision = () => {
  return (
    <div id="MisionVision" className="bg-white min-h-screen py-10 px-4">
      <aside className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Info Pagina */}
          <div className="w-full ">
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <h1 className="text-3xl font-bold text-red-700 text-center w-full">¿Quienes Somos?</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos una academia apasionada por el tenis de mesa, especialmente diseñada para estudiantes universitarios. 
                Además, contamos con un equipo profesional y profesores altamente capacitados. Nuestro personal está 
                comprometido en desarrollar las habilidades de quienes deseen entrenar con nosotros.
              </p>
              <h1 className="text-3xl font-bold text-red-700 text-center w-full">Misión</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra misión es formar atletas comprometidos con la excelencia en el tenis de mesa. 
                Buscamos no solo desarrollar habilidades técnicas y tácticas, sino también fomentar valores como la disciplina, 
                la perseverancia y el trabajo en equipo. Queremos que cada estudiante encuentre en el ping pong una fuente de diversión, 
                aprendizaje y crecimiento personal.
              </p>
              <h1 className="text-3xl font-bold text-red-700 text-center w-full">Visión</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Como academia líder en el ámbito universitario, aspiramos a 
                ser reconocidos por la calidad de nuestros jugadores y su desempeño en competencias locales e internacionales.
                Fomentar la camaradería y la amistad entre los estudiantes a través del tenis de mesa, creando un espacio donde todos se sientan bienvenidos.
                y proporcionar información sobre el ping pong, organizar charlas y talleres, y promover la pasión por este deporte en toda la universidad.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MisionVision;