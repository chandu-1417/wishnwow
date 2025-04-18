import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import vanilaCakeImg from '../assets/Cakes/vanillacake.jpg';
import almondcakeImg from '../assets/Cakes/almondcrunchcake.jpeg';
import blackforestcakeImg from '../assets/Cakes/blackforestcake.jpg';
import blueberrycakeImg from '../assets/Cakes/blueberrycake.jpg';
import butterscotchcakeImg from '../assets/Cakes/butterscotchcake.jpg';
import choclatecoffeecakeImg from '../assets/Cakes/choclatecoffeecake.jpg';
import chocochipscakeImg from '../assets/Cakes/chocochipscake.jpg';
import chocolatecakeImg from '../assets/Cakes/chocolatecake.jpg';
import chocolatetrufflecakeImg from '../assets/Cakes/chocolatetrufflecake.png';
import darkchocolatecakeImg from '../assets/Cakes/darkchoclatecake.jpg';
import dryfruitcakeImg from '../assets/Cakes/dryfruitcake.jpg';
import kitkatchocolatecakeImg from '../assets/Cakes/kitkatchoclatecake.jpg';
import mangocrushcakeImg from '../assets/Cakes/mangocrushcake.png';
import pineapplecakeImg from '../assets/Cakes/pineapplecake.jpg';
import rumchocolatecakeImg from '../assets/Cakes/rumchoclatecake.jpg';
import strawberrycakeImg from '../assets/Cakes/strawberrycake.jpg';
import whiteforestcakeImg from '../assets/Cakes/whiteforestcake.jpg';
import nonVegIcon from '../assets/nonvegicon.png';
import vegIcon from '../assets/vegicon.png';
import { BookingSummary } from '../components/BookingSummary';
import Switch from '@mui/material/Switch';
import { BookingContext } from '../context/BookingContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';


