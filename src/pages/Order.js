import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import styled from "styled-components";
import Header from "components/headers/light.js";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HeaderContainer = styled.div`
  background-color: #887c51;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23000000' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E");  
  background-position: center;
  box-shadow: 0px 35px 7px rgba(5, 5, 5, 5);
  position: sticky;
  top: 0;
  z-index: 10000;
  /* Add the pseudo-element here */
  &::after {
    content: "Ordups Pizza - Forno A Legna";
    position: absolute;
    bottom: -25px; /* Adjust as needed */
    left: 0;
    width: 100%;
    text-align: center;
    /* Translated styles from HighlightedText */
    color: white; /* text-gray-100, assuming standard gray-100 */
    padding-left: 16px; /* px-4 */
    padding-right: 16px; /* px-4 */
    display: inline-block; /* inline-block */
    font-size: 1rem; /* text-sm */
    font-weight: 750;
    transform: skewX(-12deg); /* -skew-x-12 */
    white-space: nowrap; /* To prevent wrapping in skewed element */
  }
`;

// const HighlightedText = tw.span`bg-black text-gray-100 px-4 transform -skew-x-12 inline-block text-sm`;


  return (
    <>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AnimationRevealPage>
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
    </>
  );
}
