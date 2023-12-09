import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Global from "../../styles/Global.module.css";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import DesignIllustration from "../../images/design-illustration.svg";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is important for accessibility reasons

const Container = (props) => <div className={Global.container} {...props} />;
const TwoColumn = (props) => <div className={Global.twoColumn} {...props} />;
const LeftColumn = (props) => <div className={Global.leftColumn} {...props} />;
const RightColumn = (props) => <div className={Global.rightColumn} {...props} />;

const SuperHeading = (props) => <h1 className={Global.superHeading} {...props} />;

const Subheading = (props) => <h5 className={Global.subheading}{...props} />;
const Heading = (props) => <h1 className={Global.heading}{...props} />;
const Paragraph = (props) => <p className={Global.paragraph}{...props} />;

const Actions = (props) => <div className={Global.actions}{...props} />;

const PrimaryButton =(props) => <button className={Global.primaryButton}{...props} />;

const WatchVideoButton = (props) => <button className={Global.watchVideoButton}{...props} />;
const IllustrationContainer = (props) => <div className={Global.illustrationContainer}{...props} />;

const StyledModal = ({ children, ...props }) => (
  <ReactModalAdapter {...props} className={`${Global.mainHeroModal__overlay} mainHeroModal`}>
    <div className={`${Global.mainHeroModal__content} content`}>
      {children}
    </div>
  </ReactModalAdapter>
);



const ModalHeading = tw.h2`text-xl md:text-2xl font-bold text-red-600`;
const ModalText = tw.p`mt-4 text-sm md:text-base leading-relaxed text-gray-700`;

const CloseModalButton = tw.button`absolute top-0 right-0 mt-4 mr-4 hocus:text-red-500`;

export default ({
  superHeading = "empty",
  subheading = "Our Expertise",
  heading = "",
  description="",
  primaryButtonText="Get Started",
  primaryButtonUrl="/components/innerPages/OrderPage",
  watchVideoButtonText="Watch Video",
  watchVideoYoutubeUrl="https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc=DesignIllustration,
  imageStyle = ""
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  
  return (
    <>
      <Container>
        <TwoColumn>
          <LeftColumn>
           
            <SuperHeading>{superHeading}</SuperHeading>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <WatchVideoButton onClick={toggleModal}>
              <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="8" x2="12.01" y2="8" />  <rect x="4" y="4" width="16" height="16" rx="2" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
              <span className="playText">{watchVideoButtonText}</span>
                
              </WatchVideoButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
            <img
              className={imageStyle} // Use `className` to apply the class from your CSS module
              src={imageSrc}
              alt="Hero"
            />

            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
      <CloseModalButton onClick={toggleModal}>
        <CloseIcon tw="w-6 h-6" />
      </CloseModalButton>
      <div className="content">
        <ModalHeading>Vores Pizzeria</ModalHeading>
        <ModalText>
          Velkommen til vores hyggelige pizzeria i hjertet af byen. Vi er stolte af at servere håndlavet pizza bagt i stenovn med de friskeste ingredienser. Kom ind og oplev smagen af ægte italiensk pizza.
        </ModalText>
        <ModalText>
          Åbningstider: Mandag - Søndag: 11:00 - 22:00
        </ModalText>
      </div>
      
    </StyledModal>
      </Container>
    </>
  );
};
