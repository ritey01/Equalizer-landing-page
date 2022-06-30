import styled from "styled-components";
import { images } from "./images";

const MobileImg = styled.img`
  position: absolute;
  top: -15%;
  right: -25%;
  width: 281px;
`;

const TabletImg = styled.img`
  display: none;
`;

const DesktopImg = styled.img`
  display: none;
`;

const Background = () => {
  return (
    <>
      <MobileImg
        src={images("./bg-main-mobile.png")}
        alt="oval-flesh coloured"
      />

      <TabletImg
        src={images("./bg-main-tablet.png")}
        alt="oval-flesh coloured"
      />

      <DesktopImg
        src={images("./bg-main-desktop.png")}
        alt="oval-flesh coloured"
      />
    </>
  );
};

export default Background;
