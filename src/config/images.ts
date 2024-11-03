export const images = {
  hero: {
    main: "/images/daikin-stylish-white.webp",
    alt: "Daikin Stylish airconditioner in modern interieur"
  },
  products: {
    stylish: {
      white: "/images/daikin-stylish-white.webp",
      black: "/images/daikin-stylish-black.webp",
      silver: "/images/daikin-stylish-silver.webp",
      blackwood: "/images/daikin-stylish-blackwood.webp",
      alt: "Daikin Stylish airconditioner"
    },
    emura: {
      main: "/images/daikin-emura.webp",
      alt: "Daikin Emura airconditioner"
    },
    perfera: {
      main: "/images/daikin-perfera.webp",
      alt: "Daikin Perfera airconditioner"
    }
  },
  installation: {
    process: "/images/installation.webp",
    alt: "Professionele airco installatie"
  }
} as const;

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const productImages: ProductImage[] = [
  {
    src: images.products.stylish.white,
    alt: "Daikin Stylish Wit",
    title: "Daikin Stylish",
    description: "Stijlvol design in mat wit"
  },
  {
    src: images.products.stylish.black,
    alt: "Daikin Stylish Zwart",
    title: "Daikin Stylish Black",
    description: "Modern design in mat zwart"
  },
  {
    src: images.products.stylish.silver,
    alt: "Daikin Stylish Zilver",
    title: "Daikin Stylish Silver",
    description: "Elegant design in zilverkleur"
  },
  {
    src: images.products.stylish.blackwood,
    alt: "Daikin Stylish Blackwood",
    title: "Daikin Stylish Blackwood",
    description: "Luxe design in blackwood finish"
  },
  {
    src: images.products.emura.main,
    alt: "Daikin Emura",
    title: "Daikin Emura",
    description: "Premium design airconditioner"
  },
  {
    src: images.products.perfera.main,
    alt: "Daikin Perfera",
    title: "Daikin Perfera",
    description: "Krachtige en efficiënte airconditioner"
  }
];