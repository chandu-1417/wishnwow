import React, { useState, useEffect, useCallback } from 'react';
import { BookingContext } from './BookingContext';

export const BookingProvider = ({ children }) => {
  // Define default state with type-safe initial values
  const defaultState = {
    theaterName: "",
    showDate: "",
    showTime: "",
    basePrice: 1000,
    decoration: 0,
    cake: 0,
    addons: 0,
    convenienceFee: 50,
    advancePercentage: 0.1,
    selectedOccasionIndex: null,
    selectedAddonIndex: [],
    selectedCakeIndex: null,
    selectedCakeQuantity: 1,
    discountAmount: 0,
  };

  // Retrieve and safely parse stored data
  const getInitialState = () => {
    try {
      const storedData = localStorage.getItem('paymentDetails');
      if (!storedData) return defaultState;
      
      const parsedData = JSON.parse(storedData);
      
      return {
        ...defaultState,
        ...parsedData,
        // Ensure array types
        selectedAddonIndex: Array.isArray(parsedData.selectedAddonIndex)
          ? parsedData.selectedAddonIndex
          : [],
        // Ensure number types for financial fields
        decoration: Number(parsedData.decoration) || 0,
        cake: Number(parsedData.cake) || 0,
        addons: Number(parsedData.addons) || 0,
        discountAmount: Number(parsedData.discountAmount) || 0,
      };
    } catch (error) {
      console.error('Error parsing stored data:', error);
      return defaultState;
    }
  };

  const [bookingDetails, setBookingDetails] = useState(getInitialState);

  // Compute derived values with type safety
  const total = Number(bookingDetails.basePrice) +
                Number(bookingDetails.decoration) +
                Number(bookingDetails.cake) +
                Number(bookingDetails.addons) - Number(bookingDetails.discountAmount);

  const advance = Number(bookingDetails.convenienceFee) + 800;
  const balance = total - advance - Number(bookingDetails.discountAmount);

  // Type-safe state updater
  const updateBooking = useCallback((key, value) => {
    setBookingDetails(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Safe localStorage persistence
  useEffect(() => {
    try {
      localStorage.setItem(
        'paymentDetails', 
        JSON.stringify({
          ...bookingDetails,
          // Convert special values for storage
          selectedAddonIndex: Array.isArray(bookingDetails.selectedAddonIndex)
            ? bookingDetails.selectedAddonIndex
            : []
        })
      );
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [bookingDetails]);

  return (
    <BookingContext.Provider
      value={{
        ...bookingDetails,
        total,
        advance,
        balance,
        updateBooking,
        // Provide safe array fallback
        selectedAddonIndex: Array.isArray(bookingDetails.selectedAddonIndex)
          ? bookingDetails.selectedAddonIndex
          : []
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};