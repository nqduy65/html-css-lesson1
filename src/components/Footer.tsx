const Footer = () => {
  return (
    <footer>
      <div className="footer-media">
        <a style={{ color: "grey" }}>
          <svg
            className="svg-fb"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="facebook"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            style={{ fontSize: "2.5rem" }}
          >
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
          </svg>
        </a>
        <a style={{ color: "grey" }}>
          <svg
            className="svg-ytb"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="youtube"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            style={{ fontSize: "2.5rem" }}
          >
            <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
          </svg>
        </a>
      </div>
      <div className="footer-link">
        <a>CONTACT US</a>
        <a>JOIN US</a>
      </div>
    </footer>
  );
};

export default Footer;
