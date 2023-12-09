import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Global from "./styles/Global.module.css";

import Header from "components/headers/light.js";
export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = (props) => <span className={Global.highlightedText} {...props} />;
  const HeaderContainer =  (props) => <div className={Global.headerContainer} {...props} />;

  return (
    <>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <AnimationRevealPage>
      <Hero  
        superHeading={<><HighlightedText>Velkommen</HighlightedText></>}
        subheading={<Subheading>Established Since 2014</Subheading>}
        //heading={<><HighlightedText>Bestil mad hurtigt og nemt!</HighlightedText></>}
       // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageStyle={Global.imageCss}
        imageDecoratorBlob={true }
        primaryButtonText="Bestil nu"
        watchVideoButtonText="Om us"
      />
  
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />

      <Footer />
    </AnimationRevealPage>
    </>
  );
}
