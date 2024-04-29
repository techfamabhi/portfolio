import React from "react";
import eshop_frontend from "../assets/portfolio/abhi/eshop_frontend.JPG";
import freedy_img from "../assets/portfolio/abhi/freedy_img.JPG";
import logistics_laravel from "../assets/portfolio/abhi/logistics_laravel.JPG";
import og_mart from "../assets/portfolio/abhi/og_mart.JPG";
import real from "../assets/portfolio/abhi/real.JPG";
import Whipsmart from "../assets/portfolio/abhi/whipsmart.JPG";
import irji from "../assets/portfolio/abhi/irji2.JPG";
import market from "../assets/portfolio/abhi/market.JPG";
import Function_Hall from "../assets/portfolio/abhi/Functionhall.JPG";


const Portfolio = () => {
  const portfolios = [
    {
      id: 8,
      src: Function_Hall,
      name: "Function Hall Project",
      // title: "Under In Process"
      website:"https://bookmyfunctionhall.com/"
      link:"https://bookmyfunctionhall.com/"
    },
    {
      id: 1,
      src: real,
      website: "http://real-estate.infinityfreeapp.com/home.php",
      name: "Real-Estate",
      link: "https://github.com/techfamabhi/Real-Estate"
    },
    {
      id: 2,
      src: og_mart,
      name: "OG Mart | Ecommerce [React Js + Laravel]",
      link: "https://github.com/techfamabhi/og_react_website"
    },
    {
      id: 3,
      src: irji,
      website: "https://irji.in/",
      name: "International Research Journal Of India ",
      link: "https://github.com/techfamabhi/Freedy-Ecommerce"
    },
    {
      id: 4,
      src: market,
      website: "https://marketreportslibrary.com/",
      name: "market Reports Library",
      link: "https://marketreportslibrary.com/"
    },
    {
      id: 5,
      src: eshop_frontend,
      website: "https://techfamabhi.github.io/Eshop_FrontEnd/",
      name: "Eshop FrontEnd Design",
      link: "https://github.com/techfamabhi/Eshop_FrontEnd"
    },
    {
      id: 6,
      src: logistics_laravel,
      name: "Logistics WebSite",
      link: "https://github.com/techfamabhi/Sunway-Express-Logistics"
    },
    {
      id: 7,
      src: freedy_img,
      website: "https://techfamabhi.github.io/Freedy-Ecommerce/index.html",
      name: "Freddy Ecommerce | WebSite Design",
      link: "https://github.com/techfamabhi/Freedy-Ecommerce"
    },
    {
      id: 8,
      src: Whipsmart,
      website: "https://techfamabhi.github.io/whipsmart/",
      name: "Whipsmart | WebSite Design",
      link: "https://github.com/techfamabhi/whipsmart"
    }
   
  ];

  const handleCodeClick = (link) => {
    window.open(link, '_blank');
  };

  const handleLinkClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="portfolio_sec">
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio_media"  style={{ height:"1100px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 portfolio_small_text">
            Portfolio
          </p>
          <p className="py-6 portfolio_small_text">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0" id="portfolio_card_color">
          {portfolios.map(({ id, src, name, website, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="flex items-center justify-center mt-5 font-signature font-bold  duration-200 hover:scale-105" style={{ fontSize:"20px",textAlign:"center" }}>
                {name}
              </p>
              <div className="flex items-center justify-center">
                {website && (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleLinkClick(website)}
                  >
                    Link
                  </button>
                )}
                {link && (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(link)}
                  >
                    Code
                  </button>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
