/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const SlideBanner = () => {
  return (
    <div className="my-4">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-16 text-center text-gray-100">
              <h1 className="text-2xl font-bold ">Landscape painting</h1>
              <p className="opacity-85 mx-44">landscape painting, the depiction of natural scenery in art. Landscape paintings may capture mountains, valleys, bodies of water, fields, forests, and coasts.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.postimg.cc/SQHp7tdg/birmingham-museums-trust-Vc8-GBqapdfs-unsplash.jpg" alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          <div className="absolute top-16 text-center text-gray-100">
              <h1 className="text-2xl font-bold ">Portrait Drawing</h1>
              <p className="opacity-85 mx-48">A portrait painting or drawing depicts the image of a particular person or animal, or group thereof.The subject of a portrait is usually called a "sitter".</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.postimg.cc/SRM3vkdD/jj-ying-j-D5-RVR9-BAS8-unsplash.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          <div className="absolute top-16 text-center text-gray-100">
              <h1 className="text-2xl font-bold  ">Watercolour Painting</h1>
              <p className="opacity-90 mx-48">At its most basic the word 'watercolour' describes a medium in which dry pigment is mixed first with a binder (usually gum arabic), then with water.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.postimg.cc/W1bSDsZC/elena-mozhvilo-xw8-Df-YBa-Nb-Q-unsplash.jpg" alt="" />
          </div>
              </SwiperSlide>
              <SwiperSlide>
          <div className="relative">
          <div className="absolute top-16 text-center text-gray-100">
              <h1 className="text-2xl font-bold  ">Oil Painting</h1>
              <p className="opacity-90 mx-48">Oil painting is a painting method involving the procedure of painting with pigments with a medium of drying oil as the binder.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.postimg.cc/QNcrmJzs/europeana-H-4-WME4eo-Oo-unsplash.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideBanner;
