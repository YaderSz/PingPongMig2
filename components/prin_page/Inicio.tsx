import React from "react";
const Inicio = () => {

  return (
    <div id= "Inicio" className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-4">
        <div className="flex items-center gap-2 text-lg font-semibold mb-6">
          <span className="text-2xl">👤</span>
          <span>User</span>
        </div>

        <nav className="space-y-6">
          <div className="flex items-center gap-2 text-white font-medium cursor-pointer">
            <span>🏃‍♂️</span>
            <span>Jugadores</span>
            <span className="ml-auto">⬇️</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span>👥</span>
            <span>Clubes</span>
            <span className="ml-auto">⬇️</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span>🏆</span>
            <span>Torneos</span>
            <span className="ml-auto">⬇️</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span>🪑</span>
            <span>Mesas</span>
            <span className="ml-auto">⬇️</span>
          </div>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-10 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-700">Bienvenido al Sistema de Torneos</h1>
      </main>
    </div>
  );
}
  export default Inicio;
