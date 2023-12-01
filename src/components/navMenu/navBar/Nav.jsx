import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import styles from "../../../styles/style";
import { navLink } from "../../../assets/mockDb";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : " ",
    };
  };
  return (
    <div
      className={`w-screen max-h-max bg-white ${styles.flexCenter} flex-col fixed z-50`}
    >
      <div
        className={`w-[90%] h-[5rem] mx-auto flex justify-between items-center`}
      >
        <div className="logo">
          <img className="" src={logo} alt="logo" />
        </div>
        <form action=" ">
          <div className="w-[500px] xs:hidden md:flex  relative items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute ml-3 text-gray-400 pointer-events-none"
            >
              <path
                d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                stroke="#989898"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <input
              className="flex-1 bg-[#f5f5f5] text-sm px-3 py-3 pl-12 rounded-md outline-none"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
        </form>
        <ul className={`xs:hidden md:flex ${styles.flexCenter} gap-8`}>
          {navLink.map((item) => (
            <li key={item.id}>
              <NavLink
                style={navLinkStyles}
                className=" text-base text-[#656565] font-normal capitalize"
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="xs:block md:hidden">
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
                fill="#080341"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
                fill="#080341"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
                fill="#080341"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`xs:hidden md:flex w-full h-[2rem] bg-black ${styles.flexCenter}`}
      >
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4V2ZM13.3438 4C13.896 4 14.3438 3.55228 14.3438 3C14.3438 2.44772 13.896 2 13.3438 2V4ZM13 18.8594C13 18.3071 12.5523 17.8594 12 17.8594C11.4477 17.8594 11 18.3071 11 18.8594H13ZM11 18.8702C11 19.4225 11.4477 19.8702 12 19.8702C12.5523 19.8702 13 19.4225 13 18.8702H11ZM7.3125 3.625H16.6875V1.625H7.3125V3.625ZM16.6875 3.625C16.7824 3.625 16.8594 3.70195 16.8594 3.79688H18.8594C18.8594 2.59738 17.887 1.625 16.6875 1.625V3.625ZM16.8594 3.79688V20.2031H18.8594V3.79688H16.8594ZM16.8594 20.2031C16.8594 20.298 16.7824 20.375 16.6875 20.375V22.375C17.887 22.375 18.8594 21.4026 18.8594 20.2031H16.8594ZM16.6875 20.375H7.3125V22.375H16.6875V20.375ZM7.3125 20.375C7.21758 20.375 7.14062 20.298 7.14062 20.2031H5.14062C5.14062 21.4026 6.11301 22.375 7.3125 22.375V20.375ZM7.14062 20.2031V3.79688H5.14062V20.2031H7.14062ZM7.14062 3.79688C7.14062 3.70195 7.21758 3.625 7.3125 3.625V1.625C6.11301 1.625 5.14062 2.59738 5.14062 3.79688H7.14062ZM11 4H13.3438V2H11V4ZM11 18.8594V18.8702H13V18.8594H11ZM6.5 17.5H17.5V15.5H6.5V17.5Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
              Phone
            </p>
          </div>
          <div className=" w-[1.3px] h-4 bg-[#656565]"></div>
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M7 20H17M9 16V20M15 16V20M3.42857 13.7143H20.5714M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
              Computer
            </p>
          </div>
          <div className="w-[1.3px] h-4 bg-[#656565]"></div>
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 9C8.55228 9 9 9.44771 9 10V11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7V10C7 9.44771 7.44772 9 8 9Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 9.5C15.8284 9.5 16.5 10.1716 16.5 11V11.0104C16.5 11.8388 15.8284 12.5104 15 12.5104C14.1716 12.5104 13.5 11.8388 13.5 11.0104V11C13.5 10.1716 14.1716 9.5 15 9.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 11.5C18.8284 11.5 19.5 12.1715 19.5 13V13.0103C19.5 13.8387 18.8284 14.5103 18 14.5103C17.1716 14.5103 16.5 13.8387 16.5 13.0103V13C16.5 12.1715 17.1716 11.5 18 11.5Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
              Smart Watches
            </p>
          </div>
          <div className="w-[1.3px] h-4 bg-[#656565]"></div>
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
              Cameras
            </p>
          </div>
          <div className="w-[1.3px] h-4 bg-[#656565]"></div>
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M4 15V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V15C9 13.8954 8.10457 13 7 13H6C4.89543 13 4 13.8954 4 15ZM4 15V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L20 15M20 15C20 13.8954 19.1046 13 18 13H17C15.8954 13 15 13.8954 15 15V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
              Headphones
            </p>
          </div>
          <div className="w-[1.3px] h-4 bg-[#656565]"></div>
          <div className="flex">
            <p className="text-[#656565] text-sm font-medium flex items-center">
              <span className="mx-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 9C8.55228 9 9 9.44771 9 10V11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7V10C7 9.44771 7.44772 9 8 9Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 9.5C15.8284 9.5 16.5 10.1716 16.5 11V11.0104C16.5 11.8388 15.8284 12.5104 15 12.5104C14.1716 12.5104 13.5 11.8388 13.5 11.0104V11C13.5 10.1716 14.1716 9.5 15 9.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 11.5C18.8284 11.5 19.5 12.1715 19.5 13V13.0103C19.5 13.8387 18.8284 14.5103 18 14.5103C17.1716 14.5103 16.5 13.8387 16.5 13.0103V13C16.5 12.1715 17.1716 11.5 18 11.5Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
              Smart Watches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
