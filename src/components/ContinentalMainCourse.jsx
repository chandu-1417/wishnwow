import React from 'react';

// Continental Main Course Images
import img1 from '../assets/ContinentalMainCourse/americancheeseburger.jpeg';
import img2 from '../assets/ContinentalMainCourse/cheesencornpizza.jpg';
import img3 from '../assets/ContinentalMainCourse/chickenkeemasandwich.jpg';
import img4 from '../assets/ContinentalMainCourse/chickenmexicanpizza.jpeg';
import img5 from '../assets/ContinentalMainCourse/chickentandooripizza.jpg';
import img6 from '../assets/ContinentalMainCourse/chickenzingerburger.jpg';
import img7 from '../assets/ContinentalMainCourse/exveggieburger.jpg';
import img8 from '../assets/ContinentalMainCourse/friedchickenpizza.jpg';
import img9 from '../assets/ContinentalMainCourse/mexicanchickenburger.jpg';
import img10 from '../assets/ContinentalMainCourse/paneerkeemasandwich.jpg';
import img11 from '../assets/ContinentalMainCourse/paneermakhanipizza.jpg';
import img12 from '../assets/ContinentalMainCourse/paneerzingerburger.jpeg';
import img13 from '../assets/ContinentalMainCourse/pepperbbqchickenpizza.jpg';
import img14 from '../assets/ContinentalMainCourse/tandooripaneerpizza.jpeg';
import img15 from '../assets/ContinentalMainCourse/veggrillsandwich.jpg';
import img16 from '../assets/ContinentalMainCourse/nonvegicon.png';
import img17 from '../assets/ContinentalMainCourse/vegicon.png';

// Snacks Images
import img18 from '../assets/snacks/aloobarrelswrap.jpeg';
import img19 from '../assets/snacks/cheesecornnuggets.jpeg';
import img20 from '../assets/snacks/cheesecornwraps.jpeg';
import img21 from '../assets/snacks/chickenfriedmomos.jpeg';
import img22 from '../assets/snacks/chickennuggets.jpeg';
import img23 from '../assets/snacks/chickennuggetswrap.jpg';
import img24 from '../assets/snacks/chickenpopcorn.jpeg';
import img25 from '../assets/snacks/chickenpopcornplatter.jpg';
import img26 from '../assets/snacks/chickenpopcornplatter.jpg';
import img27 from '../assets/snacks/chickenwings.jpeg';
import img28 from '../assets/snacks/classicfrenchfries.jpeg';
import img29 from '../assets/snacks/paneerpopcorn.jpeg';
import img30 from '../assets/snacks/paneerpopcornplatter.jpg';
import img31 from '../assets/snacks/paneerzingerwrap.jpeg';
import img32 from '../assets/snacks/periperifrenchfries.jpeg';
import img33 from '../assets/snacks/periperipotatowedges.jpeg';
import img34 from '../assets/snacks/potatowedges.jpeg';
import img35 from '../assets/snacks/vegfriedmomos.jpeg';
import img36 from '../assets/snacks/vegsaladplatter.jpeg';

// Thickshakes Images
import img37 from '../assets/Thickshakes/chocochipsnutella.jpg';
import img38 from '../assets/Thickshakes/exoticmango.jpeg';
import img39 from '../assets/Thickshakes/gemsthickshake.jpeg';
import img40 from '../assets/Thickshakes/kitkatblast.jpg';
import img41 from '../assets/Thickshakes/kitkatoreocrumble.jpeg';
import img42 from '../assets/Thickshakes/oreocookieshake.jpg';
import img43 from '../assets/Thickshakes/strawberryfields.webp';

// Mojitos Images
import img44 from '../assets/Mojitos/bluelagoonmojito.jpeg';
import img45 from '../assets/Mojitos/greenapplemojito.jpeg';
import img46 from '../assets/Mojitos/redwinemojito.jpeg';
import img47 from '../assets/Mojitos/virginmojito.jpeg';
import img48 from '../assets/Mojitos/watermelonmojito.jpeg';

// Ice Creams Images
import img49 from '../assets/Icecreams/bingenbashspecial.png';
import img50 from '../assets/Icecreams/chocolate.jpeg';
import img51 from '../assets/Icecreams/chocolatealmondfudge.jpeg';
import img52 from '../assets/Icecreams/chocolatesundae.jpeg';
import img53 from '../assets/Icecreams/englishstrawberry.jpeg';
import img54 from '../assets/Icecreams/mangodelight.jpeg';
import img55 from '../assets/Icecreams/tuttifrutti.jpeg';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Data Arrays
const continentalMainCourse = [
  { img: img1, name: 'American Cheese Burger', img1: img16 },
  { img: img2, name: 'Cheese N Corn Pizza', img1: img17 },
  { img: img3, name: 'Chicken Keema Sandwich', img1: img16 },
  { img: img4, name: 'Chicken Mexican Pizza', img1: img17 },
  { img: img5, name: 'Chicken Tandoori Pizza', img1: img16 },
  { img: img6, name: 'Chicken Zinger Burger', img1: img17 },
  { img: img7, name: 'Ex Veggie Burger', img1: img17 },
  { img: img8, name: 'Fried Chicken Pizza', img1: img16 },
  { img: img9, name: 'Mexican Chicken Burger', img1: img16 },
  { img: img10, name: 'Paneer Keema Sandwich', img1: img17 },
  { img: img11, name: 'Paneer Makhan Pizza', img1: img17 },
  { img: img12, name: 'Paneer Zinger Burger', img1: img16 },
  { img: img13, name: 'Pepper BBQ Chicken Pizza', img1: img16 },
  { img: img14, name: 'Tandoori Paneer Pizza', img1: img17 },
  { img: img15, name: 'Veggrill Sandwich', img1: img17 }
];

