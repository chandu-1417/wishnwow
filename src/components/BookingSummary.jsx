import { useContext, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import { Transition } from "@headlessui/react";
import { Navigate } from "react-router-dom";




export const BookingSummary = (props) => {
  const context = useContext(BookingContext);
  
    const { total, advance, balance, basePrice, decoration, cake, addons, convenienceFee,discountAmount } = useContext(BookingContext);
    const [isOpen, setIsOpen] = useState(false);
        
    

    
  
    return (
      <div className="md:basis-1/3 h-fit bg-white shadow-md rounded-md p-4">
        <div className="flex flex-col gap-3 w-full px-4 py-3 shadow-md rounded-md mb-2 bg-white border border-gray-200">
          <div className="flex justify-between w-full font-medium">
            <div>Total</div>
            <div>₹{total}</div>
          </div>
        </div>
  
        <div className="bg-white shadow-md rounded-md border border-gray-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full px-4 py-3"
          >
            <p className="text-lg md:text-xl font-medium">Booking Summary</p>
            <svg
              className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
  
          <Transition
            show={!isOpen}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="px-4 pb-4">
              <div className="flex flex-col gap-3 w-full">
                <LineItem label="Base Price" value={basePrice} />
                <LineItem label="Decoration" value={decoration} />
                {cake!==0 && <LineItem label="Cake" value={cake} />}
                {addons!==0 && <LineItem label="Add-ons" value={addons} />}
                {discountAmount!==0 && <LineItem label="Discount" value={discountAmount} />}
                
                <div className="flex justify-between w-full">
                  <div className="font-medium flex flex-col">
                    <div>Advance amount payable</div>
                    <div className="text-xs font-normal">
                      (Including ₹{convenienceFee} convenience fee)
                    </div>
                  </div>
                  <div>- ₹{advance.toFixed(2)}</div>
                </div>
                
                <hr className="my-2 border-t" />
                
                <LineItem 
                  label={
                    <div className="flex flex-col">
                      <div>Balance Amount</div>
                      <div className="text-xs">(to be paid at venue)</div>
                    </div>
                  }
                  value={balance.toFixed(2)}
                />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    );
  };
  
  const LineItem = ({ label, value }) => (
    <>
      <div className="flex justify-between w-full">
        <div>{label}</div>
        <div>₹{value}</div>
      </div>
      <hr className="my-0.5 border-t border-gray-400" />
    </>
  );
  