import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import IMAGE_BASE_URL from "../../Services/ImgBaseUrl";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const elementRef = useRef();

  //data fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GlobalApi.getTrendingVideos();
        setMovieList(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getScrollAmount = () => {
    return screenWidth - (screenWidth >= 768 ? 108 : 44);
  };

  const sliderRight = (element) => {
    element.scrollLeft += getScrollAmount();
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= getScrollAmount();
  };

  // ✅ Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (elementRef.current) {
        if (
          elementRef.current.scrollLeft + getScrollAmount() >=
          elementRef.current.scrollWidth
        ) {
          elementRef.current.scrollLeft = 0; // reset to start
        } else {
          sliderRight(elementRef.current); // ✅ scroll forward
        }
      }
    }, 7000);

    return () => clearInterval(interval);
  });

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <HiChevronLeft
        className="hidden opacity-20 hover:opacity-100 md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer transition-all duration-300 ease-in"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden opacity-20 hover:opacity-100 md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0 transition-all duration-300 ease-in"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-scroll w-full px-8 md:px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[240px] md:h-[310px] mr-5 object-cover object-left-top rounded-md cursor-pointer
            hover:border-[3px] border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
