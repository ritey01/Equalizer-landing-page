import styled from "styled-components";
import { images } from "./images";

const StyledFooter = styled.footer`
  height: 17rem;
  padding: 1.5rem;
  margin-top: 26rem;
  font-size: ${(props) => props.theme.body2.fontSize};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.body2.fontWeight};
  line-height: ${(props) => props.theme.body2.lineSpacing};

  @media (min-width: 750px) {
    margin-top: 7rem;
    display: grid;
    grid-template-columns: 2fr 1fr;

    & > p {
      max-width: 60%;
    }
    & > img {
      grid-column-start: 1;
      align-self: end;
    }
  }
  @media (min-width: 1430px) {
    grid-template-columns: 1fr 2fr 1fr;

    & > p {
      grid-column-start: 2;
    }
    & > div {
      grid-column-start: 3;
    }
  }
`;

const StyledEmail = styled.span`
  font-weight: 700;
`;

const Copyright = styled.p`
  margin-bottom: 0;
  @media (min-width: 750px) {
    grid-column-start: 1;
    align-self: end;
    margin: 0;
  }
`;

const Contact = styled.p`
  margin-top: 0;
  @media (min-width: 750px) {
    grid-column-start: 1;
  }
`;
const StyledIcons = styled.div`
  & img {
    margin: 2rem 1rem 1.7rem 0;
  }
  @media (min-width: 750px) {
    text-align: end;
    grid-column-start: 2;
    margin-top: -17%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={images("./logo.svg")} alt="equalizer logo" />

      <Copyright>All rights reserved © Equalizer 2021</Copyright>
      <Contact>
        Have any problems? Contact us via social media or email us at
        <StyledEmail> equalizer@example.com</StyledEmail>
      </Contact>
      <StyledIcons>
        <img src={images("./icon-facebook.svg")} alt="Facebook logo" />
        <img src={images("./icon-instagram.svg")} alt="Instagram logo" />
        <img src={images("./icon-twitter.svg")} alt="Twitter logo" />
      </StyledIcons>
    </StyledFooter>
  );
};

export default Footer;
