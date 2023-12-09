import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import OrderPage from "pages/Order.js";


import IllustrationAndVideoHero from "components/hero/TwoColumnWithVideo.js";

import TabGridCards from "components/cards/TabCardGrid.js";

import ThreeColumnWithProfileImageTestimonial from "components/testimonials/ThreeColumnWithProfileImage.js";

import FiveColumnWithInputFormFooter from "components/footers/FiveColumnWithInputForm.js";



export const components = {

  innerPages: {
    OrderPage: {
      component: OrderPage,
      url: `/components/innerPages/OrderPage`
    }
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        }
      }
    },
    Cards: {
      type: "Cards",
      elements: {
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        }
      }
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
        }
      }
    },


    Footer: {
      type: "Footers Section",
      elements: {
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/components/blocks/Footer/FiveColumnWithInputForm",
        }
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
