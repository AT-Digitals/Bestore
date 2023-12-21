import routes from "../routes/routes";

const ProductsNavigationItems = [
  {
    name: "Fabric",
    link: routes.FABRIC_PRODUCT,
    subcategories: [
      {
        name: "ORGANIC COTTONS WOVENS",
        link: routes.FABRIC_PRODUCT_1,
        subproducts: [
          {
            name: "OV DOBBY WAFFLE",
          },
          {
            name: "OC MUSLIN",
          },
          {
            name: "OC D.GAUZE",
          },
          {
            name: "OC VOILET",
          },
        ],
      },
      {
        name: "WOODPULP/LYCOCELL FABRIC",
        link: routes.LYCOCELL_PRODUCT,
        subproducts: [
          {
            name: "MODAL",
          },
          {
            name: "OC-ECOVERA",
          },
          {
            name: "TENSIL",
          },
        ],
      },
      {
        name: "KNITS-RFD GRADE B ONLY",
        link: routes.FABRIC_PRODUCT_3,
        subproducts: [
          {
            name: "GOLIIKIBAR POLYSTER BLUE",
          },
          {
            name: "COTTON POLYSTER",
          },
          {
            name: "POLYSTER COLOURED",
          },
        ],
      },
      {
        name: "LINEN",
        link: routes.FABRIC_PRODUCT_4,
        subproducts: [
          {
            name: "OL PURE",
          },
          {
            name: "OL PURE",
          },
          {
            name: "OL PURE",
          },
          {
            name: "OL PURE",
          },
          {
            name: "OL-OC",
          },
          {
            name: "OL-OC",
          },
          {
            name: "OL-HEMP",
          },
          {
            name: "OL-HEMP",
          },
          {
            name: "OL-OL",
          },
          {
            name: "OL-ELCOVERO",
          },
        ],
      },
      {
        name: "PEACE SILKS",
        link: routes.PEACESILK_PRODUCT,
        subproducts: [
          {
            name: "PS HABOTAI",
          },
          {
            name: "PS CREPE",
          },
          {
            name: "PS CHARMEUSSE/STAIN",
          },
          {
            name: "OC PS",
          },
        ],
      },
      {
        name: "RECYCLED COTTON",
        link: routes.RECYCLED_COTTON,
        subproducts: [
          {
            name: "OC MUSLIN",
          },
          {
            name: "OC D.GAUZE",
          },
          {
            name: "OC D.GAUZE",
          },
          {
            name: "OC VOILE",
          },
          {
            name: "OC CAMBERIC/BATISTE",
          },
          {
            name: "OC POPLIN",
          },
          {
            name: "OC CANVAS",
          },
          {
            name: "OC DUCK/DRILL",
          },
          {
            name: "OC SATEEN",
          },
        ],
      },
      {
        name: "RECYCLED KNIT",
        link: routes.FABRIC_PRODUCT_2,
        subproducts: [
          {
            name: "REPT SWIM/ATELIETIC",
          },
          {
            name: "RPET",
          },
        ],
      },
      {
        name: "WATER REPELLENT RPET",
        link: routes.FABRIC_PRODUCT_8,
        subproducts: [
          {
            name: "CANVAS REPT",
          },
          {
            name: "RIPSTOP",
          },
        ],
      },
    ],
  },
  {
    name: "Patterns",
    link: routes.CLOTHING_PRODUCT,
    subcategories: [
      {
        name: "Floral",
        link: routes.PATTERNS_PRODUCT_1,
        subproducts: [
          {
            name: "Subproduct A",
          },
          {
            name: "Subproduct B",
          },
        ],
      },
      {
        name: "Aviary",
        link: routes.PATTERNS_PRODUCT_2,
        subproducts: [
          {
            name: "Subproduct A",
          },
          {
            name: "Subproduct B",
          },
        ],
      },
      {
        name: "Abstract",
        link: routes.PATTERNS_PRODUCT_3,
        subproducts: [
          {
            name: "Subproduct A",
          },
          {
            name: "Subproduct B",
          },
        ],
      },
    ],
  },
  {
    name: "Colours",
    link: routes.HOME_DECOR_PRODUCT,
    subcategories: [
      {
        name: "RED",
        link: routes.PRODUCT_RED,
        subproducts: [
          { name: "Red Subproduct 1" },
          {
            name: "Red Subproduct 2",
          },
        ],
      },
      {
        name: "BLUE",
        link: routes.PRODUCT_BLUE,
        subproducts: [
          {
            name: "Blue Subproduct 1",
          },
          {
            name: "Blue Subproduct 2",
          },
        ],
      },
      {
        name: "GREEN",
        link: routes.PRODUCT_GREEN,
        subproducts: [
          {
            name: "Green Subproduct 1",
          },
          {
            name: "Green Subproduct 2",
          },
        ],
      },
    ],
  },
];
export default ProductsNavigationItems;
