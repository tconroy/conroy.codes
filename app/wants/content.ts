type Category = {
  title: string;
  items: Array<Item>;
};

type Item = {
  name: string;
  link: string | null;
  description?: string;
  cost?: number;
  quantity?: number | string;
};

/*
{
  name: '',
  link: '',
  description: '',
  cost: 100,
  quantity: 1,
},
*/

const clothing: Category = {
  title: "Clothing",
  items: [
    {
      name: "Unbound Merino Wool T-Shirts (Lightweight)",
      link: "https://unboundmerino.com/collections/mens-merino-wool-clothing/products/lightweight-merino-crew-neck-tshirt",
      description: "Black, XL",
      cost: 90,
      quantity: "any",
    },
    {
      name: "Unbound Merino Wool T-Shirts (Normal weight)",
      link: "https://unboundmerino.com/collections/mens-merino-wool-clothing/products/merino-wool-crew-neck-t-shirt",
      description: "Black, XL",
      cost: 90,
      quantity: "any",
    },
    {
      name: "Unbound Merino Wool Socks (Ankle, 3-pack)",
      link: "https://unboundmerino.com/collections/socks/products/3-pack-merino-ankle-socks",
      description: "Black",
      cost: 48,
      quantity: "any",
    },
    {
      name: "Thursday Boots Captain Lace-Up Boot",
      link: "https://thursdayboots.com/products/mens-captain-lace-up-boot-canyon",
      description: "Canyon or Black, Mens 12.5 size",
      cost: 199,
      quantity: 1,
    },
  ],
};

const dailyCarry: Category = {
  title: "Everyday Carry",
  items: [],
};

const hardware: Category = {
  title: "Hardware",
  items: [
    {
      name: "Anker 747 Charger (GaNPrime 150W)",
      link: "https://www.anker.com/products/a2340?ref=naviMenu&variant=41974288777366",
      description: "Black",
      cost: 110,
      quantity: 1,
    },
    {
      name: "Sirui 50mm f/1.8 Anamorphic 1.33x Lens (FUJIFILM X)",
      link: "https://www.anker.com/products/a2340?ref=naviMenu&variant=41974288777366",
      description: "Fuji X-Mount",
      cost: 394.0,
      quantity: 1,
    },
    {
      name: "Oura Ring Gen3 Horizon",
      link: "https://ouraring.com/product/rings/horizon/stealth",
      description: "Stealth",
      cost: 449,
      quantity: 1,
    },
    {
      name: "DJI Mic (2 TX + 1 RX + Charging Case), Wireless Lavalier Microphone",
      link: "https://www.amazon.com/gp/product/B09GYD55JF/ref=ox_sc_act_title_2?smid=ATVPDKIKX0DER&th=1",
      cost: 250,
      quantity: 1,
    },
    {
      name: "Apple iPad Air 11-inch",
      link: "https://www.apple.com/shop/buy-ipad/ipad-air/11-inch-display-128gb-space-gray-wifi",
      description: "Space Gray, 128GB, WiFi",
      cost: 599,
      quantity: 1,
    },
    {
      name: "Apple Watch Series 9 (black)",
      link: "https://www.apple.com/shop/buy-watch/apple-watch",
      description: "Black, 44mm",
      cost: 399,
      quantity: 1,
    },
    {
      name: "JSAUX FlipGo Portable Dual Monitor",
      link: "https://jsaux.com/products/flipgo-portable-dual-monitor?variant=44711962706140&gad_source=1",
      description: "16 inch Pro",
      cost: 599,
      quantity: 1,
    },
  ],
};

const software: Category = {
  title: "Software",
  items: [],
};

