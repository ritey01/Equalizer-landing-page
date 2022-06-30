import styled from "styled-components";
import { images } from "./images";

const StyledHeader = styled.header`
  position: relative;
  max-width: 20.4rem;
  /* margin: 0 1.5rem; */
  margin: 0 auto;
  padding: 1.1rem;
`;

const StyledLogo = styled.img`
  margin-top: 2.5rem;
`;
const HeaderTitle = styled.h1`
  font-weight: ${(props) => props.theme.h1.fontWeight};
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: -0.45px;
`;

const HeaderPara = styled.p`
  font-weight: ${(props) => props.theme.body2.fontWeight};
  font-size: ${(props) => props.theme.body2.fontSize};
  line-height: ${(props) => props.theme.body2.lineSpacing};
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={images("./logo.svg")} alt="equalizer company logo" />
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
