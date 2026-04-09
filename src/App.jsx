import { useEffect } from "react";
import { gsap } from "gsap";
import { IoPeople } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

export default function App() {
  useEffect(() => {
    const paths = document.querySelectorAll("circle");

    paths.forEach((el) => {
      const length = el.getTotalLength();
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;
      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <div className=" ">
      <div
        className="   h-dvh  bg-cover bg-fixed"
        style={{
          backgroundImage: "url('picture/1oop.png')",
          // opacity: 0.8,
        }}
      >
        <header className="flex justify-between h-[20vh]">
          {/* loGGo */}
          <div className="flex flex-row  px-15 py-5">
            <svg
              width="100"
              viewBox="-50 -40 300  400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M130.5 0.492401L113.5 3.4924L97.5 8.4924L79.5 16.4924L65.5 24.4924L50.5 36.4924L36 50.9924L24 67.4924L12.5 88.9924L7 103.492L3.5 116.492L1.5 129.992L0.5 139.492V149.992V161.992L1.5 170.492L3 179.992L5 188.992L9.5 200.992L14.5 212.992L17.5 218.992L25.5 231.492L33 241.492L43.5 252.992L55 262.992L66.5 271.492L82.5 280.992L99.5 288.492L115.5 293.492L127 295.992L138 296.992H151.5H163L171.5 295.992L184.5 293.492L197 289.992L203.5 287.492L210 284.492L218 280.492L225.5 276.492L233 271.492L240 266.492L252.5 256.492L257.5 251.492L263 245.492L269.5 236.992L276 227.992L282.5 216.992L286 208.492L290 197.992L292 191.492L294 182.492L295 175.492"
                stroke="black"
                strokeWidth="6"
              />
              <path d="M102 41.9924V198.492" stroke="black" strokeWidth="6" />
              <path
                d="M102 40.9924H162.5L170.5 41.9924L177.5 45.4924L185 49.9924L192 56.4924L196 61.9924L198.5 66.9924L199.5 72.9924L198.5 81.4924L195 89.4924L186.5 97.9924L177.5 103.992L164.5 108.992L159.5 110.492H141"
                stroke="black"
                strokeWidth="6"
              />
              <path
                d="M160.5 110.992L174 114.492L184 119.492L197 128.992L205 138.492L211 147.992L214.5 157.492L217.5 169.492L218.5 177.492V188.492L217.5 195.992L214.5 206.992L207 222.492L194.5 238.992L181 250.492L168.5 256.492L158 259.492L148 260.492H132.5L123.5 259.492L110.5 254.992L97 247.492L84.5 236.492L76.5 226.492L71.5 216.492L68.5 208.492L67 196.992V182.992L68.5 173.492L73 163.492L78 154.492L83.5 146.492L91.5 139.492L98.5 134.992L105.5 130.992L112.5 127.492L115.5 126.492H138.5"
                stroke="black"
                strokeWidth="6"
              />
            </svg>{" "}
            <h1
              className="text-[45px]  "
              style={{ fontFamily: "Cinzel Decorative, cursive" }}
              //  style={{ fontFamily: "Playwrite IE, cursive" }}
            >
              eauty
            </h1>
          </div>
          {/* الخطين */}
          {/* <article>
            <p class="subtitle fancy">
              <span></span>
            </p>
          </article> */}

          <h1
            className="text-[40px] w-[20%] h-[10%] mt-8 hover:text-[#FFC2D1] flex flex-row gap-2"
            style={{ fontFamily: "Playwrite IE, cursive" }}
          >
            {" "}
            <IoPeople className="pt-2 text-5xl" />
            LOG IN
          </h1>
        </header>
        <aside className="h-[40%] w-[45%] ml-5 mt-30  shadow-Me rounded-2xl ">
          <p className="text-[40px] text-white">
            <span className="flex flex-row ml-2 pt-2 ">
              <svg
                className="group mt-3"
                width="50"
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
              eauty Is A Cosmetics
            </span>{" "}
            Shop WooCommerce Theme
          </p>
          <div className="flex flex-row">
            <button className="rounded-2xl w-37.5 h-12.5  mt-5 ml-5 mr-2 bg-[#FFCCD5] hover:bg-[#590D22]">
              Log In
            </button>
            <button className="rounded-2xl w-90 h-12.5  mt-5 gap-2 bg-[#FFCCD5]  hover:bg-[#590D22] flex flex-row items-center justify-center ">
              {" "}
              <FaCartShopping />
              Purchase Now (Sales Off Only $49 )
            </button>
          </div>{" "}
        </aside>
      </div>
      <section className="h-dvh ">
        <aside className="h-[40%] flex flex-col justify-center items-center gap-5 ">
          <p>With Elementor</p>
          <p className="text-bold text-[30px]">Live Page Builder</p>
          <img
            src="picture/icon_heading.png"
            className=" object-cover "
          />
          <p className="text-center">
            The Most Compatible With Elementor, this is the best builder for{" "}
            <br />
            WordPress with more than 2 million active users.
          </p>
        </aside>
      </section>
      <section className="h-dvh ">
        <aside className="h-[40%] flex flex-col justify-center items-center gap-5 ">
          <p>Homepage Amazing</p>
          <p className="text-bold text-[30px]">Installable demo homepages</p>
          <img
            src="picture/icon_heading.png"
            className=" object-cover "
          />
          <p className="text-center">
            You can get started in a single click by importing all the demo data
            and pages. With <span className="text-[#FF4D6D]"> Hara</span> and
            our own, <br /> unique drag and drop homepage builder.
          </p>
        </aside>

        <div className="h-[60%] w-full ">
          <div className="h-full w-[50%]  px-30 ">
            <img
              className="h-full"
              src="picture/undraw_makeup-artist_0xtr.svg"
            />
          </div>
          <div></div>
        </div>
      </section>
      <div className="h-[40vh] w-full  ">
        <p className="w-[40%] text-[20px] text-center py-10 px-10 ml-20 ">
          You'll find us tucked away beneath the Little National Hotel, where we
          offer an all-day product menu, as well as hairstylists and a makeup
          artist.
        </p>
      </div>

      <footer className="h-[70vh] bg-[#FF8FAB]">
        <div className="h-[40%]  flex flex-row">
          <p
            className="text-white text-5xl px-10 pr-50"
            style={{ fontFamily: "Playwrite IE, cursive", lineHeight: "1.5" }}
          >
            You Can Help
            <br /> The Store the Future
          </p>
          {/* الصورة */}
          <div className="w-50 h-40  overflow-hidden  rounded-xl ">
            <img
              src="picture/land-slider-img-3.png"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="h-[60%]  flex flex-row text-white ">
          <div className="h-[100%] w-[33.3%]  pt-5">
            <div className="flex flex-row  px-15 py-5 ">
              <svg
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
                className="text-[50px] pt-5 "
                style={{ fontFamily: "Cinzel Decorative, cursive" }}
                //  style={{ fontFamily: "Playwrite IE, cursive" }}
              >
                eauty
              </h1>{" "}
            </div>
            <div className="flex flex-row px-25 text-3xl gap-4">
              <LuInstagram />
              <FaFacebookF />
              <FaWhatsapp />
              <BsTiktok />
            </div>
          </div>
          <div className="h-[100%] w-[33.3%] ">
            <p className="pt-15 px-10 text-[20px]">
              123-456-7890 <br /> info@mysite.com
            </p>
            <p className="pt-5 px-10 text-[20px]">
              500 Terry Francine St. <br /> San Francisco, CA 94158
            </p>
          </div>
          <div className="h-[100%] w-[33.3%] ">
            <p className="pt-15 px-10 text-[20px]">
              Privacy Policy
              <br />
              Accessibility Statement
            </p>
            <p className="pt-5 px-10 text-[20px]">
              © 2035 by D. Patel. Powered <br />
              <span className="flex flex-row gap-3">
                {" "}
                and secured by{" "}
                <svg
                  className="group"
                  width="40"
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
    </div>
  );
}
