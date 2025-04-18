import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import HitecCity from './HitecCity';
import Miyapur from './Miyapur';

const Gallery = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Hitec City');
  const cities = ['Hitec City', 'Miyapur'];
  
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className='w-full overflow-hidden px-4 md:px-8 py-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6 ml-4 md:ml-16 py-4 text-center'>Gallery</h1>
        <div className='relative mb-8 max-w-5xl mx-auto'>
          <div 
            className='flex items-center justify-between w-full rounded-lg border-2 border-purple-800 py-3 px-4 cursor-pointer'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <h4 className='text-lg font-medium'>{selectedCity}</h4>
            <span className='absolute -top-3 left-3 px-2 bg-white text-sm text-purple-800'>Location</span>
            <FaCaretDown 
              className={`text-purple-800 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </div>
          {isDropdownOpen && (
            <div className='absolute w-full bg-white z-10 border border-gray-300 rounded-lg mt-1 shadow-lg overflow-hidden'>
              {cities.map((city, index) => (
                <div
                  key={index}
                  className='px-4 py-3 hover:bg-purple-100 transition-colors duration-200 cursor-pointer'
                  onClick={() => handleCitySelect(city)}
                >
                  <h4 className='text-lg'>{city}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='transition-all duration-300'>
          {selectedCity === 'Hitec City' && <HitecCity />}
          {selectedCity === 'Miyapur' && <Miyapur />}
        </div>
      </div>
    </div>
  );
}

export default Gallery;