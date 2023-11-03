import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/banner/4.jpg";
import useAuth from "../../hooks/useAuth";

const CheckOut = () => {
  const { user } = useAuth();
  const loadedService = useLoaderData();
  // console.log(loadedService);

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const date = form.date.value;
    const email = user?.email;
    const message = form.message.value;

    const bookingInfo = {
      name: firstName + " " + lastName,
      date,
      email,
      message,
      productId: loadedService._id,
      serviceName: loadedService.title,
      img: loadedService.img,
      price: loadedService.price,
    };

    // console.log(bookingInfo);
    fetch("https://car-doctor-server-rho-brown.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };

  return (
    <div className="mb-[130px]">
      <div className="relative mb-[130px]">
        <img
          src={banner}
          className="max-h-[300px] w-full object-cover rounded-lg"
          alt=""
        />
        <div className="absolute rounded-xl w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
          <div className="text-white text-center sm:text-left w-full sm:items-start pl-0 sm:pl-16 absolute top-1/2 left-0 -translate-y-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">Check Out</h2>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="296"
                height="50"
                viewBox="0 0 296 50"
                fill="none"
              >
                <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
              </svg>
            </div>
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full text-center text-[#FFF] text-xl font-medium">
              Home/Checkout
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] p-8 sm:p-[97px] rounded-lg">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          onSubmit={handleCheckOut}
        >
          <div className="lg:max-w-[500px]">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="w-full bg-[#FFF] text-[#A2A2A2] py-4 px-6 rounded-lg"
            />
          </div>
          <div className="lg:max-w-[500px]">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="w-full bg-[#FFF] text-[#A2A2A2] py-4 px-6 rounded-lg"
            />
          </div>
          <div className="lg:max-w-[500px]">
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Your Phone"
              className="w-full bg-[#FFF] text-[#A2A2A2] py-4 px-6 rounded-lg"
            />
          </div>
          <div className="lg:max-w-[500px]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user?.email}
              className="w-full bg-[#FFF] text-[#A2A2A2] py-4 px-6 rounded-lg"
              readOnly
            />
          </div>
          <div className="h-[250px] lg:col-span-2">
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full h-full bg-[#FFF] text-[#A2A2A2] py-4 px-6 rounded-lg"
            />
          </div>
          <input
            type="submit"
            value="Order Confirm"
            className="bg-[#FF3811] text-[#FFF] text-xl font-semibold py-4 w-full rounded-lg lg:col-span-2 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
