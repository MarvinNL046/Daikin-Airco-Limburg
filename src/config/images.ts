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
    },
    sensira: {
      white: "/images/daikin-sensira-wit.webp",
      alt: "Daikin Sensira airconditioner"
    }
  }
} as const;

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  highlight?: string;
};

export const productImages: ProductImage[] = [
  {
    src: images.products.stylish.white,
    alt: "Daikin Stylish Wit",
    title: "Daikin Stylish",
    description: "Stijlvol design in mat wit",
    price: "Vanaf €2.399,-",
    highlight: "Meest gekozen model"
  },
  {
    src: images.products.emura.white,
    alt: "Daikin Emura Wit",
    title: "Daikin Emura",
    description: "Premium design airconditioner",
    price: "Vanaf €2.199,-"
  },
  {
    src: images.products.perfera.white,
    alt: "Daikin Perfera",
    title: "Daikin Perfera",
    description: "Krachtige en efficiënte airconditioner",
    price: "Vanaf €1.899,-"
  },
  {
    src: images.products.stylish.black,
    alt: "Daikin Stylish Zwart",
    title: "Daikin Stylish Black",
    description: "Modern design in mat zwart",
    price: "Vanaf €2.399,-"
  },
  {
    src: images.products.stylish.silver,
    alt: "Daikin Stylish Silver",
    title: "Daikin Stylish Silver",
    description: "Elegant design in zilverkleur",
    price: "Vanaf €2.399,-"
  },
  {
    src: images.products.sensira.white,
    alt: "Daikin Sensira",
    title: "Daikin Sensira",
    description: "Betrouwbare basis airconditioner",
    price: "Vanaf €1.599,-",
    highlight: "Voordeligste model"
  }
];