import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdClose } from "react-icons/md";

const TheatreimagesSlider = ({ sapphireTheatreImages, handleBackToPage, initialIndex = 0 }) => {
    const [currentImage, setCurrentImage] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);


    useEffect(() => {
        const startAutoSlide = () => {
            intervalRef.current = setInterval(() => {
                setIsAnimating(true);
                setCurrentImage(prev =>
                    prev === sapphireTheatreImages.length - 1 ? 0 : prev + 1
                );
                setTimeout(() => setIsAnimating(false), 500);
            }, 3000);
        };

        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [sapphireTheatreImages.length]);

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    const changeImage = (direction) => {
        stopAutoSlide();
        setIsAnimating(true);

        if (direction === 'next') {
            setCurrentImage(prev =>
                prev === sapphireTheatreImages.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentImage(prev =>
                prev === 0 ? sapphireTheatreImages.length - 1 : prev - 1
            );
        }

        setTimeout(() => setIsAnimating(false), 100);
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const difference = touchStartX.current - touchEndX.current;
        if (difference > 50) {
            changeImage('next');
        } else if (difference < -50) {
            changeImage('prev');
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div
            className="fixed inset-0 z-[1000] bg-[#121212e6] flex items-center justify-center"
            onClick={handleBackToPage}
        >
            {/* Close button */}
            <button
                className="absolute top-6 right-6 z-50 text-3xl text-white hover:text-amber-400 transition-colors"
                onClick={handleBackToPage}
            >
                <MdClose />
            </button>

            {/* Navigation arrows */}
            <button
                className="absolute left-4 md:left-8 lg:left-16 z-50 p-2 text-4xl text-white hover:text-amber-400 hover:scale-110 transition-all"
                onClick={(e) => { e.stopPropagation(); changeImage('prev'); }}
                aria-label="Previous image"
            >
                <IoIosArrowBack />
            </button>

            {/* Image container */}
            <div
                className={`relative w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[60vh] md:w-[70vw] md:h-[70vh] lg:w-[60vw] lg:h-[80vh] bg-black rounded-xl overflow-hidden transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={sapphireTheatreImages[currentImage]}
                    alt={`Gallery image ${currentImage + 1}`}
                    className={`w-full h-full object-contain transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImage + 1} / {sapphireTheatreImages.length}
                </div>
            </div>

            <button
                className="absolute right-4 md:right-8 lg:right-16 z-50 p-2 text-4xl text-white hover:text-amber-400 hover:scale-110 transition-all"
                onClick={(e) => { e.stopPropagation(); changeImage('next'); }}
                aria-label="Next image"
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default TheatreimagesSlider;