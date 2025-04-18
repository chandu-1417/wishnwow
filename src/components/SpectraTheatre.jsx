import React, { useState } from 'react'
import img1 from '../assets/gallery/SpectraTheatre/v2spectra1.jpg'
import img2 from '../assets/gallery/SpectraTheatre/v2spectra2.jpg'
import img3 from '../assets/gallery/SpectraTheatre/v2spectra3.jpg'
import img4 from '../assets/gallery/SpectraTheatre/v2spectra4.jpg'
import TheatreimagesSlider from './TheatreimagesSlider'


const SpectraTheatre = () => {
    const [show, setShow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const SpectraTheatre = [img1, img2, img3, img4];
    
    const handleTheatreImages = (index) => {
        setSelectedIndex(index);
        setShow(true);
    };
    
    const handleBackToPage = () => {
        setShow(false);
    };

    return (
        <div className='w-full relative tracking-wide mt-8 md:mt-12 overflow-hidden px-4 md:px-0'>
            <div className="text-xl md:text-2xl font-medium mb-6 ml-[6vw]">Spectra Theatre</div>

            <div className='flex flex-wrap gap-4 md:gap-6 justify-center mx-auto max-w-[90vw]'>
                {SpectraTheatre.map((img, index) => (
                    <div 
                        key={index} 
                        className='w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[20vw] md:h-[20vw] lg:w-[18vw] lg:h-[18vw] overflow-hidden rounded-lg bg-amber-600 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300'
                        onClick={() => handleTheatreImages(index)}
                    >
                        <img 
                            src={img} 
                            alt={`Carnival Theatre ${index + 1}`}
                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                ))}
            </div>

            {show && (
                <TheatreimagesSlider 
                    sapphireTheatreImages={SpectraTheatre} 
                    initialIndex={selectedIndex}
                    handleBackToPage={handleBackToPage} 
                />
            )}
        </div>
    );
}

export default SpectraTheatre