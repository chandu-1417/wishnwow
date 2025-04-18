// Navbar.jsx
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import logo from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { updateBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const resetBookingState = () => {
    updateBooking("selectedOccasionIndex", null);
    updateBooking("selectedAddonIndex", []);
    updateBooking("selectedCakeIndex", null);
    updateBooking("selectedCakeQuantity", 1);
    updateBooking("discountAmount", 0);
    updateBooking("selectedSlot", null);
    updateBooking("basePrice", 0);
    updateBooking("cake", 0);
    updateBooking("addons", 0);
    updateBooking("theaterName", "");
    updateBooking("showDate", "");
    updateBooking("showTime", "");
    updateBooking("personName", "");
    updateBooking("convenienceFee",50);
    
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {};
    bookingDetails.personName = "";
    bookingDetails.bookingName = "";
    bookingDetails.numberOfPersons = 1;
    bookingDetails.whatsAppNumber = "";
    bookingDetails.emailId = "";
    bookingDetails.decoration = "Yes";
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  };

  const handleNavigation = (path) => {
    resetBookingState();
    setSidebarOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="h-[7.5vh] text-[3vh] flex justify-between items-center px-4 gap-4 bg-white">
          <Link to="/">
            <p className="text-black font-bold pl-1" onClick={()=>resetBookingState()}>
              Wish 'n <span className="text-[#5a0c97] font-bold">Wow</span>
            </p>
          </Link>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookSquare className="text-[#5a0c97]" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-[#5a0c97]" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="text-[#5a0c97]" />
            </a>
            <a href="tel:+911234567890" aria-label="Call us">
              <IoCall className="text-[#5a0c97]" />
            </a>
          </div>
        </div>

        <div className="bg-[#5a0c97] flex h-[7.5vh] justify-between items-center px-5 pr-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="focus:outline-none"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? (
              <RxCross2 className="text-4xl text-white" />
            ) : (
              <IoReorderThreeOutline className="text-4xl text-white" />
            )}
          </button>
        </div>

        {sidebarOpen && (
          <div className="bg-[#5a0c97] w-full animate-slideDown">
            {/* Individual mobile navigation items */}
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">HOME</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/book-now")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">BOOK NOW</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/decorAddons")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">ADD-ONS</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/about-us")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">ABOUT US</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/gallery")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">GALLERY</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/refund-policy")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">REFUND POLICY</h1>
            </div>
            <div className="flex flex-row text-white text-[1.8vh] justify-center items-center" onClick={() => handleNavigation("/my-bookings")}>
              <h1 className="border-t-[0.01vh] border-black py-3 w-[90vw]">MY BOOKINGS</h1>
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="w-full h-[23vh] hidden sm:flex bg-white shadow-sm">
        <div className="h-full w-56 min-w-[160px] flex items-center pl-4">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-[20vh] pl-[5vh] w-auto object-contain max-h-full"
              onClick={()=>resetBookingState()}
            />
          </Link>
        </div>

        <div className="w-full h-full flex flex-col flex-1">
          <div className="bg-[#5a0c97] h-[10vh] w-full rounded-bl-3xl flex items-center justify-center gap-64">
            <div className="flex items-center space-x-10">
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-[#d09cf8] text-lg" />
                <span className="text-white font-medium text-sm">
                  Hyderabad
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-[#d09cf8] text-lg" />
                <a href="mailto:wishnwow@gmail.com" className="text-white hover:text-[#d09cf8] transition-colors">
                  wishnwow@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#d09cf8] text-lg" />
                <a href="https://wa.me/+911234567890" className="text-white font-medium text-sm hover:text-[#d09cf8] transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:opacity-75 transition-opacity">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:opacity-75 transition-opacity">
                <FaFacebookSquare className="text-lg" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-white hover:opacity-75 transition-opacity">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          <div className="h-[11vh] w-full flex items-center justify-center gap-24 px-4">
            <div className="flex items-center overflow-x-auto space-x-6 pr-2">
              {/* Individual desktop navigation items */}
              <Link to="/" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                HOME
              </Link>
              <Link to="/book-now" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                BOOK NOW
              </Link>
              <Link to="/decorAddons" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                ADD-ONS
              </Link>
              <Link to="/about-us" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                ABOUT US
              </Link>
              <Link to="/gallery" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                GALLERY
              </Link>
              <Link to="/refund-policy" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                REFUND POLICY
              </Link>
              <Link to="/my-bookings" className="text-gray-800 text-sm font-medium hover:text-[#5a0c97] whitespace-nowrap transition-colors px-1" onClick={resetBookingState}>
                MY BOOKINGS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;