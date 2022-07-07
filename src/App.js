import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Background from "./components/Background";
import styled from "styled-components";

const PageContainer = styled.div``;

const App = () => {
  return (
    <PageContainer>
      <Background />
      <Header />
      <Main />
      <Footer />
    </PageContainer>
  );
};

export default App;
