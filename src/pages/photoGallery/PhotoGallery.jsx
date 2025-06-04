import { useEffect } from "react";
import CommonTitle from "../../components/shared/CommonTitle";
import CustomContainer from "../../components/shared/CustomContainer";


const PhotoGallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f6f6f6] py-10 pt-20 lg:pt-[120px]">
      <CustomContainer>
        <div className=" pb-[22px]">
          <CommonTitle text={"Photo gallery"} />
        </div>
        {/* === Small Devices: One below another === */}
        <div className="flex flex-col gap-4 md:hidden">
          <img
            src="/gallaryPhoto/photo1.JPEG"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo2.JPG"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo3.jpg"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo4.jpeg"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo5.JPG"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo6.jpeg"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
          <img
            src="/gallaryPhoto/photo7.jpeg"
            alt=""
            className="w-full h-[300px] rounded-lg object-cover"
          />
        </div>

        {/* medium and large device */}
        <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-4 h-auto md:h-[400px] lg:h-[600px]">
          {/* one */}
          <div className="bg-gray-300 rounded-xl col-start-1 col-end-6 row-start-1 row-end-7 ">
            <img
              src="/gallaryPhoto/photo1.JPEG"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* two */}
          <div className="bg-gray-300 rounded-xl col-start-6 col-end-10 row-start-1 row-end-5">
            <img
              src="/gallaryPhoto/photo2.JPG"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* three */}
          <div className="bg-gray-300 rounded-xl col-start-10 col-end-13 row-start-1 row-end-7">
            <img
              src="/gallaryPhoto/photo3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* four */}
          <div className="bg-gray-300 rounded-xl col-start-6 col-end-10 row-start-5 row-end-9">
            <img
              src="/gallaryPhoto/photo4.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* five */}
          <div className="bg-gray-300 rounded-xl col-start-10 col-end-13 row-start-7 row-end-13">
            <img
              src="/gallaryPhoto/photo5.JPG"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* six */}
          <div className="bg-gray-300 rounded-xl col-start-6 col-end-10 row-start-9 row-end-13">
            <img
              src="/gallaryPhoto/photo6.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* seven */}
          <div className="bg-gray-300 rounded-xl col-start-1 col-end-6 row-start-7 row-end-13">
            <img
              src="/gallaryPhoto/photo7.jpeg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-8">
          <button className="border border-[#ccc] px-6 py-2 rounded-full text-[16px] font-semibold font-degular">Load more</button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default PhotoGallery;
