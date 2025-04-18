import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import candlePathImg from '../assets/AddOns/Candle Path (Rs 300).png';
import coldFireImg from '../assets/AddOns/cold_fire.webp';
import fogEffectImg from '../assets/AddOns/fogeffect.png';
import hbdLettersImg from '../assets/AddOns/hbdletters.jpg';
import ledNumberImg from '../assets/AddOns/lednumbers.jpg';
import partyPropsImg from '../assets/AddOns/partyprops.jpg';
import photoClippingImg from '../assets/AddOns/photoclippings.jpg';
import singleRoseImg from '../assets/AddOns/singleflower.jpg';
import roseBouquetImg from '../assets/AddOns/rosebouquet.png';
import photo20Img from '../assets/AddOns/photo20.jpeg';
import photo50Img from '../assets/AddOns/photo50.jpeg';
import photo75Img from '../assets/AddOns/photo75.jpeg';
import photo100Img from '../assets/AddOns/photo100.jpeg';
import { BookingSummary } from '../components/BookingSummary';
import { BookingContext } from '../context/BookingContext';
import 'react-toastify/dist/ReactToastify.css';

const SelectAddOns = () => {
  const { updateBooking, selectedAddonIndex } = useContext(BookingContext);

  const selectedItems = Array.isArray(selectedAddonIndex) ? selectedAddonIndex : [];

  const extraDecorationDetails = [
    { img: candlePathImg, title: "Candle Path", price: 250 },
    { img: coldFireImg, title: "Cold Fire (2 pieces)", price: 750 },
    { img: coldFireImg, title: "Cold Fire (4 pieces)", price: 1500 },
    { img: fogEffectImg, title: "Fog Effect", price: 499 },
    { img: hbdLettersImg, title: "HBD Letters", price: 99 },
    { img: ledNumberImg, title: "LED Numbers", price: 99 },
    { img: partyPropsImg, title: "Party Props", price: 199 },
    { img: photoClippingImg, title: "Photo Clippings (16 pieces)", price: 499 },
  ];

  const flowersDetails = [
    { img: singleRoseImg, title: "Single Rose", price: 49 },
    { img: roseBouquetImg, title: "Rose Bouquet", price: 349 },
  ];

  const photographyDetails = [
    { img: photo20Img, title: "Photography (20)", price: 299 },
    { img: photo50Img, title: "Photography (50)", price: 499 },
    { img: photo75Img, title: "Photography (75)", price: 699 },
    { img: photo100Img, title: "Photography (100)", price: 999 },
  ];

  const handleExtraDecoration = (title, price) => {
    const isSelected = selectedItems.includes(title);
    const updatedItems = isSelected
      ? selectedItems.filter(item => item !== title)
      : [...selectedItems, title];
    updateBooking("selectedAddonIndex", updatedItems);
  };

  useEffect(() => {
    // Calculate total add-ons price whenever selection changes
    const safeArray = Array.isArray(selectedAddonIndex) ? selectedAddonIndex : [];
    const totalAddOnsPrice = safeArray.reduce((acc, title) => {
      const item = [...extraDecorationDetails, ...flowersDetails, ...photographyDetails]
        .find(item => item.title === title);
      return acc + (item?.price || 0);
    }, 0);
    
    updateBooking("addons", totalAddOnsPrice);
  }, [selectedAddonIndex, updateBooking]);

  return (
    <div>
      <div className='pt-5 pb-5 md:pb-10 px-5 md:px-10 xl:px-20 bg-gray-100'>
        <Link to="/select-cakes">
          <button className="mb-4 flex items-center gap-1" onClick={() => updateBooking("selectedAddonIndex", [])}>
            <MdKeyboardBackspace />
            Back
          </button>
        </Link>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
          <div className="md:basis-2/3 bg-white shadow-md p-5 rounded-md h-fit">
            <div className="text-lg py-1 md:text-2xl font-medium mb-5">Extra Decorations</div>
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 mt-5">
              {extraDecorationDetails.map((item, index) => (
                <div
                  key={index}
                  className={`relative col-span-2 md:col-span-1 text-gray-700 flex flex-col items-center rounded-2xl p-3 lg:p-4 transition-all duration-200 border border-transparent cursor-pointer hover:border hover:border-violet-200 ... ${selectedItems.includes(item.title) ? 'bg-violet-200' : 'bg-white'
                  }`}
                  onClick={() => handleExtraDecoration(item.title, item.price)}
                >
                  <div className='h-[17vh] w-[17vh] rounded-full overflow-hidden shadow-2xl'>
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover rounded-full" />
                  </div>
                  <div className="font-medium text-md h-12 text-center items-center flex justify-center">
                    {item.title}
                  </div>
                  <div className="text-center text-sm font-[600]">₹ {item.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 md:mt-4 text-yellow-700 text-sm md:text-base p-2 bg-yellow-50 rounded-md flex gap-1 items-start border border-yellow-100">
              <svg
                className='w-6 h-6 text-yellow-700'
                fill='currentColor'
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InfoOutlinedIcon"
              >
                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
              For photoclippings, our team will reach out to you on the day of booking. You need to send 16 soft copies of the photos you want to place inside the theater.
            </div>

            <div className="text-lg py-1 md:text-2xl font-medium mb-5">Flowers</div>
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 mt-5">
              {flowersDetails.map((item, index) => (
                <div
                  key={index}
                  className={`relative col-span-2 md:col-span-1 text-gray-700 flex flex-col items-center rounded-2xl p-3 lg:p-4 transition-all duration-200 border border-transparent cursor-pointer hover:border hover:border-violet-200 ... ${selectedItems.includes(item.title) ? 'bg-violet-200' : 'bg-white'
                  }`}
                  onClick={() => handleExtraDecoration(item.title, item.price)}
                >
                  <div className='h-[17vh] w-[17vh] rounded-full overflow-hidden shadow-2xl'>
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover rounded-full" />
                  </div>
                  <div className="font-medium text-md h-12 text-center items-center flex justify-center">
                    {item.title}
                  </div>
                  <div className="text-center text-sm font-[600]">₹ {item.price}</div>
                </div>
              ))}
            </div>

            <div className="text-lg py-1 md:text-2xl font-medium mb-5">Photography <span className='text-md md:text-lg'>(soft copies only)</span></div>
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 mt-5">
              {photographyDetails.map((item, index) => (
                <div
                  key={index}
                  className={`relative col-span-2 md:col-span-1 text-gray-700 flex flex-col items-center rounded-2xl p-3 lg:p-4 transition-all duration-200 border border-transparent cursor-pointer hover:border hover:border-violet-200 ... ${selectedItems.includes(item.title) ? 'bg-violet-200' : 'bg-white'
                  }`}
                  onClick={() => handleExtraDecoration(item.title, item.price)}
                >
                  <div className='h-[17vh] w-[17vh] rounded-full overflow-hidden shadow-2xl'>
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover rounded-full" />
                  </div>
                  <div className="font-medium text-md h-12 text-center items-center flex justify-center">
                    {item.title}
                  </div>
                  <div className="text-center text-sm font-[600]">₹ {item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:basis-1/3">
            <BookingSummary />
            <Link to="/payment-page">
              <div className="mt-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Next
                </button>
              </div>
            </Link>
            <div className="mt-3">
              <button
                className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                onClick={() => updateBooking("selectedAddonIndex", [])}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddOns;