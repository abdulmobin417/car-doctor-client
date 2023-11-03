import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Header = () => {
  return (
    <div className="carousel h-[620px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
          <div className="text-white space-y-7 text-center sm:text-left w-full flex flex-col items-center sm:items-start pl-0 sm:pl-16">
            <h2 className="text-5xl lg:text-6xl font-bold lg:leading-[75px] max-w-[450px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[500px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] lg:text-lg font-semibold flex flex-wrap gap-4 w-full justify-center sm:justify-start">
              <button className="bg-[#FF3811] px-3 py-3 lg:px-5 lg:py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-3 py-3 lg:px-5 lg:py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-1 sm:bottom-12 left-1/2 -translate-x-1/2 sm:translate-x-1/2 lg:translate-x-3/4 sm:right-12">
          <a
            href="#slide6"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide2"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[520px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] text-lg font-semibold">
              <button className="bg-[#FF3811] mr-5 px-5 py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-5 py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-12 right-12">
          <a
            href="#slide1"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide3"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[520px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] text-lg font-semibold">
              <button className="bg-[#FF3811] mr-5 px-5 py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-5 py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-12 right-12">
          <a
            href="#slide2"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide4"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[520px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] text-lg font-semibold">
              <button className="bg-[#FF3811] mr-5 px-5 py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-5 py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-12 right-12">
          <a
            href="#slide3"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide5"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[520px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] text-lg font-semibold">
              <button className="bg-[#FF3811] mr-5 px-5 py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-5 py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-12 right-12">
          <a
            href="#slide4"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide6"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full object-cover rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold leading-[75px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="max-w-[520px] text-lg capitalize">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-[#FFF] text-lg font-semibold">
              <button className="bg-[#FF3811] mr-5 px-5 py-4 rounded">
                Discover More
              </button>
              <button className="border border-[#FFFFFF] px-5 py-4 rounded">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-5 bottom-12 right-12">
          <a
            href="#slide5"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#slide1"
            className="bg-[#c4c4c4aa] p-[18px] rounded-full hover:bg-[#FF3811]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
