import "animate.css";
import { gsap } from "gsap";
import { IoPeople } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import Slider from "./Slider";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className=" ">
      <div className="relative h-screen ">
        {/* الخلفية الثابتة */}
        <div
          className="absolute inset-0 bg-cover bg-center  bg-fixed -z-10"
          style={{
            backgroundImage: "url('picture/1oop.png')",
          }}
        ></div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="block w-full h-[170px]"
          >
            <path
              fill="white"
              d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            />
          </svg>
        </div>

        <header className="flex justify-between h-[20vh] text-white lg:text-black ">
          {/* loGGo */}
          <div className="flex flex-row  lg:px-15 lg:py-5  animate__animated animate__fadeInTopLeft ">
            <svg
              className="w-10 lg:w-20  stroke-white lg:stroke-black"
              viewBox="-50 -40 300  400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M130.5 0.492401L113.5 3.4924L97.5 8.4924L79.5 16.4924L65.5 24.4924L50.5 36.4924L36 50.9924L24 67.4924L12.5 88.9924L7 103.492L3.5 116.492L1.5 129.992L0.5 139.492V149.992V161.992L1.5 170.492L3 179.992L5 188.992L9.5 200.992L14.5 212.992L17.5 218.992L25.5 231.492L33 241.492L43.5 252.992L55 262.992L66.5 271.492L82.5 280.992L99.5 288.492L115.5 293.492L127 295.992L138 296.992H151.5H163L171.5 295.992L184.5 293.492L197 289.992L203.5 287.492L210 284.492L218 280.492L225.5 276.492L233 271.492L240 266.492L252.5 256.492L257.5 251.492L263 245.492L269.5 236.992L276 227.992L282.5 216.992L286 208.492L290 197.992L292 191.492L294 182.492L295 175.492"
                strokeWidth="10"
              />
              <path d="M102 41.9924V198.492" strokeWidth="10" />
              <path
                d="M102 40.9924H162.5L170.5 41.9924L177.5 45.4924L185 49.9924L192 56.4924L196 61.9924L198.5 66.9924L199.5 72.9924L198.5 81.4924L195 89.4924L186.5 97.9924L177.5 103.992L164.5 108.992L159.5 110.492H141"
                strokeWidth="10"
              />
              <path
                d="M160.5 110.992L174 114.492L184 119.492L197 128.992L205 138.492L211 147.992L214.5 157.492L217.5 169.492L218.5 177.492V188.492L217.5 195.992L214.5 206.992L207 222.492L194.5 238.992L181 250.492L168.5 256.492L158 259.492L148 260.492H132.5L123.5 259.492L110.5 254.992L97 247.492L84.5 236.492L76.5 226.492L71.5 216.492L68.5 208.492L67 196.992V182.992L68.5 173.492L73 163.492L78 154.492L83.5 146.492L91.5 139.492L98.5 134.992L105.5 130.992L112.5 127.492L115.5 126.492H138.5"
                strokeWidth="10"
              />
            </svg>
            <h1
              className=" text-[30px] pt-5 lg:pt-0 lg:text-[45px]  "
              style={{ fontFamily: "Cinzel Decorative, cursive" }}
              //  style={{ fontFamily: "Playwrite IE, cursive" }}
            >
              eauty
            </h1>
          </div>

          <h1 className="text-[20px] lg:text-[40px] pr-3 lg:w-[20%] h-[10%] mt-8 hover:text-[#FFC2D1] flex flex-row gap-2 animate__animated animate__fadeInTopRight">
            <IoPeople className="  lg:pt-2  lg:text-5xl text-3xl " />
            LOG IN
          </h1>
        </header>

        <aside className="h-[30%] lg:h-[40%] w-[70%] lg:w-[45%] ml-5 lg:mt-20 mt-32 shadow-Me rounded-2xl ">
          <p className="lg:text-[40px] text-[19px] text-white">
            <span className="flex ml-2 lg:pt-2 ">
              <svg
                className="group mt-3 w-8 lg:w-15 "
                viewBox="0 0 300  400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" group-hover:stroke-[#590D22] transition-all duration-300"
                  d="M130.5 0.492401L113.5 3.4924L97.5 8.4924L79.5 16.4924L65.5 24.4924L50.5 36.4924L36 50.9924L24 67.4924L12.5 88.9924L7 103.492L3.5 116.492L1.5 129.992L0.5 139.492V149.992V161.992L1.5 170.492L3 179.992L5 188.992L9.5 200.992L14.5 212.992L17.5 218.992L25.5 231.492L33 241.492L43.5 252.992L55 262.992L66.5 271.492L82.5 280.992L99.5 288.492L115.5 293.492L127 295.992L138 296.992H151.5H163L171.5 295.992L184.5 293.492L197 289.992L203.5 287.492L210 284.492L218 280.492L225.5 276.492L233 271.492L240 266.492L252.5 256.492L257.5 251.492L263 245.492L269.5 236.992L276 227.992L282.5 216.992L286 208.492L290 197.992L292 191.492L294 182.492L295 175.492"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="  group-hover:stroke-[#590D22] transition-all duration-300"
                  d="M102 41.9924V198.492"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="  group-hover:stroke-[#590D22] transition-all duration-300"
                  d="M102 40.9924H162.5L170.5 41.9924L177.5 45.4924L185 49.9924L192 56.4924L196 61.9924L198.5 66.9924L199.5 72.9924L198.5 81.4924L195 89.4924L186.5 97.9924L177.5 103.992L164.5 108.992L159.5 110.492H141"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="  group-hover:stroke-[#590D22] transition-all duration-300"
                  d="M160.5 110.992L174 114.492L184 119.492L197 128.992L205 138.492L211 147.992L214.5 157.492L217.5 169.492L218.5 177.492V188.492L217.5 195.992L214.5 206.992L207 222.492L194.5 238.992L181 250.492L168.5 256.492L158 259.492L148 260.492H132.5L123.5 259.492L110.5 254.992L97 247.492L84.5 236.492L76.5 226.492L71.5 216.492L68.5 208.492L67 196.992V182.992L68.5 173.492L73 163.492L78 154.492L83.5 146.492L91.5 139.492L98.5 134.992L105.5 130.992L112.5 127.492L115.5 126.492H138.5"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="pt-2 ">eauty Cosmetics Store</p>
            </span>{" "}
            <p className=" pl-7 text-[15px] lg:text-[23px]">
              Glow every day with makeup and skincare you’ll love.
            </p>
          </p>
          <div className="flex">
            <button className="rounded-2xl w-[100px] lg:w-37.5 h-[40px] lg:h-12.5 mt-2 lg:mt-7 ml-3 mr-2 bg-[#FFCCD5] hover:bg-[#590D22]">
              Log In
            </button>
            <button className="rounded-2xl  lg:w-90 lg:h-12.5 h-[40px] mt-2 lg:mt-7 gap-2 bg-[#FFCCD5]  hover:bg-[#590D22] flex flex-row items-center justify-center ">
              <FaCartShopping className="ml-2" />
              Purchase Now{" "}
              <p className="text-[0px] lg:text-[15px]">(Sales Off Only $49 )</p>
            </button>
          </div>{" "}
        </aside>
      </div>
      <section className="h-[70dvh]   relative ">
        <aside
          className="h-[40%] lg:w-[40%] flex flex-col justify-center items-center lg:gap-5 absolute lg:left-30 lg:top-20 top-45 "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          <p>With Elementor</p>
          <p className="text-bold text-[30px]">Live Page Builder</p>
          <div className="flex ">
            <img src="picture/icon_heading.png" className=" object-cover " />
            <img src="picture/icon_heading.png" className=" object-cover " />
          </div>

          <p className="text-center text-[15px]  lg:text-[20px]">
            We specialize in crafting high-quality human hair extensions that
            are a blend of luxury and perfection. Our extensions are
            meticulously designed to enhance your natural beauty and style
            effortlessly.
            <br />
            WordPress with more than 2 million active users.
          </p>
        </aside>
        <div
          className=" reverse w-[50%] lg:w-[30%] h-[70%] lg:h-[100%]  rounded-t-[50%] absolute right-10 -top-30 lg:right-40 lg:-top-50 "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          {" "}
          <img
            src="picture/11062b_939e40aad2fe40de9ab7e30610d2e265~mv2.jpg"
            className="w-full h-full object-cover rounded-t-[50%] "
          />
        </div>
      </section>
      <article className="h-dvh relative  ">
        <div
          className="w-[75%] lg:w-[50%] absolute left-15 top-2 lg:top-10 "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          <img
            src="picture/2e2a49_22e45f736c9945d98ff9a2e3cd56090c~mv2.jpg"
            className=" rounded-3xl"
          />{" "}
        </div>
        <div
          className="lg:w-[35%] w-[80%] h-[50%] lg:h-[80%] absolute bottom-0 lg:right-20 bg-[#DDB892] rounded-3xl "
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          <p className="text-[20px] lg:text-[40px] text-dark pt-2 pl-2">
            About Beauty
          </p>
          <p className="text-[10px] lg:text-[20px] text-dark pt-5 pl-2">
            Beauty is your go-to cosmetics store for makeup, skincare, and
            beauty essentials that fit your lifestyle and budget. We curate
            trusted brands and trending favorites so you can create effortless
            everyday looks or full glam moments with confidence. From
            complexion-perfecting foundations to nourishing serums and must-have
            tools, our collection is chosen for quality, comfort, and results.
            Whether you’re refreshing your routine or searching for the perfect
            gift, our team is here to help you find shades, formulas, and
            products that make you feel like your best self. <br />
          </p>
        </div>
      </article>
      <section className="h-dvh ">
        <aside
          className="h-[40%] flex flex-col justify-center items-center pt-2 lg:gap-5 "
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-duration="1200"
        >
          <p>Homepage Amazing</p>
          <p className="text-bold lg:text-[30px]">Installable demo homepages</p>
          <img src="picture/icon_heading.png" className=" object-cover " />
          <p className="text-center text-[15px] lg:text-[20px]">
            You can get started in a single click by importing all the demo data
            and pages. With <span className="text-[#FF4D6D]"> Hara</span> and
            our own, <br /> unique drag and drop homepage builder.
          </p>
        </aside>

        <div className="h-[60%] w-full ">
          <div className="h-full w-[100%] lg:w-[50%] px-10 lg:px-30 ">
            <img
              className="h-full"
              src="picture/undraw_makeup-artist_0xtr.svg"
            />
          </div>
        </div>
      </section>
      <div className="h-[130vh] lg:h-[40vh] flex flex-row  relative ">
        <p className="lg:w-[40%] h-[30%] lg:h-[70%] text-[20px] text-center py-10 px-10 lg:ml-20  ">
          You'll find us tucked away beneath the Little National Hotel, where we
          offer an all-day product menu, as well as hairstylists and a makeup
          artist.
        </p>
        <div className="w-[90%] lg:w-[50%] h-[60%] absolute bottom-14 left-5 lg:left-160 lg:-top-75 ">
          <Slider />
        </div>
      </div>
      {/* البوكس الي بيتحرك */}
      <section className=" h-[70vh] bg-[#CB997E] relative">
        <h1 className="element h-[10%] w-[12%]  absolute  top-40 left-50  rounded-[10px] shadow-Me">
          <div className="overlay flex flex-col items-start">
            <p className="text-[6px] lg:text-[20px]">UNIQUENESS</p>
            <p className="text-[5px] lg:text-[8px] pl-2">
              unique story through its blend of scents
            </p>
          </div>
        </h1>
        <h1 className="h-[9%] w-[12%]  absolute  top-65 left-30 rounded-[10px] shadow-Me"></h1>
        <h1 className="h-[15%] w-[20%]  absolute  top-52 left-60  rounded-[10px] z-2 shadow-Me element ">
          <div className="overlay flex flex-col items-start">
            <p className="text-[8px] lg:text-[20px]">QUALITY</p>
            <p className="text-[6px] lg:text-[10px] pl-2">
              We prioritize quality in every aspect of our perfumes, from
              ingredients to blending techniques
            </p>
          </div>
        </h1>
        <h1 className="h-[6%] w-[10%]  absolute  top-58 left-110  rounded-[5px]  shadow-Me "></h1>
        <h1 className="h-[13%] w-[18%]  absolute  top-30 left-140  rounded-[10px] z-1 shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[20px]">UNIQUENESS</p>
            <p className="text-[8px] pl-2">
              Our collection tells a unique story through its blend of scents
            </p>
          </div>
        </h1>
        <h1 className="[6%] w-[7%] absolute  top-32 left-130  rounded-[10px] shadow-Me element"></h1>
        <h1 className="h-[13%] w-[18%]  absolute  top-20 right-10  rounded-[10px] shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[8px] lg:text-[20px]">MEMORIES</p>
            <p className="text-[6px] lg:text-[8px] pl-2">
              Our perfumes are designed to create unforgettable memorie{" "}
            </p>
          </div>
        </h1>
        <h1 className="h-[3%] w-[4%]  absolute  top-35 right-11  rounded-xs shadow-Me"></h1>
        <h1 className="h-[2%] w-[2%]  absolute  top-50 right-35  rounded-xs shadow-Me"></h1>
        <h1 className="h-[2%] w-[2%]  absolute  top-60 right-65  rounded-xs shadow-Me"></h1>
        <h1
          className="h-[2%] w-[1%]  absolute  top-70 right-130  shadow-Me "
          style={{ borderRadius: "70%" }}
        ></h1>
        <h1
          className="h-[2%] w-[1%]  absolute  top-75 right-200  shadow-Me "
          style={{ borderRadius: "70%" }}
        ></h1>
        <h1
          className="h-[2%] w-[1%]  absolute  top-40 right-230   shadow-Me"
          style={{ borderRadius: "70%" }}
        ></h1>
        <h1 className="h-[3%] w-[4%]  absolute  top-35 right-55  rounded-xs shadow-Me"></h1>
        <h1 className="h-[3%] w-[4%]  absolute  top-25 right-240  rounded-xs shadow-Me"></h1>
        <h1 className="h-[3%] w-[4%]  absolute  top-15 right-55  rounded-xs shadow-Me"></h1>
        <h1 className="h-[5%] w-[5%]  absolute  top-2 right-35  rounded-xs shadow-Me"></h1>
        <h1 className="h-[18%] w-[22%]  absolute  top-70 right-20  rounded-[10px] shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[9px] lg:text-[20px]">MEMORIES</p>
            <p className="text-[6px] lg:text-[10px] pl-2">
              Our perfumes are designed to create unforgettable memorie
              .sevoking emotions and sensations that linger long after the scent
              fades
            </p>
          </div>
        </h1>
        <h1 className="h-[6%] w-[7%]  absolute  top-76 right-95  rounded-[5px] shadow-Me"></h1>
        <h1 className="h-[6%] w-[7%]  absolute  top-95 right-85  rounded-[5px] shadow-Me"></h1>
        <h1 className="h-[13%] w-[15%]  absolute  top-40 right-80  rounded-[10px] shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[8px] lg:text-[20px]">UNIQUENESS</p>
            <p className="text-[5.5px] lg:text-[8px] pl-2">
              Our collection tells a unique story through its blend of scents
            </p>
          </div>
        </h1>
        <h1 className="h-[6%] w-[7%]  absolute  top-55 right-84  rounded-[5px] shadow-Me element"></h1>
        <h1 className="h-[10%] w-[10%]  absolute  top-5 right-84  rounded-[5px] shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[5px] lg:text-[10px]">UNIQUENESS</p>
            <p className="text-[4px] lg:text-[8px] pl-2">
              unique story through its blend of scents
            </p>
          </div>
        </h1>
        <h1 className="h-[13%] w-[15%]  absolute  bottom-15 right-170  rounded-[10px] z-1  shadow-Me element">
          <div className="overlay flex flex-col items-start">
            <p className="text-[20px]">MEMORIES</p>
            <p className="text-[8px] pl-2">
              Our perfumes are designed to create unforgettable memorie{" "}
            </p>
          </div>
        </h1>
        <h1 className="h-[7%] w-[10%]  absolute  bottom-18 right-200  rounded-[5px] shadow-Me"></h1>
      </section>

      <footer className="h-[70vh] bg-[#CB997E]">
        <div className="h-[40%]  flex ">
          <p
            className="text-white text-xl w-[70%] lg:w-[50%] lg:text-5xl lg:px-10 px-5 pt-5  lg:pr-50  "
            style={{ lineHeight: "1.5" }}
          >
            You Can Help The Store the Future
          </p>
          {/* الصورة */}
          <div className="w-80 lg:h-70  z-10 ">
            <img
              src="picture/land-slider-img-1.png"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="h-[60%]  flex flex-row text-white ">
          <div className="h-[100%] w-[33.3%]  pt-5 ">
            <div className="flex  lg:px-15 px-5 py-5 ">
              <svg
                className="w-10 lg:w-23"
                width="100"
                viewBox="-50 -40 300  400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M130.5 0.492401L113.5 3.4924L97.5 8.4924L79.5 16.4924L65.5 24.4924L50.5 36.4924L36 50.9924L24 67.4924L12.5 88.9924L7 103.492L3.5 116.492L1.5 129.992L0.5 139.492V149.992V161.992L1.5 170.492L3 179.992L5 188.992L9.5 200.992L14.5 212.992L17.5 218.992L25.5 231.492L33 241.492L43.5 252.992L55 262.992L66.5 271.492L82.5 280.992L99.5 288.492L115.5 293.492L127 295.992L138 296.992H151.5H163L171.5 295.992L184.5 293.492L197 289.992L203.5 287.492L210 284.492L218 280.492L225.5 276.492L233 271.492L240 266.492L252.5 256.492L257.5 251.492L263 245.492L269.5 236.992L276 227.992L282.5 216.992L286 208.492L290 197.992L292 191.492L294 182.492L295 175.492"
                  stroke="white"
                  strokeWidth="4"
                />
                <path d="M102 41.9924V198.492" stroke="white" strokeWidth="4" />
                <path
                  d="M102 40.9924H162.5L170.5 41.9924L177.5 45.4924L185 49.9924L192 56.4924L196 61.9924L198.5 66.9924L199.5 72.9924L198.5 81.4924L195 89.4924L186.5 97.9924L177.5 103.992L164.5 108.992L159.5 110.492H141"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  d="M160.5 110.992L174 114.492L184 119.492L197 128.992L205 138.492L211 147.992L214.5 157.492L217.5 169.492L218.5 177.492V188.492L217.5 195.992L214.5 206.992L207 222.492L194.5 238.992L181 250.492L168.5 256.492L158 259.492L148 260.492H132.5L123.5 259.492L110.5 254.992L97 247.492L84.5 236.492L76.5 226.492L71.5 216.492L68.5 208.492L67 196.992V182.992L68.5 173.492L73 163.492L78 154.492L83.5 146.492L91.5 139.492L98.5 134.992L105.5 130.992L112.5 127.492L115.5 126.492H138.5"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>{" "}
              <h1
                className=" text-[20px] lg:text-[50px] lg:pt-5  pt-1.5"
                style={{ fontFamily: "Cinzel Decorative, cursive" }}
                //  style={{ fontFamily: "Playwrite IE, cursive" }}
              >
                eauty
              </h1>{" "}
            </div>
            <div className="flex flex-row lg:ml-25 ml-5 text-xl lg:text-3xl gap-2 lg:gap-4 ">
              <LuInstagram />
              <FaFacebookF />
              <FaWhatsapp />
              <BsTiktok />
            </div>
          </div>
          <div className="h-[100%] w-[33.3%] ">
            <p className="lg:pt-15 lg:px-10 pt-5 px-2 text-[15px] lg:text-[20px]">
              123-456-7890 <br /> info@mysite.com
            </p>
            <p className="lg:pt-5 lg:px-10  pt-5 px-2 text-[15px] lg:text-[20px]">
              500 Terry Francine St. <br /> San Francisco, CA 94158
            </p>
          </div>
          <div className="h-[100%] w-[33.3%] ">
            <p className="lg:pt-14 lg:px-10  pt-5 px-2 text-[15px] lg:text-[20px]">
              Privacy Policy
              <br />
              Accessibility Statement
            </p>
            <p className="lg:pt-5 lg:px-10  pt-5 px-2 text-[13px] lg:text-[20px]">
              © 2035 by D. Patel. Powered <br />
              <span className="flex flex-row gap-2 lg:gap-3">
                {" "}
                and secured by{" "}
                <svg
                  className="group  w-6 lg:w-10 "
                  viewBox="0 0 300  400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className=" group-hover:stroke-[#590D22] transition-all duration-300"
                    d="M130.5 0.492401L113.5 3.4924L97.5 8.4924L79.5 16.4924L65.5 24.4924L50.5 36.4924L36 50.9924L24 67.4924L12.5 88.9924L7 103.492L3.5 116.492L1.5 129.992L0.5 139.492V149.992V161.992L1.5 170.492L3 179.992L5 188.992L9.5 200.992L14.5 212.992L17.5 218.992L25.5 231.492L33 241.492L43.5 252.992L55 262.992L66.5 271.492L82.5 280.992L99.5 288.492L115.5 293.492L127 295.992L138 296.992H151.5H163L171.5 295.992L184.5 293.492L197 289.992L203.5 287.492L210 284.492L218 280.492L225.5 276.492L233 271.492L240 266.492L252.5 256.492L257.5 251.492L263 245.492L269.5 236.992L276 227.992L282.5 216.992L286 208.492L290 197.992L292 191.492L294 182.492L295 175.492"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="  group-hover:stroke-[#590D22] transition-all duration-300"
                    d="M102 41.9924V198.492"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="  group-hover:stroke-[#590D22] transition-all duration-300"
                    d="M102 40.9924H162.5L170.5 41.9924L177.5 45.4924L185 49.9924L192 56.4924L196 61.9924L198.5 66.9924L199.5 72.9924L198.5 81.4924L195 89.4924L186.5 97.9924L177.5 103.992L164.5 108.992L159.5 110.492H141"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="  group-hover:stroke-[#590D22] transition-all duration-300"
                    d="M160.5 110.992L174 114.492L184 119.492L197 128.992L205 138.492L211 147.992L214.5 157.492L217.5 169.492L218.5 177.492V188.492L217.5 195.992L214.5 206.992L207 222.492L194.5 238.992L181 250.492L168.5 256.492L158 259.492L148 260.492H132.5L123.5 259.492L110.5 254.992L97 247.492L84.5 236.492L76.5 226.492L71.5 216.492L68.5 208.492L67 196.992V182.992L68.5 173.492L73 163.492L78 154.492L83.5 146.492L91.5 139.492L98.5 134.992L105.5 130.992L112.5 127.492L115.5 126.492H138.5"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </footer>
      <div className="h-[10vh] bg-[#CB997E] flex pt-6 justify-center">
        <hr className="w-[80%] text-white " />
      </div>
    </div>
  );
}
