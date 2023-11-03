import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        // const loggedInUser = result.user;
        // console.log(loggedInUser);
        const user = { email };
        // get access token
        axios
          .post("https://car-doctor-server-rho-brown.vercel.app/jwt", user)
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(from, { replace: true });
            }
          })
          .then();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex justify-center lg:justify-between items-center mb-[130px] w-full">
        <div className="hidden lg:block">
          <img src={img} alt="" />
        </div>
        <div className="border border-[#D0D0D0] rounded-lg w-full md:w-3/4 lg:w-1/2 p-4 md:p-[75px]">
          <h1 className="text-[#444] text-[40px] font-semibold mb-12 text-center">
            Login
          </h1>
          <form className="space-y-9" onSubmit={handleLogin}>
            <div className="lg:max-w-[461px]">
              <p className="mb-4 text-[#444] text-lg font-semibold">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="border border-[#E8E8E8] w-full py-4 pl-6 rounded-lg placeholder:text-[#A2A2A2]"
              />
            </div>
            <div className="lg:max-w-[461px]">
              <p className="mb-4 text-[#444] text-lg font-semibold">
                Confirm Password
              </p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="border border-[#E8E8E8] w-full py-4 pl-6 rounded-lg placeholder:text-[#A2A2A2]"
              />
            </div>
            <div className="lg:max-w-[461px]">
              <input
                type="submit"
                value="Sign In"
                className="w-full bg-[#FF3811] text-[#FFF] text-xl font-semibold py-4 rounded-lg"
              />
            </div>
          </form>
          <div className="mt-8">
            <p className="text-[#444] text-lg font-medium text-center mb-[30px]">
              Or Sign In with
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <div className="bg-[#F5F5F8] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74947C17.3047 8.55339 17.6379 7.73447 19.3545 7.73447H21.5297V4.03902C20.4714 3.9256 19.4076 3.87083 18.3432 3.87497C15.1863 3.87497 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5268H13.0267V27.1211H17.3047Z"
                    fill="#3B5998"
                  />
                </svg>
              </div>
              <div className="bg-[#F5F5F8] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.48292 7.697C6.69132 7.697 7.67092 6.7174 7.67092 5.509C7.67092 4.3006 6.69132 3.321 5.48292 3.321C4.27452 3.321 3.29492 4.3006 3.29492 5.509C3.29492 6.7174 4.27452 7.697 5.48292 7.697Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M9.73722 9.355V21.494H13.5062V15.491C13.5062 13.907 13.8042 12.373 15.7682 12.373C17.7052 12.373 17.7292 14.184 17.7292 15.591V21.495H21.5002V14.838C21.5002 11.568 20.7962 9.055 16.9742 9.055C15.1392 9.055 13.9092 10.062 13.4062 11.015H13.3552V9.355H9.73722ZM3.59521 9.355H7.37021V21.494H3.59521V9.355Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="bg-[#F5F5F8] p-[18px] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_351_751)">
                    <path
                      d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28615V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z"
                      fill="#FBBD00"
                    />
                    <path
                      d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z"
                      fill="#0F9D58"
                    />
                    <path
                      d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2687 5.43488 12.7139Z"
                      fill="#31AA52"
                    />
                    <path
                      d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z"
                      fill="#3C79E6"
                    />
                    <path
                      d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z"
                      fill="#CF2D48"
                    />
                    <path
                      d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z"
                      fill="#EB4132"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_351_751">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="text-[#737373] text-lg font-semibold text-center">
              Already have an account?{" "}
              <Link to="/signUp" className="text-[#FF3811]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
