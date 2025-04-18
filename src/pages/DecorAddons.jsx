import React from 'react'
import img1 from '../assets/decors/CandlePath.png'
import img2 from '../assets/decors/cold_fire1.webp'
import img3 from '../assets/decors/cold_fire.webp'
import img4 from '../assets/decors/fogeffect.png'
import img5 from '../assets/decors/hbdletters.jpg'
import img6 from '../assets/decors/lednumbers.jpg'
import img7 from '../assets/decors/partyprops.jpg'
import img8 from '../assets/decors/photoclippings.jpg'



// Roses
import img9 from '../assets/Roses/rosebouquet.png'
import img10 from '../assets/Roses/singleflower.jpg'


// Photography
import img11 from '../assets/Photography/photo20.jpeg'
import img12 from '../assets/Photography/photo50.jpeg'
import img13 from '../assets/Photography/photo75.jpeg'
import img14 from '../assets/Photography/photo100.jpeg'
import img15 from '../assets/Photography/photounlimited.jpeg'

// Cakes
import img16 from '../assets/Cakes/almondcrunchcake.jpeg'
import img17 from '../assets/Cakes/blackforestcake.jpg'
import img18 from '../assets/Cakes/blueberrycake.jpg'
import img19 from '../assets/Cakes/butterscotchcake.jpg'
import img20 from '../assets/Cakes/choclatecoffeecake.jpg'
import img21 from '../assets/Cakes/chocochipscake.jpg'
import img22 from '../assets/Cakes/chocolatetrufflecake.png'
import img23 from '../assets/Cakes/darkchoclatecake.jpg'
import img24 from '../assets/Cakes/dryfruitcake.jpg'
import img25 from '../assets/Cakes/kitkatchoclatecake.jpg'
import img26 from '../assets/Cakes/mangocrushcake.png'
import img27 from '../assets/Cakes/pineapplecake.jpg'
import img28 from '../assets/Cakes/rumchoclatecake.jpg'
import img29 from '../assets/Cakes/strawberrycake.jpg'
import img30 from '../assets/Cakes/vanillacake.jpg'
import img31 from '../assets/Cakes/whiteforestcake.jpg'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'

// Cakes Array
const cake = [
  { img: img16, name: 'Almond Crunch Cake', price: '₹ 650 ' },
  { img: img17, name: 'Black Forest Cake', price: '₹ 600 ' },
  { img: img18, name: 'Blueberry Cake', price: '₹ 600 ' },
  { img: img19, name: 'Butterscotch Cake', price: '₹ 650 ' },
  { img: img20, name: 'Chocolate Coffee Cake', price: '₹ 700 ' },
  { img: img21, name: 'Chocolate Chip Cake', price: '₹ 600 ' },
  { img: img22, name: 'Chocolate Truffle Cake', price: '₹ 700 ' },
  { img: img23, name: 'Dark Chocolate Cake', price: '₹ 600 ' },
  { img: img24, name: 'Dry Fruit Cake', price: '₹ 650 ' },
  { img: img25, name: 'Kit Kat Chocolate Cake', price: '₹ 700 ' },
  { img: img26, name: 'Mango Crush Cake', price: '₹ 550 ' },
  { img: img27, name: 'Pineapple Cake', price: '₹ 550 ' },
  { img: img28, name: 'Rum Chocolate Cake', price: '₹ 700 ' },
  { img: img29, name: 'Strawberry Cake', price: '₹ 550 ' },
  { img: img30, name: 'Vanilla Cake', price: '₹ 500 ' },
  { img: img31, name: 'White Forest Cake', price: '₹ 600 ' },
]

// Photograpgy Array
const photography = [
  { img: img11, alt: 'Photography 20', price: '₹ 299' },
  { img: img12, alt: 'Photography 50', price: '₹ 499' },
  { img: img13, alt: 'Photography 75', price: '₹ 699' },
  { img: img14, alt: 'Photography 100', price: '₹ 999' },
  { img: img15, alt: 'Photography Unlimited', price: '₹ 1499' },
]


// Roses Array
const roses = [{ img: img9, name: 'Rose Bouquet', price: '₹ 349' }, { img: img10, name: 'Single Flower', price: '₹ 49' }]
// decors array
const decors = [
  { img: img1, name: 'Candle Path(Rs 300)', price: '₹ 250' },
  { img: img2, name: 'Cold Fire (2 pieces)', price: '₹ 750' },
  { img: img3, name: 'Cold Fire (4 pieces)', price: '₹ 1500' },
  { img: img4, name: 'Fog Effect', price: '₹ 499' },
  { img: img5, name: 'HBD Letters', price: '₹ 99' },
  { img: img6, name: 'Led Numbers', price: '₹ 99' },
  { img: img7, name: 'Party Props', price: '₹ 199' },
  { img: img8, name: 'Photo Clippings (16 pics)', price: '₹ 499' },
]



const DecorAddons = () => {
  return (
    <div className='container mx-auto px-4 py-8 '>
      <Link to="/">
        <button className="mb-4 flex items-center gap-1">
          <MdKeyboardBackspace />
          Back
        </button>
      </Link>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Decors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {decors.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white"
              />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-center mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* roses */}
      <div className='mt-[5vh]'>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Roses</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {
            roses.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
                  <img src={item.img} alt={item.name} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white" />
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-center mt-2">{item.price}</p>

                </div>
              )
            })
          }
        </div>
      </div>

      {/* photography */}
      <div className='mt-[5vh]'>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Photography</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {
            photography.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
                  <img src={item.img} alt={item.name} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white" />
                  {item.name && <p className="text-sm sm:text-base md:text-lg font-semibold text-center h-[4vh] md:h-[7vh]">{item.name}</p>}
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-center md:mt-2">{item.price}</p>

                </div>
              )
            })
          }
        </div>
        <div class="mt-0 px-5 lg:px-16 lg:text-lg font-medium text-red-500">NOTE : Timing of the photography is according to the availability of the photographer.</div>
      </div>

      {/* cakes */}
      <div className='mt-[5vh]'>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-violet-800">Cakes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {
            cake.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-200">
                  <img src={item.img} alt={item.name} className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-3 border-4 border-white" />
                  <p className="text-sm sm:text-base md:text-lg font-semibold text- h-[4vh] md:h-[7vh]">{item.name}</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-center mt-2">{item.price}</p>

                </div>
              )
            })
          }
        </div>
        <div class="mt-0 px-5 lg:px-16 lg:text-lg font-medium text-red-500">NOTE : Above images are for demonstration purposes only. Actual cake may look different.</div>

      </div>
    </div>
  )
}

export default DecorAddons