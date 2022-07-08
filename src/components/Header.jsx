import styled from "styled-components";
import { images } from "./images";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  position: relative;
  margin: 0 auto;
  padding: 1.1rem;

  @media (min-width: 500px) {
    margin-bottom: 10rem;
    padding: 2rem;
  }
  @media (min-width: 1430px) {
    margin-left: 6rem;
    margin-bottom: 13rem;
  }
`;

const StyledLogo = styled.img`
  margin-top: 1rem;
`;
const HeaderTitle = styled.h1`
  font-weight: ${(props) => props.theme.h1.fontWeight};
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.45p;
  max-width: 70%;
  @media (min-width: 750px) {
    font-size: 64px;
    max-width: 67%;
    line-height: 4rem;
    margin-top: 3rem;
    letter-spacing: -0.73p;
  }
  @media (min-width: 1430px) {
    font-size: ${(props) => props.theme.h1.fontSize};
    line-height: ${(props) => props.theme.h1.lineSpacing};
    letter-spacing: ${(props) => props.theme.h1.letterSpacing};
    margin-bottom: 2rem;
  }
`;

const HeaderPara = styled.p`
  font-weight: ${(props) => props.theme.body2.fontWeight};
  font-size: ${(props) => props.theme.body2.fontSize};
  line-height: ${(props) => props.theme.body2.lineSpacing};
  @media (min-width: 750px) {
    font-size: 18px;
    line-height: 1.75rem;
    max-width: 76%;
  }
  @media (min-width: 850px) {
    max-width: 70%;
  }
  @media (min-width: 1430px) {
    font-weight: ${(props) => props.theme.body1.fontWeight};
    font-size: ${(props) => props.theme.body1.fontSize};
    line-height: ${(props) => props.theme.body1.lineSpacing};
    width: 66%;
  }
`;

const HeaderImg = styled.img`
  position: absolute;
  top: -4%;
  right: -11%;
  max-width: 41%;
  @media (min-width: 1000px) {
    max-width: 70%;
  }
  @media (min-width: 1430px) {
    right: 0;
    width: 21%;
  }
`;
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <StyledHeader>
      <StyledLogo src={images("./logo.svg")} alt="equalizer company logo" />
      {width >= 750 && <HeaderImg src={images("./bg-pattern-1.svg")} />}
      <HeaderTitle>We make your music sound extraordinary.</HeaderTitle>
      <HeaderPara>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </HeaderPara>
    </StyledHeader>
  );
};

export default Header;
