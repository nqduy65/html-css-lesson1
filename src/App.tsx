import { useState } from "react";
import "./App.css";
import MainContext from "./components/MainContext";
import NavBar from "./components/NavBar";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";

function App() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <NavBar
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <div
        onClick={() => {
          setIsToggle(false);
          setIsDropdownOpen(false);
        }}
      >
        <MainContext />
        <PageNav />
        <hr
          style={{
            height: "1px",
            color: "grey",
            opacity: "0.2",
          }}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