const home: Category = {
  title: "Home",
  items: [
    {
      name: "Vacuum storage bags with electric pump",
      link: "https://www.amazon.com/Storage-Electric-Clothes-Mattress-Comforters/dp/B0CQ58G9TD/ref=sr_1_5?crid=P4CCMOA5UB5B&dib=eyJ2IjoiMSJ9.iaRzejD58UAri90_gZpeqWiAj380ro9OgySrD7X8qAWAYGkPdc_dYKMEYmT1IKTia_QkD92mFdwDRh6Ec-b_FHNJ0ZjlDSq47KjTLg2AylR76VQyMlg25CD19xb1X5FQROUoAxSBpVLF7Vi3tO162NvQewlfGRm8O1PLCwgsT22et3NRpmV02CXmI3N-3OryQsLwmBiIUozcLeVDnELsFNDxp4cR8IXuOOI-z9vPAgOfFirABOE8K5z7UkvUV_zPB5yOhhlmNmJyHCDq4dXNEhYJVBNonSRkHhwdbIyFk4c.dpqzDo-cc3l8-BC8VVaCAjYQ4ik--4kh7-iT5cgGjyg&dib_tag=se&keywords=home%2Bstorage%2Bvacuum%2Bpump&qid=1717261701&s=home-garden&sprefix=home%2Bstorage%2Bvacuum%2Cgarden%2C1233&sr=1-5&th=1",
      description: "For clothes, blankets, etc.",
      cost: 40,
      quantity: 1,
    },
    {
      name: "Ninja BN751 Professional Plus DUO Blender",
      link: "https://www.amazon.com/dp/B0BMGSZMW9/?coliid=INQB4YHQ5V6TU&colid=2KMQGUCF39S7D&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
      description: "Black, with to-go cups",
      cost: 129,
      quantity: 1,
    },
    {
      name: "large cutting board",
      link: "https://www.amazon.com/Cutting-Mevell-Handmade-Reversible-17x11x0-75/dp/B07FV663LX/ref=sr_1_4?crid=9NKR3QG9EWJ0&dib=eyJ2IjoiMSJ9.fX-0fyepbDqVJ8P76RJp0ztokSsnbItPq13O6Au0Jw-pSQrHLIpwUrElIceCWxWpCKFYWFAdZO-nZU-Geh94QTkUx11sjIBE20MoU-fzbJG80M0JEK9DeBVzPbcuAbal8F28xGGZODf4tidLcs4hTgLSt-FPhQCXEoKeCXzD4TYGZ6UhcHgygfqtValWzBmVRbId4C3_fdzrXUt69aVrblAIdQvQb8jV0Ws_NX5u9wb0lfsqF14rZWuIYT1n3CIa3HrP_nZy2PMBgiUTGVAvZo5WdC2RsbIkd8GhQCRwK1U.IVJ5coOYkq6GRevMnsohYH2yxfBPPsZ6cWxPNAOI9n0&dib_tag=se&keywords=walnut%2Bcutting%2Bboard&qid=1717261912&s=home-garden&sprefix=walnut%2Bcutting%2Bboar%2Cgarden%2C71&sr=1-4&th=1",
      description: "Walnut, large, 17x11",
      cost: 70,
      quantity: 1,
    },
    {
      name: "Bread Maker Machine",
      link: "https://www.amazon.com/dp/B0924GVJTS/?coliid=I15AKD8OX5LA88&colid=2KMQGUCF39S7D&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
      cost: 112,
      quantity: 1,
    },
    {
      name: "Wok pan",
      link: "https://www.amazon.com/Todlabe-Carbon-Steel-Wok-Including/dp/B0CJJH7JDX/ref=sr_1_4?crid=3N377Z10OGTQQ&dib=eyJ2IjoiMSJ9.zn6C1h_LIsfdlZpt0FtYhXly05iT6qGDtnmqL6mjVXtW6uFc9ws-YigMEvvmyG95TcaNAcOXJPTfJ-XbUNruH5fnmVfWXHIZu7vqLfU3rBdLGgULGXMdl4T66iOwsIMo8bqmH2t53sJEmKaszaZtGzxuCok5YGr3Jgx2CmvhQUK27KafSFi0TwlQoeM-xLVmd0tFgisBL5JgPQWTGe1lj0tnjDixUsBwyxteCOUDe1iN74OI27thg8HQFnKrBCCs-d0dOXhBVrsKqv25kS39vGmz7Gjjfu59hLPyRr_eJ30.HYMI8XVBop8KbqrBUrdf6Ov1_dwyUQIgG-h9LKCYgSs&dib_tag=se&keywords=wok+pan&qid=1717263071&refinements=p_72%3A1248915011&rnid=1248913011&s=home-garden&sprefix=wok%2Cgarden%2C78&sr=1-4",
      cost: 40,
      quantity: 1,
    },
    {
      name: "KOMUEE 10 Packs 30 oz Glass Meal Prep Containers",
      link: "https://www.amazon.com/gp/product/B09RW2PNL9/ref=ppx_yo_dt_b_search_asin_title",
      cost: 44,
      quantity: 1,
    },
    {
      name: "Casserole Dish",
      link: "https://www.amazon.com/DOWAN-Ceramic-White-Baking-Pan/dp/B08R7D4CCM/ref=sr_1_5?crid=2N0IMCHYYIJSD&dib=eyJ2IjoiMSJ9.n31SxgY0iCQMk_o2jvtKv9RSy27U4nd843EBZC05GNdC0v29WEzp5AOP9lCkbqmTf5R9dt7wC6uVWLwL1LW0dYCrMS8N8hPMQeSw4lXCSsCAik4oCSc2iSkx299PmrrfP91K0e4G8SUioGUnH7BE_b3N_o6ATbB3AJRtO1R487kF8ECjni-gNSiZeKgFHCOQx3savL4TTSZI4rGCK73p5In7na81Ks402YPMstMPaDO64gEFvBQ1bQsgty7CfgNTlwomEzjNabrZwK6tC5V-c6efQLKnSWDvU5km_r4k0QU.FFvDjt2uUk_9e9MrffnZ1nL9Zay-LlFhN4nGou-z6mQ&dib_tag=se&keywords=Casserole%2BDish&qid=1717263432&s=home-garden&sprefix=casserole%2Bdish%2Cgarden%2C74&sr=1-5&th=1",
      cost: 27,
      quantity: 1,
    },
    {
      name: "Vtopmart Glass Food Storage Jars, 7 Pack",
      link: "https://www.amazon.com/VTOPMART-Storage-Airtight-Containers-Organization/dp/B0B27X7HFZ/ref=sr_1_6?crid=1O6GHZG1AC4SF&dib=eyJ2IjoiMSJ9.06VOwmhdH-hjHgBVMqqgGQbRWwREcmS5e_mR7NAJLmMn4gOhD1n2dtr-MVT53vZNccMagGD_y4l3obVOF5zb_oCQ0lUVdMiyt8Eu7HuJvXfKOSYMM_wyk6MFz6Jt37xYemoY5k3KQt794XPCEwoBPl_RaCqZDo2tXG8TClm_NAV-y-xzefQ431oI6vVKdZoCUT5yCzfVDaW3Y8t8SBE5A1FRh44UnEjxZLi91HTt3cwMRCGixxS2OwI61nYXe-JDSPHXfM_CESnooM8lHwrik_8jo9LjmBL-fiuhhvi7DVU.jQk5IKw1D9O5KsRjZQdy9LK9NxxW44HbhmaGVjuj9jc&dib_tag=se&keywords=bamboo+lid+storage+containers&qid=1717263537&sprefix=bamboo+lid+storage+container%2Caps%2C76&sr=8-6",
      cost: 28,
      quantity: 1,
    },
  ],
};

const books: Category = {
  title: "Books & Entertainment",
  items: [],
};

const someDay: Category = {
  title: "Some Day - very expensive things!",
  items: [
    {
      name: "Level.2 Commuter EBike",
      link: "https://www.aventon.com/products/aventon-level-commuter-ebike?variant=42030181318851&utm_id=6457160134--144142808594--aventon%20level%202--680755299495&utm_source=google&utm_medium=paid-search&utm_campaign=WP_G_SRCH_BRAND_AMT_X--6457160134&utm_content=144142808594&utm_term=680755299495&gad_source=1",
      description: "Clay color, 500W motor",
      cost: 1699,
      quantity: 1,
    },
  ],
};

export default [clothing, dailyCarry, books, hardware, software, home, someDay];
