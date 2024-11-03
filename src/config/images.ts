export const images = {
  hero: {
    main: "/images/daikin-stylish-wit.webp",
    alt: "Daikin Stylish airconditioner in modern interieur"
  },
  products: {
    stylish: {
      white: "/images/daikin-stylish-wit.webp",
      black: "/images/daikin-stylish-zwart.webp",
      silver: "/images/daikin-stylish-silver.webp",
      blackwood: "/images/daikin-stylish-blackwood.webp",
      alt: "Daikin Stylish airconditioner"
    },
    emura: {
      white: "/images/daikin-emura-wit.webp",
      black: "/images/daikin-emura-zwart.webp",
      silver: "/images/daikin-emura-zilver.webp",
      alt: "Daikin Emura airconditioner"
    },
    perfera: {
      white: "/images/daikin-perfera-wit.webp",
      alt: "Daikin Perfera airconditioner"
    }
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
    src: images.products.emura.white,
    alt: "Daikin Emura Wit",
    title: "Daikin Emura",
    description: "Premium design airconditioner"
  },
  {
    src: images.products.emura.black,
    alt: "Daikin Emura Zwart",
    title: "Daikin Emura Black",
    description: "Luxe design in zwart"
  },
  {
    src: images.products.perfera.white,
    alt: "Daikin Perfera",
    title: "Daikin Perfera",
    description: "Krachtige en efficiënte airconditioner"
  }
];