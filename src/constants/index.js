export { default as SOCIAL } from "./social";
export { default as CONTACT } from "./contact";
export { default as TECHNOLOGIES } from "./technologies";
export { default as REGEX } from "./regex";

export const APP_NAME = "Devob";
export const API_URI = process.env.API_URI;
export const DEFAULT_META = {
  title: "Home",
  description:
    "Developer brain knows the simplest and best way to do what you want.",
  keywords: "",
  url: "https://devob.az",
  image: "/images/logo.png",
};

export const NAV_LIST = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "What We Do",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
