export type PageMetadata = {
  name: string;
  description: string;
  href: string;
};

// HOME
const HOME: PageMetadata = {
  name: "Home",
  description: "",
  href: "/",
};

// LEGAL
const PRIVACY: PageMetadata = {
  name: "Privacy",
  description: "",
  href: "privacy",
};
const TERMS: PageMetadata = {
  name: "Terms and Policies",
  description: "",
  href: "terms",
};

// APP
const EDUCATION: PageMetadata = {
  name: "Education",
  description: "",
  href: "education",
};
const MUSIC: PageMetadata = {
  name: "Music",
  description: "",
  href: "music",
};
const NOTES: PageMetadata = {
  name: "Notes",
  description: "",
  href: "notes",
};
const WORK: PageMetadata = {
  name: "Work",
  description: "",
  href: "work",
};

export const METADATA = {
  HOME,
  legal: {
    PRIVACY,
    TERMS,
  },
  app: {
    EDUCATION,
    MUSIC,
    NOTES,
    WORK,
  },
};
