import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import dayjs from "dayjs";
import ShareIcon from "@mui/icons-material/Share";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TvIcon from "@mui/icons-material/Tv";
import SpeakerIcon from "@mui/icons-material/Speaker";
import CakeIcon from "@mui/icons-material/Cake";
import { BookingProvider } from "../context/BookingProvider";
import { BookingContext } from "../context/BookingContext";

const TheaterCard = ({
  theater,
  globalSelectedSlot,
  onSlotSelect,
  selectedTheaterIndex,
  theaterIndex
}) => {
  const [availableSlots, setAvailableSlots] = useState(0);

  useEffect(() => {
    const availableCount = theater.timeSlots.filter(slot => slot.available).length;
    setAvailableSlots(availableCount);
  }, [theater.timeSlots]);

  const handleSlotSelect = (slot) => {
    if (slot.available) {
      onSlotSelect(slot.time, theater.name, theaterIndex);
    }
  };

  const badgeColor = availableSlots <= 3 ? "bg-yellow-500" : "bg-green-500";

  return (
    <div className="flex flex-col mb-6 md:mb-12 py-3 bg-[#ffffff] rounded-3xl gap-2 md:w-[20rem] lg:w-[22.5rem] shadow-lg overflow-hidden relative">
      {/* Single Image */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-[92%] mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="w-full h-[240px]">
              <img
                src={theater.image}
                alt="Theater Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Gallery Button */}
        <div className="absolute z-20 top-[13.5rem] right-[0.9rem] text-xs rounded-l-xl px-2 py-1 bg-[#ceb1eef6] font-medium cursor-pointer">
          Gallery &gt;
        </div>

        {/* Share Button */}
        <div className="absolute z-20 top-5 right-6 rounded-full bg-gray-50 cursor-pointer">
          <IconButton aria-label="share" size="small">
            <ShareIcon className="text-[#5A0C97]" />
          </IconButton>
        </div>

        {/* YouTube Button */}
        <div className="absolute z-20 top-[13.5rem] left-6 rounded-lg bg-gray-50 cursor-pointer px-1 flex gap-1">
          <YouTubeIcon className="text-red-600" />
          <div className="leading-none text-[0.6rem] py-1 text-gray-900 font-medium">
            Experience <br /> Theater
          </div>
        </div>

        {/* Theater Title */}
        <div className="flex justify-between items-center text-sm px-5 w-full mt-3">
          <div className="text-xl md:text-2xl leading-9 text-[#5A0C97] font-[700]">
            {theater.name}
          </div>
          <span className={`text-gray-50 flex items-center gap-1 cursor-pointer ${badgeColor} px-2 py-0.5 rounded-3xl text-center`}>
            {availableSlots} slots available
          </span>
        </div>
      </div>

      {/* Theater Details */}
      <section className="flex flex-col justify-start items-start px-5 md:px-6 gap-2">
        <div>
          <span className="text-gray-800 text-lg text-left font-medium">
            {theater.price}
          </span>
          <span className="text-[0.75rem] text-gray-700">
            (including taxes)
          </span>
        </div>

        <div className="flex gap-2 text-[0.78rem] text-[#5A0C97]">
          <div className="px-3 py-1 bg-[#5b0c9727] rounded-2xl">
            Max {theater.maxPeople} People
          </div>
          <div className="px-3 py-1 bg-[#5b0c9727] rounded-2xl">
            Decoration : <span>₹{theater.decorationPrice}</span>
          </div>
        </div>

        <div className="flex gap-1 text-gray-700">
          <PeopleAltIcon className="text-[#5A0C97]" fontSize="small" />
          <div className="text-[0.82rem]">
            ₹400 per extra person
          </div>
        </div>

        <div className="flex gap-2 text-[0.82rem] text-gray-700">
          <div className="flex gap-1 items-center">
            <TvIcon className="text-[#5A0C97]" fontSize="small" />
            120 inch 4k screen
          </div>
          <div className="flex gap-1 items-center">
            <SpeakerIcon className="text-[#5A0C97]" fontSize="small" />
            <span>1000W Dolby atmos</span>
          </div>
        </div>

        <div className="flex gap-1 text-gray-700">
          <CakeIcon className="text-[#5A0C97]" fontSize="small" />
          <div className="text-[0.82rem]">
            Add Cakes and Photography in the next step
          </div>
        </div>

        <div className="flex gap-1 text-gray-700 items-start">
          <img
            src="https://bnbtplstorageaccount.blob.core.windows.net/googleicons/Refund-595b40b65ba036ed117d4a75%201.svg"
            alt=""
            className="w-4 mt-1"
          />
          <div className="text-[0.82rem]">
            Refund eligible if cancelled 72 hours before the slot time
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <h2 className="px-5 md:px-5 text-sm text-[#5A0C97] font-semibold">
        Choose Your Slot -
      </h2>

      <div className="flex flex-col items-center text-center gap-3 px-2 md:px-5">
        <div className="w-full flex flex-wrap justify-center items-center gap-3">
          {theater.timeSlots.map((slot, index) => {
            const isSelectedSlot = globalSelectedSlot &&
              globalSelectedSlot.time === slot.time &&
              selectedTheaterIndex === theaterIndex;

            return (
              <button
                key={index}
                className={`text-sm px-2 py-1 rounded-lg border ${!slot.available
                  ? "border-gray-300 bg-gray-300/50 line-through"
                  : isSelectedSlot
                    ? "border-[#5A0C97] bg-[#5A0C97] text-white"
                    : "border-gray-300 bg-purple-100 hover:bg-purple-200"
                  }`}
                disabled={!slot.available}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot.time}
              </button>
            );
          })}
        </div>

        {selectedTheaterIndex === theaterIndex && globalSelectedSlot && (
          <div className="text-sm font-medium text-[#5A0C97] p-2 bg-purple-100 rounded-lg">
            Selected slot: {globalSelectedSlot.time}
          </div>
        )}

        <div className="text-sm font-medium text-gray-600">
          (Just Pay ₹750 Now)
        </div>
      </div>
    </div>
  );
};

