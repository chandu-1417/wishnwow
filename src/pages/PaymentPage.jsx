import React, { useContext, useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BookingSummary } from '../components/BookingSummary';
import { TextField } from '@mui/material';
import { BookingContext } from '../context/BookingContext';

const PaymentPage = () => {
    const [couponCode, setCouponCode] = useState("");
    const [isApplyCoupon, setIsApplyCoupon] = useState(false);
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {};
    const addOnDetails = JSON.parse(localStorage.getItem("paymentDetails")).selectedAddonIndex || [];

    
    const selectedSlot = JSON.parse(localStorage.getItem("selectedSlot")) || {};
    const selectedDate = localStorage.getItem("selectedDate") || "";

    const {updateBooking} = useContext(BookingContext);

    const selectedInfo = [
        {
            icon: (<svg className='w-6 h-6 text-[#540C97]' fill='currentColor' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarMonthRoundedIcon"><path d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1zm2 18H5V10h14v10zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"></path></svg>),
            title: selectedDate,
        },
        {
            icon: (<svg className='w-6 h-6 text-[#540C97]' fill='currentColor' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccessTimeRoundedIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"></path></svg>),
            title: selectedSlot.time,
        },
        {
            icon: (<svg className='w-6 h-6 text-[#540C97]' fill='currentColor' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>),
            title: bookingDetails.numberOfPersons,
        },
        {
            icon: (<svg className='w-6 h-6 text-[#540C97]' fill='currentColor' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CakeIcon"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></svg>),
            title: bookingDetails.selectedCake + " *" + bookingDetails.cakeQuantity + "kg",
        },
        {
            icon: (<svg className='w-6 h-6 text-[#540C97]' fill='currentColor' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CelebrationIcon"><path d="m2 22 14-5-9-9zm12.53-9.47 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59 1.06 1.06zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zm7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0zm-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z"></path></svg>),
            title: bookingDetails.occasion,
        }
    ]

    const policies = [
        "Smoking and Consumption of Alcohol is strictly prohibited inside the Theaters.",
        "You need to bring your own OTT accounts to watch the content.",
        "Party poppers, foam and Champagne is not allowed inside the theaters, considering the sensitivity of the Theaters.",
        "Outside food is strictly prohibited, considering the sensitivity of carpets and recliners inside the Theaters.",
        "We charge full for children above or equal to 5 years and half for those who are below 5 years",
        "Right to admission is reserved by the Management."
    ];

    const handleCoupon = () => {
        if(!isApplyCoupon && couponCode === "BOOKNOW") {
            updateBooking("discountAmount", 1000);
            setIsApplyCoupon(true);
        }
        else if(isApplyCoupon) {
            updateBooking("discountAmount", 0);
            setIsApplyCoupon(false);
        }
        else{
            alert("try"+'"BOOKNOW"'+"coupon code for 1000 discount");
            setCouponCode("");
        }
    }

    return (
        <div>
            <div className='pt-5 pb-5 md:pb-10 px-5 md:px-10 xl:px-20 bg-gray-100'>
                <Link to="/select-addons">
                    <button className="mb-4 flex items-center gap-1">
                        <MdKeyboardBackspace />
                        Back
                    </button>
                </Link>
                <div className='flex flex-col md:flex-row gap-5 mt-5'>
                    <div className='md:basis-1/3'>
                        <div className='bg-white shadow-md p-5 rounded-md h-fit mb-5'>
                            <h1 className='text-2xl md:text-2xl font-medium flex justify-between text-[#540C97]'>{JSON.parse(localStorage.getItem("selectedSlot")).theaterName}, {localStorage.getItem("theater")}</h1>
                            <div className='mt-4'>
                                {
                                    selectedInfo.map((item, index) => (
                                        <div className='flex items-center gap-2 mb-2' key={index}>
                                            {item.icon}
                                            <span class="rounded-2xl bg-[#540c9716] text-[#540C97] px-6 py-1 font-medium text-md">{item.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div className='text-purple-800 text-start font-medium mt-3'>Add-Ons :</div>
                                <span className='flex gap-2 flex-wrap text-sm mt-2 justify-start'>
                                    {addOnDetails.map((addon, index) => (
                                        <span key={index} className='rounded-2xl bg-[#540c9716] text-[#540C97] px-6 py-1 font-medium'>{addon}</span>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className='bg-white shadow-md p-5 rounded-md h-fit mb-5 relative'>
                            <TextField
                                label="Discount Coupon"
                                type="text"
                                autoComplete="off"
                                className='w-[100%]'
                                onChange={(e) => setCouponCode(e.target.value)}
                                value={couponCode}
                                variant="outlined"
                            />
                            <button
                                className={`px-6 py-2 rounded-md transition-colors text-sm md:text-base absolute top-[3.7vh] right-[3.8vh]
                                ${couponCode === ""
                                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                        : 'bg-violet-800 text-white hover:bg-violet-600'}
                                `}
                                onClick={handleCoupon}
                                disabled={couponCode === "" && isApplyCoupon}
                            >
                                {isApplyCoupon ? "REMOVE" : "APPLY"}
                            </button>
                        </div>
                        <div>
                            <BookingSummary />
                        </div>
                    </div>
                    <div className='col-span-3 md:col-span-2 text-sm md:text-base bg-white shadow-md w-fit h-fit rounded-md px-4 py-3 md:p-4"'>
                        <div className="flex flex-col gap-2 items-center text-gray-800">
                            <div className="text-lg md:text-xl font-medium text-violet-800 mt-2">
                                Important Instructions
                            </div>

                            <div className="md:mx-2 text-sm md:text-base">
                                <div className="py-3 px-5 bg-red-50 text-red-600 rounded-lg text-sm md:text-base mt-2 mb-5">
                                    <span className="font-medium text-base">Refund Policy : </span>
                                    Partial advance amount (Rs 500/-) will be refundable if you cancel the slot at least 72 hours prior to your booking time.
                                </div>

                                {policies.map((policy, index) => (
                                    <div key={index} className="flex gap-2 mt-1">
                                        <div>{index + 1}.</div>
                                        <div>{policy}</div>
                                    </div>
                                ))}

                                <div className="flex gap-3 items-center mt-10">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-violet-800 rounded focus:ring-violet-800"
                                    />
                                    <span className="md:text-lg font-medium">I agree to all the above conditions.</span>
                                </div>

                                <div className="mt-5 flex flex-col gap-5 md:gap-0 md:flex-row-reverse justify-between w-[90%]">
                                    <button
                                        className="bg-violet-800 text-white px-6 py-2 rounded-md hover:bg-violet-900 transition-colors text-sm md:text-base"
                                    >
                                        Confirm & Pay Advance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PaymentPage
