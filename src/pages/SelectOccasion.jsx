import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import birthdayImg from '../assets/Occasions/birthday.png';
import babyShowerImg from '../assets/Occasions/babyshower.png'
import anniversaryImg from '../assets/Occasions/anniversary.png';
import brideToBeImg from '../assets/Occasions/bridetobe.png';
import casualDateImg from '../assets/Occasions/casualdate.png'
import congratulationsImg from '../assets/Occasions/congratulations.png'
import farewellImg from '../assets/Occasions/farewell.png';
import groomToBeImg from '../assets/Occasions/groomtobe.png';
import loveProposalImg from '../assets/Occasions/loveproposal.png';
import momToBeImg from '../assets/Occasions/momtobe.png';
import weddingProposalImg from '../assets/Occasions/weddingproposal.png';
import { BookingSummary } from '../components/BookingSummary';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import { BookingContext } from '../context/BookingContext';


const SelectOccasion = () => {
    const [personName, setPersonName] = React.useState(() => {
        const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {};
        return bookingDetails.personName || ""; // Initialize from localStorage or default to an empty string
    });

    const navigate = useNavigate();

    const { updateBooking, selectedOccasionIndex } = useContext(BookingContext);

    const selectOccasion = [
        { img: birthdayImg, title: "Birthday", label: "Nick Name of the Birthday Person" },
        { img: babyShowerImg, title: "Baby Shower", label: "Baby's Nick Name" },
        { img: anniversaryImg, title: "Anniversary", label: "Name of the Couple" },
        { img: brideToBeImg, title: "Bride To Be", label: "Name of the Bride" },
        { img: casualDateImg, title: "Casual Date", label: "Name of the Couple" },
        { img: congratulationsImg, title: "Congratulations", label: "Name of the Person" },
        { img: farewellImg, title: "Farewell", label: "Name of the Person" },
        { img: groomToBeImg, title: "Groom To Be", label: "Name of the Groom" },
        { img: loveProposalImg, title: "Love Proposal", label: "Name of the Person" },
        { img: momToBeImg, title: "Mom To Be", label: "Mom to be's Nick Name" },
        { img: weddingProposalImg, title: "Wedding Proposal", label: "Name of the Couple" },
    ]

    const handleOccasion = (occasion, index) => {

        // setSelectedOccasion(index);
        updateBooking("selectedOccasionIndex", index);
    };



    const handleNext = () => {
        if (selectedOccasionIndex === null) {
            toast.warn("Please select an occasion before proceeding.", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
        else if (personName.length === 0) {
            toast.warn("Please fill the name to continue", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });

        }
        else {
            const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {};
            bookingDetails.occasion = selectOccasion[selectedOccasionIndex].title;
            bookingDetails.personName = personName;
            localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

            alert("Selected Occasion: " + selectOccasion[selectedOccasionIndex].title + "\n" + "Name: " + personName);
            navigate("/select-cakes")
        }

    }


    return (
        <div>
            <div className='pt-5 pb-5 md:pb-10 px-5 md:px-10 xl:px-20 bg-gray-100'>
                <Link to="/booking-details">
                    <button className="mb-4 flex items-center gap-1" onClick={() =>updateBooking("selectedOccasionIndex", null)}>
                        <MdKeyboardBackspace />
                        Back
                    </button>
                </Link>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                    <div className="md:basis-2/3 bg-white shadow-md p-5 rounded-md h-fit">
                        <div>
                            <div className="text-lg md:text-xl font-medium mb-5">Select Occasion</div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 mt-5">
                                {selectOccasion.map((occasion, index) => {
                                    return (
                                        <a href="#person-name" key={index}>
                                            <div className={`col-span-2 md:col-span-1 text-gray-700  flex flex-col items-center rounded-2xl p-3 lg:p-4 transition-all duration-200 border border-transparent cursor-pointer hover:border hover:border-violet-200 ${selectedOccasionIndex === index ? 'bg-violet-200' : 'bg-white'}`}
                                                onClick={() => handleOccasion(occasion, index)}>
                                                <img src={occasion.img} alt={occasion.title} className="w-2/3 md:w-32 object-cover " />
                                                <div class="text-center mt-3 font-medium">{occasion.title}</div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                            <div class="mt-2 md:mt-4 text-yellow-700 text-sm md:text-base p-2 bg-yellow-50 rounded-md flex gap-1 items-start md:items-center border border-yellow-100">
                                <svg
                                    className="w-5 h-5 text-yellow-700"
                                    fill='currentColor'
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="InfoOutlinedIcon">
                                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                </svg>Decorations are not customizable. Please select predefined add-ons in the next windows.
                            </div>
                            {selectedOccasionIndex !== null && <div className='mt-5' id='person-name'>
                                <TextField
                                    label={`${selectOccasion[selectedOccasionIndex]?.label}`}
                                    required
                                    type="text"
                                    autoComplete="off"
                                    className='sm:w-[50%] w-[80%]'
                                    onChange={(e) => setPersonName(e.target.value)}
                                    value={personName}
                                />
                            </div>}
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

export default SelectOccasion;