const snack = [
  { img: img18, name: 'Aloo barrel wrap', img1: img16 },
  { img: img19, name: 'Cheese Corn Nuggets', img1: img17 },
  { img: img20, name: 'Cheese corn wraps', img1: img17 },
  { img: img21, name: 'Chicken fried momos', img1: img16 },
  { img: img22, name: 'Chicken nuggets', img1: img17 },
  { img: img23, name: 'Chicken nugget wrap', img1: img17 },
  { img: img25, name: 'Chicken popcorn wrap', img1: img17 },
  { img: img26, name: 'Chicken popcorn platter', img1: img16 },
  { img: img27, name: 'Chicken wings', img1: img17 },
  { img: img28, name: 'Classic French Fries', img1: img17 },
  { img: img29, name: 'Paneer popcorn', img1: img16 },
  { img: img30, name: 'Paneer popcorn platter', img1: img16 },
  { img: img31, name: 'Paneer popcorn wrap', img1: img16 },
  { img: img32, name: 'Periperi French Fries', img1: img17 },
  { img: img33, name: 'Periperi Potato Wedges', img1: img17 },
  { img: img34, name: 'Potato Wedges', img1: img16 },
  { img: img35, name: 'Veg fried Momos', img1: img17 },
  { img: img36, name: 'Veg Salad Platter', img1: img17 }
];

const thickshakes = [
  { img: img37, name: 'Chocolate Chips Nutella', img1: img16 },
  { img: img38, name: 'Exotic Mango', img1: img17 },
  { img: img39, name: 'Gem Thickshake', img1: img16 },
  { img: img40, name: 'Gems Thick Shake', img1: img16 },
  { img: img41, name: 'Kitkat Blast', img1: img17 },
  { img: img42, name: 'Oreo Cookies Shake', img1: img17 },
  { img: img43, name: 'Strawberry Fields', img1: img17 }
];

const mojitos = [
  { img: img44, name: 'Blue Lagoon Mojito', img1: img16 },
  { img: img45, name: 'Green Apple Mojito', img1: img16 },
  { img: img46, name: 'Red Wine Mojito', img1: img17 },
  { img: img47, name: 'Virgin Mojito', img1: img17 },
  { img: img48, name: 'Watermelon Mojito', img1: img16 }
];

const iceCreams = [
  { img: img49, name: 'Bingebash Special', img1: img16 },
  { img: img50, name: 'Chocolate', img1: img17 },
  { img: img51, name: 'Chocolate Almond Fudge', img1: img16 },
  { img: img52, name: 'Chocolate Sundae', img1: img17 },
  { img: img53, name: 'English Strawberry', img1: img16 },
  { img: img54, name: 'Mango Delight', img1: img16 },
  { img: img55, name: 'Tutti Frutti', img1: img17 }
];

const ContinentalMainCourse = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Title */}
      <Link to="/">
          <button className="mb-4 flex items-center gap-1">
            <MdKeyboardBackspace />
            Back
          </button>
        </Link>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900">Sample Food Menu</h1>
      </div>
                 
      {/* Continental Main Course */}
      <section className="mb-12 z-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Continental Main Course</h2>
        <div className="grid -z-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {continentalMainCourse.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <img src={item.img1} className="mt-2 w-6 h-6" alt="Veg/Non-veg icon" />
            </div>
          ))}
        </div>
      </section>

      {/* Snack Time */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Snack Time</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {snack.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <img src={item.img1} className="mt-2 w-6 h-6" alt="Veg/Non-veg icon" />
            </div>
          ))}
        </div>
      </section>

      {/* Thickshakes */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Thickshakes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {thickshakes.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <img src={item.img1} className="mt-2 w-6 h-6" alt="Veg/Non-veg icon" />
            </div>
          ))}
        </div>
      </section>

      {/* Mojitos */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Mojitos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mojitos.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <img src={item.img1} className="mt-2 w-6 h-6" alt="Veg/Non-veg icon" />
            </div>
          ))}
        </div>
      </section>

      {/* Ice Creams */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Ice Creams</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {iceCreams.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <img src={item.img1} className="mt-2 w-6 h-6" alt="Veg/Non-veg icon" />
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <p className="text-xs sm:text-sm md:text-base text-red-600 italic text-center mt-8">
        NOTE: Above images are for demonstration purposes only.
      </p>
    </div>
  );
};

export default ContinentalMainCourse;