export type PortfolioProject = {
  name: string;
  iconSrc: string;
  bgClass?: string;
};

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Beblis",
    iconSrc: "/assets/images/porfolio/beblis_logo.png",
    bgClass: "bg-[#A02A4A]",
  },
  {
    name: "Britcam landscape",
    iconSrc: "/assets/images/client_logo_omarsa.svg",
    bgClass: "bg-[#E8E2D5]",
  },
  {
    name: "Coosofan cooperativa",
    iconSrc: "/assets/images/porfolio/cosofan_logo.png",
    bgClass: "bg-[#00964B]",
  },
  {
    name: "Easydrop",
    iconSrc: "/assets/images/porfolio/easydrop_logo.png",
  },
  {
    name: "Laesystem",
    iconSrc: "/assets/images/porfolio/laesystem_logo.png",
    bgClass: "bg-[#E7F0EF]",
  },
  {
    name: "Favesa",
    iconSrc: "/assets/images/porfolio/favesa_logo.png",
    bgClass: "bg-gradient-to-b from-[#EE1858] to-[#FF0000]",
  },
];
