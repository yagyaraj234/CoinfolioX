import React from "react";
import { newData } from "../data";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const NewsCard = () => {
  return (
    <>
      <AliceCarousel responsive={responsive}
      mouseTracking={true}
      autoPlayInterval={4000}
      autoPlay={true}
      infinite={true}
      disableDotsControls={true}
      >
        {newData.map((data) => (
          <div
            className=" border p-4 flex flex-col  rounded-md shadow-md min-h-[180px] max-h-[180px] mx-5 bg-white "
            key={data.key}
          >
            <p className="text-left text-sm pb-2 mb-2 border-b">
              {data.username} <span></span>
            </p>
            <p className="text-justify pb-2">
              {data.news.slice(0, 170)}
              <span className="block text-blue-700 font-semibold">
                {data.news.length >= "500" && " read more"}
              </span>
            </p>
          </div>
        ))}
      </AliceCarousel>
    </>
  );
};

export default NewsCard;
