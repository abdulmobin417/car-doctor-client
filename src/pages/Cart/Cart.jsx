import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/checkout/cart-1.jpeg";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [bookings, setBookings] = useState([]);
  // const navigate = useNavigate();

  const url = `/bookings?email=${user?.email}`;
  // console.log(url);

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (!data.error) {
    //       setBookings(data);
    //     } else {
    //       // logout and then navigate
    //       navigate("/");
    //     }
    //   });
  }, [axiosSecure, url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-rho-brown.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id, message) => {
    fetch(`https://car-doctor-server-rho-brown.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = message;
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  const handleAllDelete = () => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            setBookings([]);
          }
        });
    }
  };

  // console.log(bookings);

  return (
    <div>
      <div className="relative mb-[130px]">
        <img
          src={banner}
          className="max-h-[300px] w-full object-cover rounded-lg"
          alt=""
        />
        <div className="absolute rounded-xl w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-4">
          <div className="text-white text-center sm:text-left w-full sm:items-start pl-0 sm:pl-16 absolute top-1/2 left-0 -translate-y-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">Cart Details</h2>
            <p className="text-[#FF3811] font-medium mt-2">
              Home - Product Details
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[50px] overflow-hidden overflow-x-auto">
        {bookings?.map((booking, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center mb-7 w-[1216px]"
          >
            <div className="flex items-center gap-8 col-span-3">
              <button onClick={() => handleDelete(booking._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#444444" />
                  <path
                    d="M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20ZM20 20L15 15L20 20Z"
                    fill="#444444"
                  />
                  <path
                    d="M20 20L15 15M25 15L20 20L25 15ZM20 20L15 25L20 20ZM20 20L25 25L20 20Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="max-w-[150px]">
                <img
                  src={booking?.img}
                  className="w-full rounded-lg h-[150px] object-cover"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[#444] text-xl font-semibold">
                  {booking?.serviceName}
                </h2>
                <p className="text-[#A2A2A2] leading-[30px]">Color : Green</p>
                <p className="text-[#A2A2A2]">Size: S</p>
              </div>
            </div>
            <p className="text-[#444] text-xl font-semibold">
              ${booking?.price}
            </p>
            <p className="text-[#444] text-xl font-semibold">{booking.date}</p>
            {booking.status === "confirm" ? (
              <button
                className="text-[#29B170] text-xl font-semibold px-5 py-2 rounded-lg border border-[#29B170] flex items-center gap-2 max-w-[160px] mx-auto"
                onClick={() => handleBookingConfirm(booking._id, "pending")}
              >
                <span>Approved </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                  >
                    <path
                      d="M16.5 1.25L9 8.75L1.5 1.25"
                      stroke="#29B170"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            ) : (
              <button
                className="bg-[#FF3811] text-[#FFF] text-xl font-semibold px-5 py-2 rounded-lg flex items-center gap-2 max-w-[120px] mx-auto"
                onClick={() => handleBookingConfirm(booking._id, "confirm")}
              >
                <span>Pending </span>
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mb-[130px] flex flex-wrap justify-between">
        <Link to="/" className="flex gap-5 items-center lg:ml-[75px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M1 7H11C13.1217 7 15.1566 7.84285 16.6569 9.34315C18.1571 10.8434 19 12.8783 19 15V17M1 7L7 13M1 7L7 1"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#444] text-xl">Continue Shopping</p>
        </Link>
        <button className="flex gap-5 items-center" onClick={handleAllDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM7 9V15V9ZM11 9V15V9ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z"
              stroke="#444444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#444] text-xl">Clear Shopping Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
