import { PortableTextBlock } from "sanity";

export type Image = {
  alt: string;
  imageURL: string;
};

export type CTA = {
  ctaText: string;
  ctaUrl: string;
};

export type Video = {
  heading: string;
  title: string;
  videoURL: string;
  height: number;
  width: number;
};

export type Header = {
  image: Image;
  heading: string;
};

export type FAQ = {
  _id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  _id?: string;
  sentiment: string;
  attribution: string;
  image: Image;
};

export type Story = {
  _id: string;
  title: string;
  slug: string;
  featuredImage: Image;
  summary: string;
  content: PortableTextBlock[];
};

export type HomePage = {
  heroSection: {
    backgroundImg: {
      desktopImg: Image;
      mobileImg: Image;
    };
    heading: string;
    subheading: string;
  };

  missionSection: {
    heading: string;
    paragraph: string;
    cta: CTA;
    image: Image;
  };

  whatWeFundSection: {
    heading: string;
    programs: {
      heading: string;
      text: string;
      image: Image;
    }[];
  };

  storiesSection: {
    heading: string;
    featuredStories: {
      title: string;
      slug: string;
      summary: string;
      featuredImage: Image;
    }[];
  };

  videoSection: {
    title: string;
    videoURL: string;
    heading: string;
    height: number;
    width: number;
  };
};

export type AboutUsPage = {
  header: Header;

  introSection: {
    heading: string;
    text: string;
  };

  impactSection: {
    heading: string;
    text: string;
    stats: {
      statValue: string;
      statUnit: string;
      statText: string;
    }[];
  };

  whyUsSection: {
    heading: string;
    text: string;
    features: {
      heading: string;
      text: string;
      image: Image;
    }[];
  };

  nationalReachSection: {
    image: Image;
    heading: string;
    text: string;
  };

  annualReportsSection: {
    heading: string;
    reports: {
      image: Image;
      year: string;
      fileUrl: string;
    }[];
  };
};

type getInvolvedOption = {
  heading: string;
  text: string;
  cta: CTA;
};

export type GetInvolvedPage = {
  header: Header;
  waysToGetInvolvedSection: {
    donate: getInvolvedOption;
    fundraise: getInvolvedOption;
    partner: getInvolvedOption;
    volunteer: getInvolvedOption;
  };
  impactSection: {
    heading: string;
    text: string;
    stats: {
      statValue: string;
      statUnit: string;
      statText: string;
    }[];
  };
  testimonialSection: Testimonial;
};

export type FundraisePage = {
  header: Header;
  fundraisedAmountSection: {
    heading: string;
    stats: {
      statValue: string;
      statUnit: string;
    }[];
  };
  fundraiseOptionsSection: {
    heading: string;
    text: string;
    icon: Image;
    cta: CTA;
  }[];
  campaignSection: {
    heading: string;
    campaigns: {
      campaignID: string;
    }[];
  };
};

export type PartnerPage = {
  header: Header;
  whyUsSection: {
    heading: string;
    text: string;
    features: {
      heading: string;
      text: string;
      image: Image;
    }[];
  };
  logosSection: {
    heading: string;
    logos: {
      image: Image;
    }[];
  };
};
