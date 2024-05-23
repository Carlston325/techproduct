import { useState } from "react";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar(props) {
  const width = props.screenWidth;

  const [customStyle, setCustomStyle] = useState({ display: "none" });
  function handleMouseOver() {
    setCustomStyle({ display: "flex" });
  }
  function handleMouseOut() {
    setCustomStyle({ display: "none" });
  }

  let imgSrc = "./images/apex_drone/drone_sunset.png";
  if (width >= 1500) {
    imgSrc = "./images/apex_drone/drone_sunset.png";
  } else if (width <= 1200) {
    imgSrc = "./images/apex_drone/drone_sunset_w1200_h250.png";
  }

  return (
    <>
      <header>
        <img className="headerBackground" src={imgSrc} alt="background image" />
        <h1>Apex Drone X-268</h1>
        {width <= 800 ? (
          <>
            <div>
              <MenuIcon
                className="drpdwn"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <div
                className="drpdwnContent"
                style={customStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Button btnPath="/" btnName="Home" />
                <Button btnPath="/about" btnName="About us" />
                <Button btnPath="/contact" btnName="Contact us" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Button btnPath="/" btnName="Home" />
              <Button btnPath="/about" btnName="About us" />
              <Button btnPath="/contact" btnName="Contact us" />
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