const SelectCakes = () => {
    const { updateBooking, selectedCakeIndex, selectedCakeQuantity } = useContext(BookingContext);

    const [selectKg, setSelectKg] = useState(() => selectedCakeQuantity || 1);
    const [checked, setChecked] = useState(false);

    


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const cakesDetails = [
        { img: vanilaCakeImg, title: "Vanilla", price: "550" },
        { img: almondcakeImg, title: "Almond Crunch", price: "600" },
        { img: blackforestcakeImg, title: "Black Forest", price: "650" },
        { img: blueberrycakeImg, title: "Blueberry", price: "700" },
        { img: butterscotchcakeImg, title: "Butterscotch", price: "600" },
        { img: choclatecoffeecakeImg, title: "Choclate Coffee", price: "700" },
        { img: chocochipscakeImg, title: "Choco Chips", price: "600" },
        { img: chocolatecakeImg, title: "Chocolate", price: "650" },
        { img: chocolatetrufflecakeImg, title: "Chocolate Truffle", price: "700" },
        { img: darkchocolatecakeImg, title: "Dark Chocolate", price: "800" },
        { img: dryfruitcakeImg, title: "Dry Fruit", price: "900" },
        { img: kitkatchocolatecakeImg, title: "Kitkat Chocolate", price: "700" },
        { img: mangocrushcakeImg, title: "Mango Crush", price: "600" },
        { img: pineapplecakeImg, title: "Pineapple", price: "550" },
        { img: rumchocolatecakeImg, title: "Rum Chocolate", price: "800" },
        { img: strawberrycakeImg, title: "Strawberry", price: "600" },
        { img: whiteforestcakeImg, title: "White Forest", price: "650" },

    ]

    const handleCakeClick = (title, price, index) => () => {
        // setSelectedCake(index)
        updateBooking("selectedCakeIndex", index);
    }

    useEffect(() => {
        if (selectedCakeIndex === null) {
            setSelectKg(1);
        }
    }, [selectedCakeIndex]);

    useEffect(() => {
        const cakePrice = cakesDetails[selectedCakeIndex]?.price || 0;
        const totalPrice = cakePrice * selectedCakeQuantity;
        updateBooking("cake", totalPrice);
        updateBooking("selectedCakeQuantity", selectKg);
    }, [selectKg,selectedCakeIndex, selectedCakeQuantity, updateBooking]);

    const navigate = useNavigate();

    const handleNext = () => {
        if (selectedCakeIndex === null) {
            toast.warn("Please select a cake before proceeding.", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            alert("Selected Cake: " + cakesDetails[selectedCakeIndex].title + "\n" + "Price: " + cakesDetails[selectedCakeIndex].price + "\n" + "Quantity: " + selectedCakeQuantity + " kg" + "\n" + "Total Price: " + (cakesDetails[selectedCakeIndex].price * selectedCakeQuantity));
            updateBooking("cake", cakesDetails[selectedCakeIndex].price * selectedCakeQuantity);
            const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {};
            bookingDetails.selectedCake = cakesDetails[selectedCakeIndex].title;
            bookingDetails.cake = checked ? "Eggless" : "Egg"
            bookingDetails.cakeQuantity = selectedCakeQuantity;
            localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
            navigate("/select-addons");
        }
    }

    useEffect(() => {
        updateBooking("selectedCakeQuantity", selectKg);
    }, [selectKg, updateBooking]);


    return (
        <div>
            <div className='pt-5 pb-5 md:pb-10 px-5 md:px-10 xl:px-20 bg-gray-100'>
                <Link to="/select-occasion">
                    <button className="mb-4 flex items-center gap-1" onClick={() => updateBooking("selectedCakeIndex", null)}>
                        <MdKeyboardBackspace />
                        Back
                    </button>
                </Link>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                    <div className="md:basis-2/3 bg-white shadow-md p-5 rounded-md h-fit">
                        <div>
                            <div className='flex'><div className="text-lg py-1 md:text-2xl font-medium mb-5">Select Cakes</div>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    color="success"
                                    className='ml-7'
                                />
                                <span className='py-1 text-lg font-bold'>Eggless</span>
                            </div>
                            <div class="mt-2 md:mt-4 text-yellow-700 text-sm md:text-base p-2 bg-yellow-50 rounded-md flex gap-1 items-start md:items-center border border-yellow-100">
                                <svg
                                    className="w-5 h-5 flex-shrink-0 mr-1.5 text-yellow-700"
                                    fill='currentColor'
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="InfoOutlinedIcon">
                                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </svg>Images are for demonstration purposes only. Actual cake may look different.
                            </div>
                            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 mt-5">
                                {
                                    cakesDetails.map((item, index) => (
                                        <>
                                            <div key={index} className={`relative col-span-2 md:col-span-1 text-gray-700  flex flex-col items-center rounded-2xl p-3 lg:p-4 transition-all duration-200 border border-transparent cursor-pointer hover:border hover:border-violet-200 ${selectedCakeIndex === index ? 'bg-violet-200' : 'bg-white'}`}
                                                onClick={handleCakeClick(item.title, item.price, index)}>
                                                <div className='h-[15vh] w-[15vh] rounded-full overflow-hidden'>
                                                    <img src={item.img} alt={item.title} className="h-full w-full object-cover rounded-full" />
                                                </div>
                                                <div className=' flex  items-center gap-2 mt-3'><div class="font-medium text-md h-12 text-center items-center flex justify-center">{item.title}</div>{checked ? <img src={vegIcon} alt="" className='w-5 h-5' /> : <img src={nonVegIcon} alt="" className='w-5 h-5' />}</div>
                                                <div class="text-center text-sm font-[600]">₹ {item.price} / kg</div>
                                                {checked && <div className='text-[10px] bg-green-700 text-white px-3 absolute bottom-[14vh] right-1 sm:right-5 sm:bottom-[16vh] py-1 rounded-full'>Eggless</div>}
                                                {selectedCakeIndex === index &&
                                                    <div className='flex gap-2 mt-2'>
                                                        <div className='bg-white h-6 w-6 flex justify-center items-center rounded-md active:bg-gray-200' onClick={() => { selectKg > 1 ? setSelectKg(selectKg - 1) : "" }}>-</div>
                                                        <span className='font-bold'>{selectedCakeQuantity} kg</span>
                                                        <div className='bg-white h-6 w-6 flex justify-center items-center rounded-md active:bg-gray-200' onClick={() => { selectKg < 5 ? setSelectKg(selectKg + 1) : "" }}>+</div>
                                                    </div>}
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="md:basis-1/3">
                        <BookingSummary />
                        <div className="mt-3">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                onClick={handleNext}>
                                Next
                            </button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SelectCakes;
