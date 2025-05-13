"use client";
import React, { useState } from 'react';

interface SidebarNavItem {
  icon: React.ReactNode;
  label: string;
  subItems: string[];
}

const navItems: SidebarNavItem[] = [
  { icon: <span>🏃‍♂️</span>, label: "Jugadores",
    subItems: ["Ver Jugadores", "InsetarJugador","Editar Jugadores"],
   },
  { icon: <span>👥</span>, label: "Clubes", 
    subItems:["Ver Clubes", "Insertar Club", "Editar Clubes"], 
  },
  { icon: <span>🏆</span>, label: "Torneos",
    subItems:["Ver Torneos", "Añadir Torneo", "Editar Torneo"],
   },
  { icon: <span>🪑</span>, label: "Mesas", 
    subItems:["Ver Mesas", "Añadir Mesa", "Asignar Mesas"]},
];

const InicioSidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Cierra el sidebar al hacer click fuera (en mobile)
  const handleOverlayClick = () => setSidebarOpen(false);

  return (
    <>
      {/* Botón hamburguesa solo en mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-Navbar text-white p-2 rounded focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Abrir menú lateral"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay para cerrar el sidebar en mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-Navbar text-white flex flex-col p-4 z-40
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex
        `}
        style={{ minHeight: "100vh" }}
      >
        {/* Botón cerrar solo en mobile */}
        <div className="flex md:hidden justify-end mb-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar menú lateral"
            className="text-white p-2 rounded hover:bg-red-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold mb-6">
          <span className="text-2xl">👤</span>
          <span className="text-lg lg:text-2xl py-10">User</span>
        </div>
        <nav className="space-y-14">
          {navItems.map((item) => (
            <div key={item.label}>
              <div
                onClick={() => toggleMenu(item.label)}
                className="flex items-center gap-2 text-white font-medium cursor-pointer hover:text-red-400 text-lg lg:text-xl"
              >
                {item.icon}
                <span>{item.label}</span>
                <span className="ml-auto">⬇️</span>
              </div>
              {openMenu === item.label && (
                <ul className="ml-6 mt-2 space-y-1 text-sm lg:text-base">
                  {item.subItems.map((sub) => (
                    <li key={sub} className="cursor-pointer hover:text-red-400">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
      {/* Espacio a la izquierda en desktop para que el contenido no quede debajo del sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0" aria-hidden="true" />
    </>
  );
};

export default InicioSidebar;