const SelectSlot = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTheaterIndex, setSelectedTheaterIndex] = useState(null);
  const { updateBooking } = useContext(BookingContext);

  const theaters = [
    {
      name: "Paradise Theatre",
      image: "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/paradise3v1.jpg",
      timeSlots: [
        { time: "10:30 AM - 12:30 PM", available: false },
        { time: "1:00 PM - 3:00 PM", available: true },
        { time: "3:30 PM - 5:30 PM", available: true },
        { time: "6:00 PM - 8:00 PM", available: false },
        { time: "8:30 PM - 10:30 PM", available: true },
        { time: "11:00 PM - 1:00 AM", available: false },
      ],
      price: "₹2999 for 4 people",
      baseprice: 2999,
      maxPeople: 4,
      decorationPrice: 0
    },
    {
      name: "Platinum Theatre",
      image: "https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v3majestic4.jpg",
      timeSlots: [
        { time: "10:30 AM - 12:30 PM", available: false },
        { time: "1:00 PM - 3:00 PM", available: true },
        { time: "3:30 PM - 5:30 PM", available: true },
        { time: "6:00 PM - 8:00 PM", available: false },
        { time: "8:30 PM - 10:30 PM", available: true },
        { time: "11:00 PM - 1:00 AM", available: true },
      ],
      price: "₹3599 for 6 people",
      baseprice: 3599,
      maxPeople: 6,
      decorationPrice: 500
    }
  ];

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    console.log("Selected Date:", newValue.format("YYYY-MM-DD"));
  };

  const handleSlotSelect = (time, theaterName, theaterIndex) => {
    setSelectedSlot({ time, theaterName });
    setSelectedTheaterIndex(theaterIndex);
  };

  const disablePastDates = (date) => {
    return date.isBefore(dayjs(), "day");
  };

  const handleBack = () => {
    setSelectedDate(dayjs());
    setSelectedSlot(null);
    setSelectedTheaterIndex(null);
  };

  const handleProceed = () => {
    if (selectedSlot) {
      console.log("Proceeding with:", selectedSlot);
      console.log("Selected theater:", theaters[selectedTheaterIndex].name);
      console.log("Selected date:", selectedDate.format("YYYY-MM-DD"));

      updateBooking("basePrice", theaters[selectedTheaterIndex].baseprice);
      updateBooking("theaterName", theaters[selectedTheaterIndex].name);
      updateBooking("showDate", selectedDate.format("YYYY-MM-DD"));
      updateBooking("showTime", selectedSlot.time);
      // Add your proceed logic here
      alert(`Booking: ${theaters[selectedTheaterIndex].name} on ${selectedDate.format("YYYY-MM-DD")} at ${selectedSlot.time}`);
    }

    localStorage.setItem("selectedDate", selectedDate.format("DD-MM-YYYY"));
    localStorage.setItem("selectedSlot", JSON.stringify(selectedSlot));
    // localStorage.setItem("paymentDetails", JSON.stringify({baseprice: theaters[selectedTheaterIndex].baseprice, decorationPrice: theaters[selectedTheaterIndex].decorationPrice}));
  };

  return (
    <div>
      <div className="w-full flex flex-col py-[1.5rem] items-center bg-gradient-to-b from-[#f05f57] from-[0%] to-[#360940] to-[100%]">
        <Link to="/book-now" className="w-full flex items-center">
          <button className="mb-2 flex items-center gap-1 text-white mt-5 mr-auto ml-2 md:ml-10"
          onClick={() => handleBack()}>
            <MdKeyboardBackspace />
            Back
          </button>
        </Link>
        <div className="text-xl lg:text-3xl text-gray-100 font-medium">
          Choose your theater
        </div>
        <div className="bg-[#ebeaea60] mt-5 flex flex-col items-center rounded-2xl pt-5 w-[94%] md:w-[90%] shadow-md px-3 pb-6">
          <div className="mb-5 py-3 px-5 bg-[#ffffff76] rounded-lg">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check Slot Availability"
                value={selectedDate}
                onChange={handleDateChange}
                shouldDisableDate={disablePastDates}
                minDate={dayjs()}
                slots={{
                  textField: (params) => (
                    <TextField
                      {...params}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <CalendarMonthIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )
                }}
              />
            </LocalizationProvider>

            <div className="mt-2 text-sm text-gray-700">
              Selected Date: {selectedDate.format("MMMM D, YYYY")}
            </div>

            <div className="flex gap-1 items-center text-gray-700 mt-2">
              <FastfoodIcon className="text-[#5A0C97]" />
              <span className="text-xs md:text-sm">
                Food and Beverages can be ordered at theater
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-12 w-[100%]">
            {theaters.map((theater, index) => (
              <TheaterCard
                key={index}
                theater={theater}
                globalSelectedSlot={selectedSlot}
                onSlotSelect={handleSlotSelect}
                selectedTheaterIndex={selectedTheaterIndex}
                theaterIndex={index}
              />
            ))}
          </div>
          <Link to="/booking-details">
            {selectedSlot && (
              <button
                onClick={handleProceed}
                className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] text-xl drop-shadow-md mt-6"
              >
                Proceed with {theaters[selectedTheaterIndex].name} at {selectedSlot.time}
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectSlot;