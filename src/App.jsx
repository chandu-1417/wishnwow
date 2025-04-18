import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BookNow from './pages/BookNow';
import SelectSlot from "./pages/SelectSlot";
import BookingDetails from "./pages/BookingDetails";
import { BookingProvider } from "./context/BookingProvider";
import SelectOccasion from "./pages/SelectOccasion";
import SelectCakes from "./pages/SelectCakes";
import Navbar from "./pages/Navbar 1 (1)";
import SelectAddOns from "./pages/SelectAddOns";
import PaymentPage from "./pages/PaymentPage";
import Home from "./pages/Home";
import ContinentalMainCourse from "./components/ContinentalMainCourse";
import DecorAddons from "./pages/DecorAddons";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
import ScrollToTop from './components/ScrollTotop';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        {/* Replace with your logo */}
        <div className="text-2xl font-bold text-[#540C97] animate-pulse">
          Binge 'n Bash
        </div>
        <div className="relative">
          <div className="w-12 h-12 border-4 border-[#540C97] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingHidden, setLoadingHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoadingHidden(true);
      setTimeout(() => setIsLoading(false), 500); // Match CSS transition duration
    };

    // Check if content is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <BrowserRouter basename="/wishnwow">
      {isLoading && (
        <div className={`${loadingHidden ? 'opacity-0 pointer-events-none' : ''}`}>
          <LoadingScreen />
        </div>
      )}
      <ScrollToTop/>
      <BookingProvider>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continentalMainCourse" element={<ContinentalMainCourse/>} />
          <Route path="/decorAddons" element={<DecorAddons/>} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/select-slot" element={<SelectSlot />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/select-occasion" element={<SelectOccasion />} />
          <Route path="/select-cakes" element={<SelectCakes />} />
          <Route path="/select-addons" element={<SelectAddOns />} />
          <Route path="/payment-page" element={<PaymentPage/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Footer />
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;