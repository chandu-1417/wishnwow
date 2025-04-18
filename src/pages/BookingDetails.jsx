import React, { useEffect, useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BookingSummary } from '../components/BookingSummary';
import { BookingContext } from '../context/BookingContext';
import { BookingProvider } from '../context/BookingProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookingDetails = () => {
    const [bookingName, setBookingName] = useState(localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")).bookingName : "");
    const [numberOfPersons, setNumberOfPersons] = useState(localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")).numberOfPersons : 1);
    const [whatsAppNumber, setWhatsAppNumber] = useState(localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")).whatsAppNumber : "" );
    const [emailId, setEmailId] = useState(localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")).emailId : "");
    const [decoration, setDecoration] = useState(localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")).decoration : "Yes");
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);

    const nameRegex = /^(?![\s.]+$)[a-zA-Z\p{L}\s.'-]{4,50}$/u;;


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phoneRegex = /^(?:\+?91|0)?[ -]?[6-9]\d{9}$/;

    const navigate = useNavigate();

    

    useEffect(() => {
        setIsValidName(nameRegex.test(bookingName));
        setIsValidEmail(emailRegex.test(emailId));
        setIsValidPhone(phoneRegex.test(whatsAppNumber));
    }, [bookingName, emailId, whatsAppNumber]);

    const isValidForm = isValidName && isValidEmail && isValidPhone && numberOfPersons > 0 && decoration !== "";

    const handleProceed = () => {

        if (!isValidForm) {
            toast.warn("Please fill out the form correctly before proceeding.", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } else {
            // Form is valid – proceed with your action (e.g., navigate to the next step)
            console.log("Form is valid. Proceeding with booking.");
            navigate("/select-occasion");
        }
    };

    localStorage.setItem("bookingDetails", JSON.stringify({
        bookingName,
        numberOfPersons,
        whatsAppNumber,
        emailId,
        decoration,
    }));


    return (
        <div>
            <div className='pt-5 pb-5 md:pb-10 px-5 md:px-10 xl:px-20 bg-gray-100'>
                <Link to="/select-slot">
                    <button className="mb-4 flex items-center gap-1" onClick={() => {
                        setBookingName("");
                        setNumberOfPersons(1);
                        setWhatsAppNumber("");
                        setEmailId("");
                        setDecoration("Yes");
                    }}>
                        <MdKeyboardBackspace />
                        Back
                    </button>
                </Link>
                <div className='p-4 bg-white rounded-md shadow-md md:w-fit text-[#50068a]'>
                    <h2 className="text-xl font-bold mb-2 ml-1">Overview</h2>
                    <div className='flex flex-col md:flex-row space-y-1 md:gap-8 md:items-center text-sm md:text-base'>
                        <div className='flex items-center space-x-2'>
                            <svg
                                className='h-6 w-6 text-[#50068a]'
                                fill="currentColor"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="LocationOnIcon">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                            </svg>
                            <span>{JSON.parse(localStorage.getItem("selectedSlot")).theaterName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className='h-6 w-6 text-[#50068a]'
                                fill="currentColor"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CalendarMonthIcon">
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
                            </svg>
                            <span>{localStorage.getItem("selectedDate")}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className='h-6 w-6 text-[#50068a]'
                                fill="currentColor"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="AccessTimeIcon">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                            </svg>
                            <span>{JSON.parse(localStorage.getItem("selectedSlot")).time}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                    <div className="md:basis-2/3 bg-white shadow-md p-5 rounded-md h-fit">
                        <div className="text-lg md:text-xl font-medium mb-5">Booking Details</div>

                        <div className="grid grid-cols-2 gap-5 md:gap-y-8">
                            {/* Booking Name */}
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-sm font-medium mb-1">
                                    Booking Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nameOfPerson"
                                    required
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder='Enter your name'
                                    onChange={(e) => setBookingName(e.target.value)}
                                    value={bookingName}
                                />
                                {!isValidName && bookingName.length >= 1 && <span className="text-red-500 text-xs">* Enter a valid name</span>}
                            </div>

                            {/* Number of Persons */}
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-sm font-medium mb-1">
                                    Number of Persons <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="numberOfPersons"
                                    required
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    onChange={(e) => setNumberOfPersons(e.target.value)}
                                    value={numberOfPersons}
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>

                            {/* WhatsApp Number */}
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-sm font-medium mb-1">
                                    WhatsApp Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="whatsAppNumber"
                                    required
                                    maxLength="10"
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder='Enter your WhatsApp number'
                                    onChange={(e) => setWhatsAppNumber(e.target.value)}
                                    value={whatsAppNumber}
                                />
                                {!isValidPhone && whatsAppNumber.length >= 1 && <span className="text-red-500 text-xs">* Enter a valid mobile number</span>}
                            </div>

                            {/* Email */}
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-sm font-medium mb-1">
                                    Email ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="emailId"
                                    required
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder='Enter your email ID'
                                    onChange={(e) => setEmailId(e.target.value)}
                                    value={emailId}
                                />
                                {!isValidEmail &&  emailId.length >= 1 && <span className="text-red-500 text-xs">* Enter a valid mail Id</span>}
                            </div>

                            {/* Decoration */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">
                                    Do you want decoration? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="decoration"
                                    required
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    onChange={(e) => setDecoration(e.target.value)}
                                    value={decoration}
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="md:basis-1/3">
                        <BookingSummary bookingName={bookingName} numberOfPersons={numberOfPersons} whatsAppNumber={whatsAppNumber} emailId={emailId} decoration={decoration} isValidForm={isValidForm} />
                        <div className="mt-3">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                onClick={() => handleProceed()}>
                                Proceed
                            </button>
                        </div>
                        <div className="mt-3">
                            <button className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                                onClick={() => {
                                    setBookingName("");
                                    setNumberOfPersons(1);
                                    setWhatsAppNumber("");
                                    setEmailId("");
                                    setDecoration("Yes");
                                }}>
                                Clear All
                            </button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails;
