import { groq } from "next-sanity";
import client from "../sanity/config/client";

export async function getFAQ() {
  return client.fetch(groq`*[_type == "faq"] {
    _id,
    question,
    answer
  }`);
}

export async function getTestimonials() {
  return client.fetch(groq`*[_type == "testimonials"] {
     _id,
    sentiment,
    attribution,
    image {
      alt,
      "imageURL": asset -> url,
    }
  }`);
}

export async function getStories() {
  return client.fetch(groq`*[_type == "stories"] {
    _id,
    title,
    "slug": slug.current,
    featuredImage {
      alt,
      "imageURL": asset -> url,
    },
    summary,
    content
  }`);
}

export async function getHomePage() {
  return client.fetch(groq`*[_type == "homePage"] {
    heroSection {
      ...,
      backgroundImg {
        desktopImg {
          alt,
          "imageURL": asset -> url
        },
        mobileImg {
          alt,
          "imageURL": asset -> url
        }
      }
    },
    missionSection {
      ...,
      image {
        alt,
          "imageURL": asset -> url
      }
    },
    whatWeFundSection {
      ...,
      programs[] {
        heading,
        text,
        image {
          alt,
          "imageURL": asset -> url
        }
      }
    },
    storiesSection {
      ...,
      "featuredStories": featuredStories[] -> {
        title,
        "slug": slug.current,
        featuredImage {
        alt,
          "imageURL": asset -> url
        },
        summary,
      }
    },
    videoSection
  }`);
}

export async function getAboutUsPage() {
  return client.fetch(groq`*[_type == "aboutPage"] {
    header {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
    introSection,
    impactSection,
    whyUsSection {
      ...,
      features[] {
        _key,
        heading,
        text,
        image {
          alt,
          "imageURL": asset -> url
        }
      }
    },
    nationalReachSection {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
    annualReports {
      ...,
      reports[] {
        _key,
        year,
        fileUrl,
        image {
          alt,
          "imageURL": asset -> url
        }
      }
    }
  }`);
}

export async function getInvolved() {
  return client.fetch(groq`*[_type == "getInvolvedPage"] {
    header,
    waysToGetInvolvedSection,
    impactSection {
      ...,
      stats[] {
        _key,
        statValue,
        statUnit,
        statText
      }
    },
    testimonialSection -> {
      sentiment,
      attribution,
      image {
        alt,
        "imageURL": asset -> url
      }
    }
  }`);
}

export async function getFundraisePage() {
  return client.fetch(groq`*[_type == "fundraisePage"] {
    header,
    fundraisedAmountSection {
      ...,
      stats
    },
    fundraiseOptionsSection[] {
      ...,
      icon {
        alt,
        "imageURL": asset -> url
      }
    },
    campaignSection 
  }`);
}

export async function getPartnerPage() {
  return client.fetch(groq`*[_type == "partnerPage"] {
    header,
    whyUsSection {
      ...,
      features[] {
        _key,
        heading,
        text,
        image {
          alt,
          "imageURL": asset -> url
        }
      }
    },
    logosSection {
      ...,
      logos[] {
        _key,
        alt,
        "imageURL": asset -> url
      }
    }
  }`);
}

export async function getWaysToDonatePage() {
  return client.fetch(groq`*[_type == "waysToDonatePage"] {
  header, 
  waysToDonateSection {
    giftOnline  {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
     giftOverPhone  {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
     mailCheck  {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
     donateStock  {
      ...,
      image {
        alt,
        "imageURL": asset -> url
      }
    },
    
  },
  impactSection,
  testimonialSection -> {
      sentiment,
      attribution,
      image {
        alt,
        "imageURL": asset -> url
      }
    }
  }`);
}
