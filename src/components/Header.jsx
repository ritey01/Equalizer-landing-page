import styled from "styled-components";
import { images } from "./images";

const HeaderTitle = styled.h1`
  font-family: ${(props) => props.theme.h1.fontFamily};
`;

const Header = () => {
  return (
    <header>
      <img src={images("./logo.svg")} alt="equalizer company logo" />
      <HeaderTitle>We make your music sound extraordinary.</HeaderTitle>
      <p>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </header>
  );
};

export default Header;
