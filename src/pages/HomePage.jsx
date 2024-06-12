/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../assets/herobanner.gif";
import port1 from "../assets/port1.jpeg";
import des1 from "../assets/des1.jpeg";
import des2 from "../assets/des2.jpg";
import des3 from "../assets/des3.png";
import des4 from "../assets/des4.jpg";
import bg from "../assets/lll.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleGamelabClick = () => {
    window.location.href = "https://gamelab.id";
  };

  return (
    <>
      <section className="relative w-full h-screen bg-[#FFFCFC] flex flex-col lg:flex-row justify-center items-center overflow-hidden">
        {/* Banner Image */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={Banner}
            alt="banner"
            className="w-[50%] lg:w-[80%] h-auto lg:h-4/5"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2">
            #1 Wedding Invitation App
          </h1>
          <h2 className="text-xl lg:text-xl italic text-black mb-6">
            Solusi Mudah Pada Hari Berbahagia
          </h2>
          <p className="text-base lg:text-sm text-slate-900 mb-6">
            Bagikan Momen Bahagiamu dengan <br />
            Lebih <span className="text-[#C66B6B]">Modern</span>
          </p>
          <button
            className="w-[70%] h-[50px] lg:w-[240px] lg:h-[60px] bg-[#C66B6B] rounded-[20px] text-white text-lg lg:text-xl font-normal flex items-center justify-center"
            onClick={handleGamelabClick}
          >
            Make Your Invitation
          </button>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-b from-white to-[#E9B2B2] flex flex-col py-12">
        <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-center text-black mb-5">
          Our Features
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array(9)
              .fill()
              .map((_, index) => (
                <div key={index} className="card flex justify-center">
                  <div className="w-full max-w-xs bg-white shadow-lg rounded-[10px] flex flex-col items-center justify-center p-4">
                    <h3 className="font-montserrat font-semibold text-lg lg:text-xl text-black text-center mb-2">
                      Lebih Elegan
                    </h3>
                    <p className="font-montserrat font-normal text-base lg:text-lg text-center text-black">
                      Undangan berbentuk digital terkesan lebih mewah
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-br from-[#F3D1D1] to-[#A19B9B] flex flex-col items-center py-12">
        <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-center text-black mb-8">
          Tutorial Membuat Undangan
        </h2>
        <div className="flex flex-col lg:flex-row w-full px-4 lg:px-12">
          <div className="lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
            <p className="font-montserrat italic text-xl lg:text-2xl text-black mb-5">
              Cara membuat Undangan Kamu:
            </p>
            <ol className="font-montserrat text-base lg:text-lg text-black list-decimal pl-5 space-y-3">
              <li>Langkah pertama</li>
              <li>Langkah kedua</li>
              <li>Langkah ketiga</li>
              <li>Langkah keempat</li>
              <li>Langkah kelima</li>
            </ol>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center">
            <p className="font-montserrat text-lg text-black mb-5">
              Tonton Video Dibawah ini:
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ar1qQpKbiVc?si=B4W3npc60DslnTcC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row bg-gradient-to-br from-[#F4D2D2] via-[#EEEEEE] to-[#EEEEEE]">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-10">
          <img
            src={bg}
            alt="section kiri"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-istok-web font-bold text-center text-black mb-8">
            Pelanggan Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array(6)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={port1}
                  className="w-full h-auto rounded-[10px]"
                  alt={`portfolio ${index + 1}`}
                />
              ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/review"
              className="w-full max-w-xs bg-[#C66B6B] rounded-[10px] text-center text-white py-3 text-lg"
            >
              Klik untuk melihat portfolio yang lain
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF] flex flex-col items-center py-12">
        <h2 className="text-2xl lg:text-3xl font-istok-web font-bold text-center text-black mb-8">
          Design Undangan kami
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 ml-5">
          {[des1, des2, des3, des4].map((design, index) => (
            <img
              key={index}
              src={design}
              alt={`design${index + 1}`}
              className="w-[95%] h-auto rounded-[10px]"
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/design"
            className="w-full max-w-xs bg-[#C66B6B] rounded-[10px] text-center text-white py-3 px-6 text-lg"
          >
            Klik untuk melihat design yang lain
          </Link>
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-b from-white to-[#868484] py-12">
        <h2 className="text-2xl lg:text-3xl font-istok-web font-bold text-center text-black mb-8">
          Penawaran Produk kami
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          {["Basic", "Premium", "VIP"].map((plan, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white shadow-lg rounded-lg flex flex-col p-4"
            >
              <div
                className={`h-[87px] flex items-center justify-center rounded-[10px] ${
                  index === 0
                    ? "bg-[#92B0FF]"
                    : index === 1
                    ? "bg-[#F4D2D2]"
                    : "bg-[#FFC700]"
                }`}
              >
                <p className="text-2xl lg:text-3xl font-istok-web font-bold text-white">
                  {plan}
                </p>
              </div>
              <p className="text-xl lg:text-2xl font-montserrat font-semibold text-center text-black my-5">
                Rp.{" "}
                {index === 0 ? "99.000" : index === 1 ? "149.000" : "299.000"}
              </p>
              <ul className="text-lg font-montserrat text-black list-disc pl-5 space-y-2">
                <li>Fitur 1</li>
                <li>Fitur 2</li>
                <li>Fitur 3</li>
                <li>Fitur 4</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
