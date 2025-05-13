'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';
import { oswald } from '@/utils/font';
import { FaUser } from 'react-icons/fa';
// import { LoginPage } from '../auth/pages/LoginPage'

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


  const notificationsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsClick(!isClick);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
      setIsNotificationsOpen(false);
    }
    if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutsideEvent = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', handleClickOutsideEvent as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideEvent as EventListener);
    };
  }, []);


  return (
    <nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} className='flex items-center justify-between p-5 w-full top-0 fixed shadow-md z-50 '>
      {/* Menu Logo */}
      <div className='flex items-center justify-between w-full md:w-auto'>
        <button className="md:hidden" onClick={toggleDropdown}>
          {isClick ? (
            <IoMdClose size={24} color="#fff" />
          ) : (
            <RxHamburgerMenu size={24} color="#fff" />
          )}
        </button>
        <div className="flex-1 flex justify-center md:justify-start">
          <Image src='/img/logos/logo.webp' width={50} height={50} alt='Logo' />
          <span className={`${oswald.className} hidden md:flex text-2xl p-2 font-semibold bg-gradient-to-br from-red-500 to-indigo-50 text-transparent bg-clip-text`}>
            Ping Pong
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='hidden md:flex md:flex-row md:gap-6'>
      <Link href='/' className='p-2 hover:text-red-500  text-white'>Inicio</Link>
        <Link href='#MisionVision' className='p-2 hover:text-red-500 text-white'>¿Quienes Somos?</Link>
        <Link href='#Inicio' className='p-2 hover:text-red-500 text-white'>Torneos</Link>
        <Link href='/' className='p-2 hover:text-red-500 text-white'>Ranking</Link>
        <Link href='/' className='p-2 hover:text-red-500 text-white'>Noticias</Link>
        <Link href='#Contacto' className='p-2 hover:text-red-500 text-white'>Contacto</Link>
        <Link href='/' className='p-2 hover:text-red-500 text-white'>Clubs</Link>
        <Link href='/jugadores' className='p-2 hover:text-red-500 text-white'>Jugadores</Link>

      </div>

      {/* Icons*/}
      <div className="flex items-center gap-x-6 relative">
      

        {/* Notifications Icon */}
        <div className="relative" ref={notificationsRef}>
          <button className="bg-red-500 text-white rounded-full p-2" onClick={toggleNotifications}>
            <IoIosNotifications size={20} />
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black rounded-lg z-50">
              <Link href='/' className='block px-4 py-2 hover:text-red-500 text-white'>Notificacion 1</Link>
              <Link href='/' className='block px-4 py-2 hover:text-red-500 text-white'>Notificacion 2</Link>
              <Link href='/' className='block px-4 py-2 hover:text-red-500 text-white'>Notificacion 3</Link>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="relative" ref={userMenuRef}>
          <button className="bg-red-500 text-white rounded-full p-2" onClick={toggleUserMenu}>
            <FaUser size={20} />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black rounded-lg z-50">
              <Link href='/pages/Login' className='block text-white px-4 py-2 hover:text-red-500'>Iniciar Sesion</Link>
              <Link href='/' className='block text-white px-4 py-2 hover:text-red-500'>Registrarse</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className='absolute top-full left-0 w-full shadow-md md:hidden flex flex-col items-center bg-black bg-opacity-50 pb-7 text-white'>
          <Link href='/' className='p-2 hover:text-red-500'>Inicio</Link>
          <Link href='/' className='p-2 hover:text-red-500'>¿Quienes Somos?</Link>
          <Link href='/' className='p-2 hover:text-red-500'>Torneos</Link>
          <Link href='/' className='p-2 hover:text-red-500'>Ranking</Link>
          <Link href='/' className='p-2 hover:text-red-500'>Noticias</Link>
          <Link href='/' className='p-2 hover:text-red-500'>Contacto</Link>
          <Link href='/' className='p-2 hover:text-red-500'>Club</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
