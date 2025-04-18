import React, { useState, useEffect } from "react";
import img1 from "../assets/imgs/theater1.jpg";
import img2 from "../assets/imgs/theater2.jpg";
import img3 from "../assets/imgs/theater3.jpg";
import img4 from "../assets/imgs/theater4.jpg";
import img5 from '../assets/imgs/cake.png'
import img6 from '../assets/imgs/confetti.png'
import img7 from '../assets/imgs/diamond-ring.png'
import img8 from '../assets/imgs/carnival2.jpg'
import img9 from '../assets/imgs/stellar1.jpg'
import img10 from '../assets/imgs/pizza.jpg'
import img11 from '../assets/imgs/ott_icons.jpg'
import img12 from '../assets/imgs/cake.jpg'
import img13 from '../assets/imgs/bouquet.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [imgschange, setImageChange] = useState(0);
  const [imgtransition, setImgTransition] = useState(1);
  const imgs = [img1, img2, img3, img4];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageChange((prev) => (prev + 1) % imgs.length);
      setImgTransition(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const transitionTimer = setInterval(() => {
      setImgTransition((prev) => (prev >= 1.5 ? 1 : prev + 0.01));
    }, 100);

    return () => clearInterval(transitionTimer);
  }, [imgschange]);

  const cards = [{
    img: img5,
    title: "Birthday Party",
    desc: 'Celebrate your birthday in style with our private theatre experience. Enjoy watching your favorite movies or shows.'
  },
  {
    img: img6,
    title: "Anniversary",
    desc: 'Mark your milestone anniversary with a romantic and intimate private theatre celebration.'
  },
  {
    img: img7,
    title: "Party & Events",
    desc: `Whether it's a reunion, farewell, or any other social gathering, our private theatres provide a unique and exclusive venue.`
  }];

  const thingstonote = [
    {
      img: img10,
      title: "Food & Bevarages",
      desc: 'Enjoy delicious in-theatre dining options at affordable prices!',
      link: 'View more ',
      arrow: <FaLongArrowAltRight />,
      nextpage: 'continentalMainCourse'
    },
    {
      img: img11,
      title: "Screening",
      desc: 'Bring your own OTT accounts and relive the theatre magic!'
    }, 
    {
      img: img12,
      title: 'Cakes',
      desc: 'Choose the perfect cake for your celebration from our selection.',
      link: 'View more',
      arrow: <FaLongArrowAltRight />,
      nextpage: 'decorAddons'
    },
    {
      img: img13,
      title: 'Bouquets',
      desc: 'Add a beautiful rose bouquet to enhance your celebration.',
      link: 'View more',
      arrow: <FaLongArrowAltRight />,
      nextpage: 'decorAddons'
    }
  ]

  return (
    <div className="overflow-x-hidden ">
      {/* Hero Section */}
      <div className="relative h-screen md:h-[120vh] bg-white">
        <div className="h-[85vh] overflow-hidden w-full flex flex-col items-center">
          <img
            src={imgs[imgschange]}
            alt="Theater"
            style={{
              transform: `scale(${imgtransition})`,
              transition: "transform 1s ease-in-out",
            }}
            className="w-full h-full object-cover"
          />
          <div className="bg-black opacity-[60%] h-[85vh] w-full absolute top-0"></div>
        </div>

        <div className="absolute top-10 md:top-20 left-4 md:left-[130px] w-[90%] md:w-auto">
          <div className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] z-10 leading-normal md:leading-snug">
            Let's Celebrate Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa60eb] to-[#9a5faf] drop-shadow-lg shadow-white">
              Birth day
            </span>
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
            <br /> Party With Us
          </div>

          <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-3 md:mt-5 w-full md:w-[65vw] max-w-[700px]">
            Welcome to Binge 'n Bash, your premier destination for an
            extraordinary private theatre and event celebration experience. We
            specialize in providing exclusive private theatres equipped with Dolby
            Atmos compliant sound systems and enhanced 4K video projection.
          </div>

          <div className="mt-8 md:mt-[10vh] lg:mt-10 flex flex-col items-center sm:flex-row gap-4 sm:gap-8 md:gap-20">
            <Link to="/book-now">
              <button className="sm:mt-0 rounded-lg px-8 py-5 mt-[12vh] sm:px-6 sm:py-3 cursor-pointer text-gray-200 font-medium text-xl sm:text-lg md:text-xl bg-gradient-to-r from-[#a330f1] to-[#ce25fc] tracking-wider hover:from-[#e59bfa] hover:to-[#db70f9]">
                BOOK NOW
              </button>
            </Link>
            <a
              href=""
              className="text-gray-200 tracking-wide text-base sm:text-lg md:text-xl uppercase font-medium group"
              target=""
              rel="noreferrer"
            >
              Check samples
            </a>
          </div>
        </div>

        <Link to="/book-now">
          <div className="flex  absolute min-h-[20vh] top-[70%] md:top-[60%] sm:top-[65%] md:w-full md:min-h-[25vh] justify-center flex-wrap gap-4 sm:gap-[5vw] p-4 sm:p-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex w-[80vw] gap-[2vw] py-4 sm:w-[45%] md:w-[24vw] max-w-[400px] px-8 md:px-4 md:py-8 sm:px-[40px] bg-white rounded-md scale-100 hover:scale-95 transition-all duration-500 hover:bg-violet-600 min-h-[25vh] relative justify-center items-center  shadow-lg cursor-pointer group transform"
              >
                {/* <img src={item.img} className={`w-[30px] h-[30px] absolute  top-17 md:${index == 1 ? 'top-[18vh]':'top-[25vh]'} left-4 sm:-mt-[80px]`} alt={item.title} /> */}
                <img
                  src={item.img}
                  className={`w-[30px] h-[30px] absolute top-16 md:top-30 md:${index == 1 ? 'top-[20vh]' : 'top-[25vh]'} left-4 sm:-mt-[80px]`}
                  alt={item.title}
                />
                <div className="ml-[10vw] md:ml-[3vw]">
                  <h3 className={`text-lg sm:text-xl text-fuchsia-600 font-bold tracking-wide group-hover:text-gray-100`}>{item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 group-hover:text-gray-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>

      {/* Branches Section */}
      <div className="text-gray-600 mt-[52vh] md:mt-[0vh] py-[10px] bg-gradient-to-l from-[#e3c0ff] to-white">
        <div className="text-2xl sm:text-3xl md:text-4xl mt-[5vh] font-medium md:mt-8 flex justify-center gap-2 mb-6 md:mb-10">
          Our <span className="text-[#5A0C97]">Branches</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-[10vw] mx-4 sm:mx-8 md:mx-20 flex-wrap">
          <div className="w-full h-[30vh]  px-[10vw]  md:h-[30vh] sm:w-[90%] md:w-[32rem] flex flex-col items-center gap-2 mb-6 sm:mb-9 bg-white shadow-lg py-4  sm:px-6 md:px-8 rounded-lg">
            <div className="text-2xl  tracking-wide md:tracking-normal  sm:text-2xl text-[#5A0C97] font-medium">Hitec City</div>
            <div className="mx-2 leading-[6vw] md:leading-normal text-[4vw]  tracking-wide md:mx-0 sm:text-base text-center">
              Binge 'n Bash - Hitec City, 4th Floor, Meta Towers, Street#5, in front of Treeinn Hytechs hotel, Patrika Nagar, HITEC City, Hyderabad, Telangana, 500081
            </div>
            <a href="https://goo.gl/maps/diwrRqnWQBRCZYVe6" target="_blank" rel="noreferrer">
              <div className="flex items-center gap-2 mt-2 text-[#540C97] text-sm sm:text-base">
                <img src="https://bnbtplstorageaccount.blob.core.windows.net/googleicons/icons8-google-maps 1.png" className="w-[20px] h-[20px]" alt="Google Maps" />
                <span>See on map</span>
              </div>
            </a>
          </div>
          <div className="w-full h-[30vh]  px-[10vw]  md:h-[30vh] sm:w-[90%] md:w-[32rem] flex flex-col items-center gap-2 mb-6 sm:mb-9 bg-white shadow-lg py-4  sm:px-6 md:px-8 rounded-lg">

            <div className="text-2xl  tracking-wide md:tracking-normal  sm:text-2xl text-[#5A0C97] font-medium">Miyapur</div>
            <div className="mx-2 leading-[6vw] md:leading-normal text-[4vw]  tracking-wide md:mx-0 sm:text-base text-center">
              Binge 'n Bash - Miyapur, 4th floor, Miyapur X Road, Mumbai Hwy, above Reliance Trends, opposite KS bakers, Indira Nagar Colony, Miyapur, Hyderabad, Telangana 500049
            </div>
            <a href="https://maps.app.goo.gl/x9UsjsTHEuHiR1fn7" target="_blank" rel="noreferrer">
              <div className="flex items-center gap-2 mt-2 text-[#540C97] text-sm sm:text-base">
                <img src="https://bnbtplstorageaccount.blob.core.windows.net/googleicons/icons8-google-maps 1.png" className="w-[20px] h-[20px]" alt="Google Maps" />
                <span>See on map</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[70vh] md:h-[60vh] relative lg:flex-row p-6 sm:p-12">
        <div className="w-full  lg:w-[70vw] text-center lg:px-10 mb-6 font-normal text-xl sm:text-2xl lg:text-[2.3rem] flex flex-col items-center tracking-wide lg:basis-1/2 mt-4 lg:mt-0">
          <div className="font-medium text-[#474747]">
            Dive into the richness of<span className="text-[#5a0c97] font-semibold"> Dolby Atmos </span>compliant sound systems and enhanced
            <span className="text-[#5a0c97] ml-[10px] font-semibold">4k Video</span>
          </div>
          <div className=" absolute top-[70%] md:relative text-lg lg:text-3xl mt-5 lg:mt-10 tracking-wider font-medium  md:block text-gray-900">
            Private Theaters in <span className="text-[#5a0c97] font-semibold">Hyderabad</span>
          </div>
          <div className="absolute top-[78%] md:top-[50%] ">
            <Link to={'/book-now'}>
              <button className="rounded-[2rem] md:w-[12vw] bg-[#5a0c97] px-15 py-5 md:px-6 md:py-3 sm:px-7 sm:py-2 text-white tracking-widest text-base sm:text-lg font-bold hover:bg-inherit border-2 hover:border-gray-400 hover:text-[#5a0c97] mt-5 hover:font-bold  ">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[30vw] h-[30vh] md:h-[40vh] rounded-xl lg:ml-[10vw] overflow-hidden">
          <img src={img8} className="w-full h-full object-cover" alt="Theater" />
        </div>
      </div>

      <div className="flex flex-col-reverse relative h-[50vh] pb-10 lg:flex-row gap-4 sm:gap-[10vw] p-6 sm:p-12 tracking-wide bg-gradient-to-r from-[#e3c0ff] to-white">
        <div className="w-full lg:w-[30vw] h-[30vh] md:h-[40vh] rounded-2xl lg:ml-[10vw] overflow-hidden">
          <img src={img9} className="w-full h-full object-cover" alt="Theater" />
        </div>
        <div className="w-full lg:w-[70vw] text-center text-gray-700 lg:px-10 mb-6 font-normal text-xl sm:text-2xl lg:text-[2.3rem] flex flex-col items-center tracking-wide lg:basis-1/2 mt-4 lg:mt-0">
          <div className="font-medium font-Outfit">
            Celebrate togetherness with <span className="text-[#5a0c97] font-semibold"> big-screen entertainment </span> along with your
            <span className="text-[#5a0c97] ml-[10px] font-semibold"> loved ones </span>
          </div>
          {/* <div className="absolute top-[86%] md:relative"> */}
          <div className="absolute top-[86%] md:relative md:top-[00%]">
            <Link to={'./aboutus'}>
              <button className="rounded-[2rem] md:bg-[#5a0c97] px-5 py-2 sm:px-7 sm:py-2 md:text-white tracking-widest text-base sm:text-lg font-bold hover:bg-inherit md:border-2 md:hover:border-gray-400 hover:text-[#5a0c97] mt-5 hover:font-bold  ">
                Learn more
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* Things to Note Section */}
      <div className="min-h-[80vh] w-full py-8 sm:py-[80px] px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-medium text-center">
          Things to<span className="text-[#540C97]"> Note</span>
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center w-full mx-auto mt-8 sm:mt-[50px] gap-8 sm:gap-4">
          {thingstonote.map((item, index) => (
            <div key={index} className="w-full sm:w-[45%] md:w-[23%] min-w-[250px] max-w-[350px] mx-auto">
              <img src={item.img} className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover" alt={item.title} />
              <div className="w-full px-2">
                <h3 className="text-xl sm:text-2xl text-center pt-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-center leading-relaxed mt-2 sm:mt-4 tracking-wide">
                  {item.desc}
                </p>
                {item.link && (
                  <h3 className="flex items-center justify-center text-center text-base sm:text-lg font-extralight mt-2">
                    <Link to={item.nextpage}>{item.link}</Link>
                    <div className="mt-1 ml-1">{item.arrow}</div>
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;