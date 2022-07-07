import styled from "styled-components";
import { images } from "./images";
import { useState, useEffect } from "react";

const MobileImg = styled.img`
  position: absolute;
  top: -24%;
  right: -73%;
  width: 30rem;
  overflow: hidden;
  @media (min-width: 500px) {
    right: -50%;
  }
`;

const TabletImg = styled.img`
  overflow: hidden;
  position: absolute;
  left: -42%;
  top: -24%;
  width: 160%;
`;

const DesktopImg = styled.img`
  overflow: hidden;
  position: absolute;
  left: -25%;
  top: -25%;
  width: 137%;
`;

const Background = () => {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.screen.width));
  });

  return (
    <>
      {width < 750 && (
        <MobileImg
          src={images("./bg-main-mobile.png")}
          alt="oval-flesh coloured"
        />
      )}

      {width >= 750 && width < 1430 && (
        <TabletImg
          src={images("./bg-main-tablet.png")}
          alt="oval-flesh coloured"
        />
      )}

      {width >= 1430 && (
        <DesktopImg
          src={images("./bg-main-desktop.png")}
          alt="oval-flesh coloured"
        />
      )}
    </>
  );
};

export default Background;
