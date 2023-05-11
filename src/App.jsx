import React from "react";
import Entry_page from "./pages/public/entry_page";
import Hero from "./assets/pp.png";
import PorImg from "./assets/woman.png";
import Expert from "./assets/expert.png";

function App() {
  return (
    <div className="bg-slate-50 ">
      {/* <h1>Home</h1> */}
      <Entry_page />
      {/*  */}
      <div
        id="home"
        className=" h-[100vh] flex flex-row justify-between   overflow-auto bg-slate-50 pl-20 pr-20 overflow-hidden "
      >
        <div className="flex flex-col justify-center items-center m-auto">
          <div className="items-center align-center">
            <h1 className="text-size-500 font-extrabold text-[5rem] text-blue-600">
              <span className="text-red-400">FOREX</span> Today
            </h1>
            <p className="mt-3 text-[25px] align-center text-center text-slate-400">
              Master Forex Trading with Expert Guidance <br></br>
              Forex Mentorship for Success
            </p>
          </div>
          <button className="bg-[#DAB805] p-2 pl-20 pr-20 mt-20 rounded text-white hover:bg-[#e4c62f] active:bg-[#5e5426] active:ring-2 ring-slate-50">
            Join Today
          </button>
        </div>
        <div>
          <img src={Hero} className="mt-20" height="150px" width="500px" />
        </div>
      </div>
      {/* new latter */}
      <div className="h-[10vh] bg-slate-600 flex justify-center items-center ">
        <p className="mr-3 text-lg text-white ">
          <marquee>Subscript for our Newsletter and update</marquee>
        </p>
        <input
          type="text"
          pleaceholder="Email address"
          className="p-1 ring-1 text-slate-400 bg-slate-100 w-1/6"
        />
        <button className="bg-blue-700 p-1 ring ring-1 pl-10 pr-10 text-white font-bold">
          Subcribe
        </button>
      </div>
      {/*  */}
      <div
        id="programm"
        className="h-[100vh] bg-[#00242E] justify-center items-center p-2"
      >
        <div className="grid grid-cols-2 gap-1 ">
          <div className="flex justify-center items-center align-center mt-20 p-2">
            <img src={Expert} width="450px" height={"200px"} />
          </div>
          <div className="flex  flex-col justify-center items-center text-white">
            <h1 className="text-slate-200 text-center text-[2rem] text-bold ">
              Empower Your Forex Trading Journey<br></br>
              Gain an Edge with Professional<br></br>
              Forex Mentorship!
            </h1>
            <button className="bg-[#DAB805] p-2 pl-20 pr-20 mt-20 rounded text-white hover:bg-[#e4c62f] active:bg-[#5e5426] active:ring-2 ring-slate-50">
              Expert Mentorship
            </button>
          </div>
        </div>
      </div>
      <div
        id="About"
        className="h-[86vh] flex justify-around align-center items-center"
      >
        <div>
        <h1 className="text-bold font-extrabold text-[2.5rem] mb-1">The Programme</h1>
        <p classname="mt-2">
          Ready to take your forex trading skills to the next level?<br></br> Our
          professional mentorship program provides guidance, support, and proven<br></br>
          strategies to help you achieve your trading goals...{" "}
        </p>
        </div>
        <div>
          <img src={PorImg} width="420px" />
        </div>
      </div>
      <div className="h-[30vh] bg-slate-400 flex justify-center items-center mt-0">
        <div className="flex justify-center align-center flex-col items-center">
          <h1 className="text-[1.5rem] text-slate-100  text-bold font-extrabold">Stay ahead of the market and get the <br />next trading mentorship lession in your e-mail box!</h1>
          <div className="flex flex-row">
        </div>
        <div className="flex w-full mt-4">
        <input
          type="text"
          pleaceholder="Email address"
          className="pr-3 pl-3 p-2 ring ring-2 rounded text-slate-400 bg-slate-100 w-full"
        />
        <button className="bg-slate-700  p-1 ring ring-1 pl-10 pr-10 text-white hover:bg-slate-500  ">
          Subcribe
        </button>
        </div>
        </div>
      </div>
      {/* testimonial */}
      <div id="test">
        <div className=" bg-white flex justify-center items-center flex-col">
          <h1 className="undeline text-[#DAB805] font-bold text-[39px] mt-20">TESTIMONIALS</h1>
          <p className="text-slate-400 mb-10">"Unlocking My Potential: A Transformative Journey with Mentorship"</p>
          </div>

          <div className="flex justify-center items-center  m-20">
           <div className="bg-slate-200  shadow gap w-[150px] h-[150px] rounded rounded-full p-2 ">
            {/* circle */}
            <h1>header</h1>
            {/* header */}
           </div>
           <div className="bg-slate-200  shadow gap w-[150px] h-[150px] rounded rounded-full p-2 ">
            {/* circle */}
            <h1>header</h1>
            {/* header */}
           </div>
           <div className="bg-slate-200  shadow gap w-[150px] h-[150px] rounded rounded-full p-2 ">
            {/* circle */}
            <h1>header</h1>
            {/* header */}
           </div>
           <div className="bg-slate-200  shadow gap w-[150px] h-[150px] rounded rounded-full p-2 ">
            {/* circle */}
            <h1>header</h1>
            {/* header */}
           </div>
          </div>
      </div>
      <div id="contact" className="h-[100vh]">
        contact us
      </div>
    </div>
  );
}

export default App;
