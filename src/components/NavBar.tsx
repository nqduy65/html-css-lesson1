import { useState } from "react";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  //   toggleBtn.classList.toggle("toggle_rotate");
  //   dropDownMenu.classList.toggle("open");
  return (
    <header>
      <div className="navbar">
        <div>
          <a href="#" target="_blank">
            <img
              src="https://www.cyberlogitec.com.vn/_next/image?url=%2Flogo.png&w=256&q=75"
              alt="Cyberlogitec Vietnam"
            />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="#">
              Solutions
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </a>
            <ul>
              <a style={{ textDecoration: "underline" }}>Overview</a>
              <li>
                <a>Forwarding</a>
              </li>
              <li>
                <a>Container tracking</a>
              </li>
              <li>
                <a>Shipping</a>
              </li>
              <li>
                <a>Factory</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Services
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
              <ul>
                <a style={{ textDecoration: "underline" }}>Overview</a>
                <li>
                  <a>Software Development</a>
                </li>
                <li>
                  <a>Quality Assurance</a>
                </li>
                <li>
                  <a>Global Service Desk</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#">
              Careers
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
              <ul>
                <a style={{ textDecoration: "underline" }}>Overview</a>
                <li>
                  <a>Experienced Hire</a>
                </li>
                <li>
                  <a>Fresher Training Program</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="action_btn">
          <a href="#">Contact Us</a>
        </div>
        <div
          className={"toggle_btn" + (isToggle ? " toggle_rotate" : "")}
          onClick={() => {
            setIsToggle(!isToggle);
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <i className="fa-solid fa-bars" style={{ color: "#fff" }}></i>
        </div>
      </div>
      <div className={"dropdown" + (isDropdownOpen ? " open" : "")}>
        <ul>
          <li>
            <button type="button" className="btn_action">
              Contact Us
            </button>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Solutions</a>
            <ul className="mobile-ul">
              <a style={{ textDecoration: "underline" }}>Overview</a>
              <li>
                <a>Forwarding</a>
              </li>
              <li>
                <a>Container tracking</a>
              </li>
              <li>
                <a>Shipping</a>
              </li>
              <li>
                <a>Factory</a>
              </li>
            </ul>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              style={{ fontSize: "0.75rem" }}
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
            </svg>
          </li>
          <li>
            <a href="#">Services</a>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              style={{ fontSize: "0.75rem" }}
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
            </svg>
          </li>
          <li>
            <a href="#">Careers</a>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="down"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              style={{ fontSize: "0.75rem" }}
            >
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
