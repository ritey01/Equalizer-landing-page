import styled from "styled-components";
import { images } from "./images";

const MainContainer = styled.div`
  position: relative;
`;
const PhoneImg = styled.img`
  width: 55.5%;
  position: absolute;
  top: -21%;
  left: 50%;
  margin-left: -104px;
  /* left: 24%; */
`;

const BgPattern = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;
  border-radius: 0.5rem;
  margin-top: 6rem;
`;

const PremiumContainer = styled.section`
  background-color: ${(props) => props.theme.colors.darkOrange};
  padding: 1rem 1.8rem 2rem 1.8rem;
  position: absolute;
  top: 90%;
  border-radius: 0.5rem;
`;

const PremiumTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  margin-bottom: 0.8rem;
`;

const StyledPara = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.body2.fontWeight};
  font-size: 18px;
  line-height: ${(props) => props.theme.body2.lineSpacing};
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
const Button = styled.button`
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.8rem;
  border: none;
  font-weight: 700;
  font-size: 18px;
`;
const IosButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.black};
  margin-bottom: 0.7rem;
`;

const AndroidButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

const StyledPrice = styled.div`
  color: ${(props) => props.theme.colors.white};
  margin-top: 2.5rem;
  padding-bottom: 0.6rem;
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
`;

const Money = styled.span`
  font-size: 3.25rem;
  font-weight: 700;
`;

const ButtonImg = styled.img`
  padding-right: 0.5rem;
`;
const Main = () => {
  return (
    <>
      <MainContainer>
        <BgPattern>
          <img
            src={images("./bg-pattern-2.svg")}
            alt="background pattern"
            width="75%"
          />
          <PhoneImg
            src={images("./illustration-app.png")}
            alt="equalizer company logo"
          />
        </BgPattern>
        <PremiumContainer>
          <PremiumTitle>Premium EQ</PremiumTitle>
          <StyledPara>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
            <StyledPrice>
              <Money>$4 </Money>/ month
            </StyledPrice>
          </StyledPara>
          <ButtonContainer>
            <IosButton>
              <ButtonImg src={images("./icon-apple.svg")} alt="apple icon" />
              iOS Download
            </IosButton>
            <AndroidButton>
              <ButtonImg
                src={images("./icon-android.svg")}
                alt="android icon"
              />
              Android Download
            </AndroidButton>
          </ButtonContainer>
        </PremiumContainer>
      </MainContainer>
    </>
  );
};

export default Main;
